const fs = require('fs');

const rawData = fs.readFileSync('scratch/raw_ultra_deluxe.txt', 'utf-8');
const lines = rawData.split('\n').map(l => l.trim()).filter(l => l.length > 0);

const cruises = [];
let currentCruise = null;
let currentItinerary = null;
let currentSeason = null;
let currentDay = null;
let state = 'ROOT'; // ROOT, ITINERARY_PRICING, ITINERARY_DAYS, INCLUSIONS, EXCLUSIONS, CHILDREN_POLICY, NOTE

function generateId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  let lowerLine = line.toLowerCase();
  
  // Encoding fixes just in case
  lowerLine = lowerLine.replace(/â€™/g, "'").replace(/â€“/g, '-').replace(/Â·/g, '.').replace(/Â/g, '');
  const cleanLine = line.replace(/â€™/g, "'").replace(/â€“/g, '-').replace(/Â·/g, '.').replace(/Â/g, '');

  if (lowerLine.startsWith('boat name:')) {
    if (currentCruise) {
      cruises.push(currentCruise);
    }
    const name = cleanLine.substring(10).trim();
    currentCruise = {
      id: generateId(name),
      name: name,
      type: 'Nile Cruise',
      category: 'ultra-deluxe',
      subType: 'nile-cruise',
      featured: false,
      gallery: [],
      inclusions: [],
      exclusions: [],
      childrenPolicy: [],
      note: '',
      itineraries: []
    };
    state = 'ROOT';
    continue;
  }

  if (!currentCruise) continue;

  if (lowerLine.match(/^\d+nights/i)) {
    // New itinerary
    const match = cleanLine.match(/^(\d+NIGHTS.*?)\((.*?)\)/i);
    let durationName = cleanLine;
    let departureDay = '';
    if (match) {
      durationName = match[1].trim();
      departureDay = match[2].trim();
    }
    currentItinerary = {
      id: generateId(currentCruise.name + '-' + durationName),
      durationName,
      departureDay,
      pricing: [],
      days: []
    };
    currentCruise.itineraries.push(currentItinerary);
    state = 'ITINERARY_PRICING';
    continue;
  }

  if (state === 'ITINERARY_PRICING' || state === 'ITINERARY_DAYS') {
    if (lowerLine === 'itinerary') {
      state = 'ITINERARY_DAYS';
      continue;
    }
    
    if (lowerLine === 'inclusions & exclusions' || lowerLine === 'inclusion' || lowerLine === 'inclusions') {
      state = 'INCLUSIONS';
      continue;
    }

    if (lowerLine === 'exclusion' || lowerLine === 'exclusions') {
      state = 'EXCLUSIONS';
      continue;
    }

    if (lowerLine === 'children policy') {
      state = 'CHILDREN_POLICY';
      continue;
    }
    
    if (lowerLine.startsWith('notes:-') || lowerLine.startsWith('note:-') || lowerLine === 'notes:') {
      state = 'NOTE';
      currentCruise.note = cleanLine.replace(/^notes?:-?\s*/i, '').trim();
      continue;
    }

    if (state === 'ITINERARY_PRICING') {
      if (lowerLine.includes('price') || lowerLine.includes('rates') || lowerLine.includes('season')) {
        currentSeason = {
          seasonName: cleanLine,
          applicableDates: [],
          tripleSharing: null,
          doubleSharing: 0,
          singleCabin: 0
        };
        currentItinerary.pricing.push(currentSeason);
      } else if (cleanLine.match(/^\d{1,2}[-/]\d{1,2}[-/]\d{2,4}\s*till\s*\d{1,2}[-/]\d{1,2}[-/]\d{2,4}/)) {
        if (currentSeason) currentSeason.applicableDates.push(cleanLine);
      } else if (lowerLine.startsWith('usd')) {
        const amountMatch = cleanLine.match(/usd\s*(\d+)/i);
        const amount = amountMatch ? parseInt(amountMatch[1], 10) : 0;
        if (lowerLine.includes('triple')) {
          if (currentSeason) currentSeason.tripleSharing = amount;
        } else if (lowerLine.includes('double')) {
          if (currentSeason) currentSeason.doubleSharing = amount;
        } else if (lowerLine.includes('single')) {
          if (currentSeason) currentSeason.singleCabin = amount;
        }
      }
    } else if (state === 'ITINERARY_DAYS') {
      const dayMatch = cleanLine.match(/^day\s+(\d+)(?:\s*[-–]\s*(.*))?/i);
      if (dayMatch) {
        currentDay = {
          dayNumber: parseInt(dayMatch[1], 10),
          title: (dayMatch[2] || '').trim(),
          activities: []
        };
        currentItinerary.days.push(currentDay);
      } else if (currentDay) {
        currentDay.activities.push(cleanLine);
      }
    }
  } else if (state === 'INCLUSIONS') {
    if (lowerLine === 'exclusion' || lowerLine === 'exclusions') {
      state = 'EXCLUSIONS';
      continue;
    }
    if (lowerLine === 'children policy') {
      state = 'CHILDREN_POLICY';
      continue;
    }
    if (lowerLine.startsWith('notes:-') || lowerLine.startsWith('note:-') || lowerLine === 'notes:') {
      state = 'NOTE';
      const noteContent = cleanLine.replace(/^notes?:-?\s*/i, '').trim();
      if (noteContent) {
          currentCruise.note = currentCruise.note ? currentCruise.note + '\n' + noteContent : noteContent;
      }
      continue;
    }
    if (lowerLine.match(/^\d+nights/)) {
        // safety
    }
    if (lowerLine !== 'inclusion' && lowerLine !== 'inclusions & exclusions') {
      currentCruise.inclusions.push(cleanLine);
    }
  } else if (state === 'EXCLUSIONS') {
    if (lowerLine === 'children policy') {
      state = 'CHILDREN_POLICY';
      continue;
    }
    if (lowerLine.startsWith('notes:-') || lowerLine.startsWith('note:-') || lowerLine === 'notes:') {
      state = 'NOTE';
      const noteContent = cleanLine.replace(/^notes?:-?\s*/i, '').trim();
      if (noteContent) {
          currentCruise.note = currentCruise.note ? currentCruise.note + '\n' + noteContent : noteContent;
      }
      continue;
    }
    if (lowerLine !== 'exclusion' && lowerLine !== 'exclusions') {
      currentCruise.exclusions.push(cleanLine);
    }
  } else if (state === 'CHILDREN_POLICY') {
    if (lowerLine.match(/^=================/)) continue;
    currentCruise.childrenPolicy.push(cleanLine);
  } else if (state === 'NOTE') {
    if (lowerLine === 'children policy') {
      state = 'CHILDREN_POLICY';
      continue;
    }
    if (lowerLine.match(/^=================/)) continue;
    currentCruise.note = currentCruise.note ? currentCruise.note + '\n' + cleanLine : cleanLine;
  }
}

if (currentCruise) {
  cruises.push(currentCruise);
}

// Ensure clean children policies & notes
cruises.forEach(c => {
    c.childrenPolicy = c.childrenPolicy.filter(l => l.trim().length > 0 && !l.includes('===='));
});

// Write to a temporary JSON file
fs.writeFileSync('scratch/ultra_deluxe.json', JSON.stringify(cruises, null, 2));
console.log('Parsed', cruises.length, 'cruises');
