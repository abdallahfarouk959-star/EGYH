import fs from 'fs/promises';
import path from 'path';
import mammoth from 'mammoth';
import * as dotenv from 'dotenv';
import Groq from 'groq-sdk';

dotenv.config();

// Ensure the API key is set
const apiKey = process.env.GROQ_API_KEY || process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("ERROR: API key is not set in the .env file.");
  process.exit(1);
}

const groq = new Groq({ apiKey });
const MODEL_NAME = 'openai/gpt-oss-20b';

const CATEGORIES = {
    'luxury boats - Copy': 'luxury',
    'ultra deluxe  boats - Copy': 'ultra-deluxe',
    'deluxe - Copy': 'deluxe',
    'standard boats - Copy': 'standard'
};

const BASE_DIR = path.join(process.cwd(), 'public');
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'data', 'newCruisesAI.json');


const PROMPT_TEMPLATE = `
You are a highly accurate data extraction assistant. I will provide you with the raw text extracted from a Word document for a Nile Cruise. 
Your task is to parse this text and return ONLY a valid JSON object representing this cruise.

Cruise File Name: {FILENAME}
Category: {CATEGORY}

The JSON MUST match this TypeScript structure exactly:

{
  "id": "A unique lowercase kebab-case slug based on {FILENAME}, e.g. ms-mayfair",
  "name": "The cruise name based on {FILENAME}, e.g. MS Mayfair",
  "type": "Nile Cruise",
  "category": "{CATEGORY}",
  "subType": "nile-cruise",
  "featured": false,
  "gallery": ["/placeholder-cruise.webp"],
  "inclusions": [
    "Array of inclusion strings from document"
  ],
  "exclusions": [
    "Array of exclusion strings from document"
  ],
  "childrenPolicy": [
    "Array of children policy strings from document"
  ],
  "itineraries": [
    {
      "id": "e.g. cruise-id-4-nights",
      "durationName": "e.g. 4 Nights Luxor to Aswan",
      "departureDay": "e.g. Every Monday (EXTREMELY IMPORTANT: extract exact day from text)",
      "pricing": [
        {
          "seasonName": "e.g. Summer or Winter or Peak",
          "tripleSharing": 1000, // number or null
          "doubleSharing": 1200, // number
          "singleCabin": 1800 // number
        }
      ],
      "days": [
        {
          "dayNumber": 1,
          "title": "Day 1 Title",
          "activities": ["Activity 1", "Activity 2"]
        }
      ]
    }
  ]
}

Rules:
1. DO NOT return markdown like \`\`\`json. Return ONLY valid raw JSON.
2. The days and activities MUST be extracted exactly as written in the text.
3. The id and name MUST NOT be empty or generic. Derive them from {FILENAME}.
4. All pricing values must be numbers only (without USD). If missing, set tripleSharing to null.

Text Content:
{TEXT}
`;

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function extractText(filePath) {
    try {
        const result = await mammoth.extractRawText({ path: filePath });
        return result.value;
    } catch (e) {
        console.error(`Error reading ${filePath}:`, e.message);
        return null;
    }
}

async function processFile(filePath, category, retries = 10) {
    const filename = path.basename(filePath);

    const text = await extractText(filePath);
    if (!text || text.trim() === '') return null;

    const prompt = PROMPT_TEMPLATE
        .replace(/{CATEGORY}/g, category)
        .replace(/{FILENAME}/g, filename)
        .replace('{TEXT}', text);

    console.log(`Processing: ${filename} using AI...`);
    
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await groq.chat.completions.create({
                messages: [{ role: 'user', content: prompt }],
                model: MODEL_NAME,
                temperature: 0.1,
                max_tokens: 4000,
                response_format: { type: 'json_object' }
            });
            
            const rawJson = response.choices[0]?.message?.content?.trim();
            const parsed = JSON.parse(rawJson);
            if (!parsed.id || !parsed.name) {
                const base = filename.replace('.docx', '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
                parsed.id = parsed.id || base;
                parsed.name = parsed.name || filename.replace('.docx', '');
            }
            return parsed;
        } catch (e) {
            if (e.message.includes('429') || e.message.includes('Rate limit') || e.message.includes('rate_limit')) {
                console.warn(`[Attempt ${attempt}/${retries}] Rate limit hit for ${filename}. Waiting 65 seconds...`);
                await delay(65000);
                if (attempt === retries) {
                    console.error(`Failed to process ${filename} after ${retries} attempts.`);
                    return null;
                }
            } else {
                console.error(`Failed to process ${filename}:`, e.message);
                return null;
            }
        }
    }
    return null;
}

async function main() {
    console.log("Starting AI extraction process with Groq...");
    
    let allCruises = [];
    try {
        const existingData = await fs.readFile(OUTPUT_FILE, 'utf-8');
        const parsed = JSON.parse(existingData);
        if (Array.isArray(parsed)) {
            allCruises = parsed.filter(c => c && c.id && c.name && c.id !== 'undefined' && c.name !== 'undefined');
        }
        console.log(`Loaded ${allCruises.length} valid already processed cruises from previous run.`);
    } catch (e) {
        // file doesn't exist or invalid, start fresh
    }

    for (const [folder, category] of Object.entries(CATEGORIES)) {
        const dirPath = path.join(BASE_DIR, folder);
        console.log(`\n📂 Scanning folder: ${folder}`);
        
        let files = [];
        try {
            files = await fs.readdir(dirPath);
        } catch (e) {
            console.warn(`Could not read directory ${dirPath}:`, e.message);
            continue;
        }

        for (const file of files) {
            if (!file.endsWith('.docx') || file.startsWith('~$')) {
                continue;
            }

            try {
                const fileSlug = file.replace('.docx', '').toLowerCase().replace(/[^a-z0-9]/g, '');
                
                const alreadyProcessed = allCruises.some(c => {
                    if (!c || !c.name || !c.id) return false;
                    const cId = c.id.toLowerCase().replace(/[^a-z0-9]/g, '');
                    const cName = c.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                    return cId === fileSlug || (cId.length > 4 && fileSlug.includes(cId)) || (cName.length > 4 && fileSlug.includes(cName));
                });
                
                if (alreadyProcessed) {
                    console.log(`Skipping ${file} (Already processed)`);
                    continue;
                }

                const cruiseData = await processFile(path.join(dirPath, file), category);
                if (cruiseData) {
                    allCruises.push(cruiseData);
                    await fs.writeFile(OUTPUT_FILE, JSON.stringify(allCruises, null, 2), 'utf-8');
                    console.log(`✅ Saved ${cruiseData.name} (Total: ${allCruises.length})`);
                }
                
                // 3.5s delay between requests to stay smoothly under TPM limits
                await delay(3500);
            } catch (err) {
                console.error(`Error processing file ${file}:`, err.message);
            }
        }
    }

    console.log(`\n🎉 AI Processing complete! Total extracted: ${allCruises.length} cruises.`);
    console.log(`Data saved to: ${OUTPUT_FILE}`);
}

main();
