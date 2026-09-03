const fs = require('fs');
const path = './src/data/newCruisesAI.json';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(/04-01-2026/g, '04-01-2027');
content = content.replace(/’/g, "'");
fs.writeFileSync(path, content);
console.log('Fixed dates and apostrophes.');
