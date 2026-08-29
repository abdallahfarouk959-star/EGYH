const fs = require('fs');

const cruisesPath = 'src/data/newCruisesAI.json';
const extractedPath = 'src/data/all_cruises_extracted.json';

const cruises = JSON.parse(fs.readFileSync(cruisesPath, 'utf8'));
const extracted = JSON.parse(fs.readFileSync(extractedPath, 'utf8'));

// Helper to find extracted data
function findExtractedData(cruiseName) {
  let name = cruiseName.toLowerCase().replace('ms ', '').trim();
  let raw = extracted.find(r => r.cruiseName.toLowerCase().includes(name));
  if (!raw && name === 'radamis 2') raw = extracted.find(r => r.fileName.toLowerCase().includes('radamis2'));
  if (!raw && name === 'sunrise semirames 3') raw = extracted.find(r => r.fileName.toLowerCase().includes('semirames3'));
  if (!raw) {
    raw = extracted.find(r => r.fileName.toLowerCase().includes(name));
  }
  return raw;
}

function parsePricing(text, seasonName) {
  // Finds: USD 123 per person in a Triple... USD 456 ... Double... USD 789 ... Single
  // It relies on the numbers appearing in order: Triple, Double, Single (or just Double, Single)
  const seasonRegex = new RegExp(`${seasonName}[\\s\\S]*?(?=Summer Price|Winter Price|Peak|ITINERARY|Inclusions|$)`, 'i');
  const match = text.match(seasonRegex);
  if (!match) return null;
  
  const seasonText = match[0];
  const prices = [...seasonText.matchAll(/USD\s*(\d+)/gi)].map(m => parseInt(m[1]));
  
  if (prices.length >= 3) {
    return {
      seasonName,
      tripleSharing: prices[0],
      doubleSharing: prices[1],
      singleCabin: prices[2]
    };
  } else if (prices.length === 2) {
    return {
      seasonName,
      tripleSharing: null,
      doubleSharing: prices[0],
      singleCabin: prices[1]
    };
  }
  return null;
}

function parseItinerary(text, titleRegex) {
  const match = text.match(titleRegex);
  if (!match) return null;
  
  // Extract text from the start of this itinerary until the next one or the end
  const startIndex = match.index;
  let endIndex = text.length;
  
  // Find where it ends (next NIGHTS block or Inclusions)
  const nextIterRegex = /(?:3NIGHTS|4NIGHTS|7NIGHTS|Inclusions\s*&?\s*Exclusions)/gi;
  nextIterRegex.lastIndex = startIndex + 10; // skip current match
  const nextMatch = nextIterRegex.exec(text);
  if (nextMatch) {
    endIndex = nextMatch.index;
  }
  
  const iterText = text.substring(startIndex, endIndex);
  const id = match[0].replace(/\s+/g, '-').toLowerCase();
  
  // Pricing
  const pricing = [];
  ['Summer Price', 'Winter Price', 'Peak'].forEach(season => {
    const p = parsePricing(iterText, season);
    if (p) pricing.push(p);
  });
  
  // Days
  const days = [];
  const daysSplit = iterText.split(/Day\s*\d+/i);
  for (let i = 1; i < daysSplit.length; i++) {
    const dayContent = daysSplit[i].trim().split('\n').map(s => s.trim()).filter(s => s.length > 3);
    days.push({
      dayNumber: i,
      title: `Day ${i}`,
      activities: dayContent.slice(0, 10) // Limit just in case
    });
  }
  
  return {
    id: id,
    durationName: match[0],
    departureDay: "Check Schedule", // Default fallback
    pricing: pricing,
    days: days
  };
}

function parseListSection(text, sectionName, nextSectionName) {
  const regex = new RegExp(`${sectionName}[\\s\\S]*?(?=${nextSectionName}|$)`, 'i');
  const match = text.match(regex);
  if (!match) return [];
  
  return match[0].replace(new RegExp(sectionName, 'i'), '')
    .split('\n')
    .map(s => s.trim())
    .filter(s => s.length > 5 && !s.toLowerCase().includes('inclusions & exclusions'));
}

let updatedCount = 0;

cruises.forEach(c => {
  // Skip verified ships with images
  if (c.gallery && c.gallery.length > 0 && !c.gallery[0].includes('placeholder')) {
    return;
  }
  
  const rawData = findExtractedData(c.name);
  if (!rawData) {
    console.log(`Could not find extracted data for: ${c.name}`);
    return;
  }
  
  const text = rawData.fullText;
  
  // Parse Itineraries
  const itineraries = [];
  const iterMatches = text.match(/\d+\s*NIGHTS[^\n]*/gi);
  if (iterMatches) {
    iterMatches.forEach(m => {
      // Escape regex chars just in case
      const esc = m.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const it = parseItinerary(text, new RegExp(esc, 'i'));
      if (it) itineraries.push(it);
    });
  }
  
  if (itineraries.length > 0) {
    c.itineraries = itineraries;
  }
  
  // Parse Policies
  const inclusions = parseListSection(text, 'Inclusion', 'Exclusion');
  const exclusions = parseListSection(text, 'Exclusion', 'Notes|Children Policy');
  const childrenPolicy = parseListSection(text, 'Children Policy', 'Other language Guide|$');
  
  if (inclusions.length > 0) c.inclusions = inclusions;
  if (exclusions.length > 0) c.exclusions = exclusions;
  if (childrenPolicy.length > 0) c.childrenPolicy = childrenPolicy;
  
  updatedCount++;
});

fs.writeFileSync(cruisesPath, JSON.stringify(cruises, null, 2));
console.log(`Successfully updated ${updatedCount} ships.`);

