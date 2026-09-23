const fs = require('fs');
const path = require('path');
const { Groq } = require('groq-sdk');
require('dotenv').config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const BATCH_SIZE = 50;

const TRANSLATABLE_FIELDS = new Set([
  'name', 'shortDescription', 'note', 'durationName', 'title', 'seasonName', 'description', 'subtitle', 'val_auth_desc'
]);

const TRANSLATABLE_ARRAYS = new Set([
  'inclusions', 'exclusions', 'childrenPolicy', 'activities', 'highlights'
]);

async function translateBatch(strings) {
  if (strings.length === 0) return [];
  const prompt = `Translate the following JSON array of strings from English to French. Preserve any formatting and markdown. Output ONLY the JSON array of translated strings, nothing else. Do not output markdown code blocks. Here is the array:
${JSON.stringify(strings)}`;
  
  try {
    const response = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'qwen/qwen3.8-27b',
      temperature: 0.1,
    });
    
    let content = response.choices[0].message.content.trim();
    if (content.startsWith('```json')) content = content.replace(/^```json/, '').replace(/```$/, '').trim();
    if (content.startsWith('```')) content = content.replace(/^```/, '').replace(/```$/, '').trim();
    
    const translated = JSON.parse(content);
    if (!Array.isArray(translated) || translated.length !== strings.length) {
      console.error("Mismatch in translated array length", { expected: strings.length, got: translated.length });
      return strings; 
    }
    return translated;
  } catch (error) {
    console.error("Error translating batch", error.message);
    return strings; 
  }
}

async function translateData(data) {
  const uniqueStrings = new Set();
  
  function collect(obj) {
    if (Array.isArray(obj)) {
      obj.forEach(collect);
    } else if (obj !== null && typeof obj === 'object') {
      for (const key of Object.keys(obj)) {
        if (TRANSLATABLE_FIELDS.has(key) && typeof obj[key] === 'string' && obj[key].trim() !== '') {
          uniqueStrings.add(obj[key]);
        } else if (TRANSLATABLE_ARRAYS.has(key) && Array.isArray(obj[key])) {
          obj[key].forEach(item => {
            if (typeof item === 'string' && item.trim() !== '') uniqueStrings.add(item);
          });
        } else {
          collect(obj[key]);
        }
      }
    }
  }
  
  collect(data);
  const stringsArray = Array.from(uniqueStrings);
  console.log(`Found ${stringsArray.length} unique strings to translate.`);
  
  const dict = {};
  for (let i = 0; i < stringsArray.length; i += BATCH_SIZE) {
    console.log(`Translating batch ${i} to ${i + BATCH_SIZE}...`);
    const batch = stringsArray.slice(i, i + BATCH_SIZE);
    const translatedBatch = await translateBatch(batch);
    for (let j = 0; j < batch.length; j++) {
      dict[batch[j]] = translatedBatch[j] || batch[j];
    }
  }
  
  function apply(obj) {
    if (Array.isArray(obj)) {
      return obj.map(apply);
    } else if (obj !== null && typeof obj === 'object') {
      const newObj = {};
      for (const key of Object.keys(obj)) {
        if (TRANSLATABLE_FIELDS.has(key) && typeof obj[key] === 'string' && obj[key].trim() !== '') {
          newObj[key] = dict[obj[key]] || obj[key];
        } else if (TRANSLATABLE_ARRAYS.has(key) && Array.isArray(obj[key])) {
          newObj[key] = obj[key].map(item => typeof item === 'string' && item.trim() !== '' ? (dict[item] || item) : item);
        } else {
          newObj[key] = apply(obj[key]);
        }
      }
      return newObj;
    }
    return obj;
  }
  
  return apply(data);
}

async function run() {
  console.log("Reading tours...");
  const toursData = require('./toursData.js');
  
  // We need to translate all the constants: ALL_TOURS_ITEMS, SIMPLIFIED_PACKAGES, NILE_CRUISE_ITEMS, DESTINATIONS
  const translated = {
    ALL_TOURS_ITEMS: await translateData(toursData.ALL_TOURS_ITEMS),
    SIMPLIFIED_PACKAGES: await translateData(toursData.SIMPLIFIED_PACKAGES),
    NILE_CRUISE_ITEMS: await translateData(toursData.NILE_CRUISE_ITEMS),
    DESTINATIONS: await translateData(toursData.DESTINATIONS)
  };

  fs.writeFileSync(path.join(__dirname, 'src', 'data', 'toursData_fr.json'), JSON.stringify(translated, null, 2));
  console.log("Tours translated.");
}

run();
