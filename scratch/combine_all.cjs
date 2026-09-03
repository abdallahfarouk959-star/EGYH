const fs = require('fs');
const path = require('path');

const luxData = JSON.parse(fs.readFileSync(path.join(__dirname, 'luxury.json'), 'utf-8'));
const uDeluxeData = JSON.parse(fs.readFileSync(path.join(__dirname, 'ultra_deluxe.json'), 'utf-8'));
const deluxeData = JSON.parse(fs.readFileSync(path.join(__dirname, 'deluxe.json'), 'utf-8'));
const standardData = JSON.parse(fs.readFileSync(path.join(__dirname, 'standard.json'), 'utf-8'));

const allData = [...luxData, ...uDeluxeData, ...deluxeData, ...standardData];

fs.writeFileSync(path.join(__dirname, '../src/data/newCruisesAI.json'), JSON.stringify(allData, null, 2));

console.log('Combined ' + allData.length + ' cruises.');
