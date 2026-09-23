import { tours } from './src/data/toursData.js'; // tsx resolves .js to .ts
import fs from 'fs';
import path from 'path';
import { Groq } from 'groq-sdk';
import 'dotenv/config';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const BATCH_SIZE = 50;

const TRANSLATABLE_FIELDS = new Set([
  'name', 'shortDescription', 'note', 'durationName', 'title', 'seasonName'
]);

const TRANSLATABLE_ARRAYS = new Set([
  'inclusions', 'exclusions', 'childrenPolicy', 'activities', 'highlights'
]);

async function translateBatch(strings: string[]) {
  if (strings.length === 0) return [];
  const prompt = `Translate the following JSON array of strings from English to French. Preserve any formatting. Output ONLY the JSON array of translated strings, nothing else. Do not output markdown code blocks. Here is the array:\n${JSON.stringify(strings)}`;
  
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

async function translateData(data: any) {
  const uniqueStrings = new Set<string>();
  
  function collect(obj: any) {
    if (Array.isArray(obj)) {
      obj.forEach(collect);
    } else if (obj !== null && typeof obj === 'object') {
      for (const key of Object.keys(obj)) {
        if (TRANSLATABLE_FIELDS.has(key) && typeof obj[key] === 'string' && obj[key].trim() !== '') {
          uniqueStrings.add(obj[key]);
        } else if (TRANSLATABLE_ARRAYS.has(key) && Array.isArray(obj[key])) {
          obj[key].forEach((item: any) => {
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
  console.log(`Found ${stringsArray.length} unique strings to translate in tours.`);
  
  const dict: Record<string, string> = {};
  for (let i = 0; i < stringsArray.length; i += BATCH_SIZE) {
    console.log(`Translating tours batch ${i} to ${i + BATCH_SIZE}...`);
    const batch = stringsArray.slice(i, i + BATCH_SIZE);
    const translatedBatch = await translateBatch(batch);
    for (let j = 0; j < batch.length; j++) {
      dict[batch[j]] = translatedBatch[j] || batch[j];
    }
  }
  
  function apply(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(apply);
    } else if (obj !== null && typeof obj === 'object') {
      const newObj: any = {};
      for (const key of Object.keys(obj)) {
        if (TRANSLATABLE_FIELDS.has(key) && typeof obj[key] === 'string' && obj[key].trim() !== '') {
          newObj[key] = dict[obj[key]] || obj[key];
        } else if (TRANSLATABLE_ARRAYS.has(key) && Array.isArray(obj[key])) {
          newObj[key] = obj[key].map((item: any) => typeof item === 'string' && item.trim() !== '' ? (dict[item] || item) : item);
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
  const translatedTours = await translateData(tours);
  fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'toursData_fr.json'), JSON.stringify(translatedTours, null, 2));
  console.log("Tours translated.");
}

run();
