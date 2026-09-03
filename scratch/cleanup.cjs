const fs = require('fs');

// Read the typescript file and extract the data
const tsContent = fs.readFileSync('src/data/cruisesData.ts', 'utf8');

// Match the part before the array and the array itself
const match = tsContent.match(/([\s\S]*?export const cruises: CruiseData\[\] = )(\[[\s\S]*\]);/);
if (!match) {
  console.error("Could not parse cruisesData.ts");
  process.exit(1);
}

const interfaces = match[1];
const dataString = match[2];

// Evaluate the array
let cruises;
eval(`cruises = ${dataString}`);

// Helper to fix encoding issues
function fixEncoding(str) {
  return str.replace(/â€™/g, "'");
}

cruises.forEach(cruise => {
  // 1. Fix encoding in inclusions and childrenPolicy
  if (cruise.inclusions) {
    cruise.inclusions = cruise.inclusions.map(fixEncoding);
  }
  if (cruise.childrenPolicy) {
    cruise.childrenPolicy = cruise.childrenPolicy.map(fixEncoding);
  }
  if (cruise.exclusions) {
    cruise.exclusions = cruise.exclusions.map(fixEncoding);
  }

  // 2. Extract Notes from exclusions
  if (cruise.exclusions) {
    const noteIndex = cruise.exclusions.findIndex(ex => ex.toLowerCase().startsWith('notes:-') || ex.toLowerCase().startsWith('notes:'));
    if (noteIndex !== -1) {
      // Extract everything from Note onwards
      const notesArray = cruise.exclusions.splice(noteIndex);
      const combinedNote = notesArray.join('\n').replace(/^Notes:-\s*/i, '').replace(/^Notes:\s*/i, '').trim();
      if (cruise.note) {
        cruise.note += '\n' + combinedNote;
      } else {
        cruise.note = combinedNote;
      }
    }
  }

  // 3. Fix Peak winter dates: '21-12-2026 till 04-01-2026' -> '21-12-2026 till 04-01-2027'
  if (cruise.itineraries) {
    cruise.itineraries.forEach(itinerary => {
      if (itinerary.pricing) {
        itinerary.pricing.forEach(price => {
          if (price.applicableDates) {
            price.applicableDates = price.applicableDates.map(date => {
              return date.replace('04-01-2026', '04-01-2027').replace('03-01-2026', '03-01-2027');
            });
          }
        });
      }
    });
  }

  // 5. Add New year trip supplement to movenpick sunray and hamees
  if (cruise.id === 'ms-movenpick-sunray' || cruise.id === 'ms-hamees') {
    const supplement = "New year trip supplement: USD 150 per person in a double or triple-sharing cabin. USD 230 per person in a Single cabin.";
    if (cruise.note) {
      if (!cruise.note.includes('New year trip supplement')) {
        cruise.note += '\n' + supplement;
      }
    } else {
      cruise.note = supplement;
    }
  }
});

// Also check ms-historia 4NIGHTS days
const historia = cruises.find(c => c.id === 'ms-historia');
if (historia) {
  const historia4Nights = historia.itineraries.find(i => i.id.includes('4nights'));
  if (historia4Nights) {
    console.log("ms-historia 4NIGHTS days length:", historia4Nights.days.length);
    if (historia4Nights.days.length === 0) {
      // If it's empty, copy from another 4NIGHTS itinerary (e.g., ms-sonesta-star-goddess)
      const sonesta = cruises.find(c => c.id === 'ms-sonesta-star-goddess');
      if (sonesta) {
        const sonesta4Nights = sonesta.itineraries.find(i => i.id.includes('4nights'));
        if (sonesta4Nights && sonesta4Nights.days.length > 0) {
          historia4Nights.days = JSON.parse(JSON.stringify(sonesta4Nights.days));
          console.log("Copied 4NIGHTS days to ms-historia");
        }
      }
    }
  }
}

// Convert back to string
const newString = JSON.stringify(cruises, null, 2);

// Write back to file
fs.writeFileSync('src/data/cruisesData.ts', `${interfaces}${newString};\n`, 'utf8');
console.log("Data cleaned and written successfully");
