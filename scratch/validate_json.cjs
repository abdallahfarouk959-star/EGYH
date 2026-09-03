const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/data/newCruisesAI.json', 'utf8'));

let hasApostropheError = false;
let hasNotesError = false;
let hasYearError = false;

data.forEach(b => {
  const str = JSON.stringify(b);
  if (str.includes('â€™') || str.includes('â€“')) hasApostropheError = true;
  if (b.exclusions && b.exclusions.some(e => e.includes('Notes:-'))) hasNotesError = true;
  if (str.includes('04-01-2026') || str.includes('2026 till 04-01-2026')) hasYearError = true;
});

console.log(JSON.stringify({hasApostropheError, hasNotesError, hasYearError, totalBoats: data.length}, null, 2));
