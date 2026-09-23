const fs = require('fs');
const path = require('path');
const { Groq } = require('groq-sdk');
require('dotenv').config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const BATCH_SIZE = 50; // max strings per API call to avoid limits

// Fields we want to translate
const TRANSLATABLE_FIELDS = new Set([
  'name', 'shortDescription', 'note', 'durationName', 'title', 'seasonName'
]);

const TRANSLATABLE_ARRAYS = new Set([
  'inclusions', 'exclusions', 'childrenPolicy', 'activities', 'highlights'
]);

async function translateBatch(strings) {
  if (strings.length === 0) return [];
  const prompt = `Translate the following JSON array of strings from English to French. Preserve any formatting. Output ONLY the JSON array of translated strings, nothing else. Do not output markdown code blocks. Here is the array:
${JSON.stringify(strings)}`;
  
  try {
    const response = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'qwen/qwen3.8-27b',
      temperature: 0.1,
    });
    
    let content = response.choices[0].message.content.trim();
    // basic cleanup in case it wraps in markdown
    if (content.startsWith('```json')) content = content.replace(/^```json/, '').replace(/```$/, '').trim();
    if (content.startsWith('```')) content = content.replace(/^```/, '').replace(/```$/, '').trim();
    
    const translated = JSON.parse(content);
    if (!Array.isArray(translated) || translated.length !== strings.length) {
      console.error("Mismatch in translated array length", { expected: strings.length, got: translated.length });
      return strings; // fallback to original
    }
    return translated;
  } catch (error) {
    console.error("Error translating batch", error.message);
    return strings; // fallback
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
  // Translate cruises
  const cruisesPath = path.join(__dirname, 'src', 'data', 'newCruisesAI.json');
  console.log("Reading cruises...");
  const cruises = JSON.parse(fs.readFileSync(cruisesPath, 'utf8'));
  const translatedCruises = await translateData(cruises);
  fs.writeFileSync(path.join(__dirname, 'src', 'data', 'newCruisesAI_fr.json'), JSON.stringify(translatedCruises, null, 2));
  console.log("Cruises translated.");

}

run();
