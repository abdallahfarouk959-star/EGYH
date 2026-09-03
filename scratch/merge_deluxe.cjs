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

// Actually we can just remove the trailing ] from arrayStr, add a comma, then add the new JSON, then ]
let cleanArrayStr = arrayStr.trim();
if (cleanArrayStr.endsWith(']')) {
    cleanArrayStr = cleanArrayStr.slice(0, -1);
}

const deluxeCruisesJson = fs.readFileSync('scratch/deluxe.json', 'utf8');
const deluxeCruises = JSON.parse(deluxeCruisesJson);

// Convert deluxeCruises to string without the outer [ ]
let deluxeStr = JSON.stringify(deluxeCruises, null, 2).trim();
deluxeStr = deluxeStr.slice(1, -1); // remove [ and ]

let newArrayStr = cleanArrayStr;
if (!newArrayStr.endsWith(',')) {
    newArrayStr += ',';
}
newArrayStr += deluxeStr + '\n]';

const newTsContent = prefix + newArrayStr + ';\n';
fs.writeFileSync('src/data/cruisesData.ts', newTsContent);
console.log("Merged deluxe cruises successfully.");
