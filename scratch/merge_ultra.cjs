const fs = require('fs');

// Read the typescript file and extract the data
const tsContent = fs.readFileSync('src/data/cruisesData.ts', 'utf8');

// Match the part before the array and the array itself
const match = tsContent.match(/([\s\S]*?export const cruises: CruiseData\[\] = )([\s\S]*?);/);

if (!match) {
  console.error("Could not parse cruisesData.ts");
  process.exit(1);
}

const prefix = match[1];
const arrayStr = match[2];

// Parse existing cruises using eval (safe here since we control it, but let's be careful)
// Actually we can just remove the trailing ] from arrayStr, add a comma, then add the new JSON, then ]
let cleanArrayStr = arrayStr.trim();
if (cleanArrayStr.endsWith(']')) {
    cleanArrayStr = cleanArrayStr.slice(0, -1);
}

const ultraCruisesJson = fs.readFileSync('scratch/ultra_deluxe.json', 'utf8');
const ultraCruises = JSON.parse(ultraCruisesJson);

// Convert ultraCruises to string without the outer [ ]
let ultraStr = JSON.stringify(ultraCruises, null, 2).trim();
ultraStr = ultraStr.slice(1, -1); // remove [ and ]

let newArrayStr = cleanArrayStr;
if (!newArrayStr.endsWith(',')) {
    newArrayStr += ',';
}
newArrayStr += ultraStr + '\n]';

const newTsContent = prefix + newArrayStr + ';\n';
fs.writeFileSync('src/data/cruisesData.ts', newTsContent);
console.log("Merged ultra deluxe cruises successfully.");
