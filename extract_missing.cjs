require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "gsk_XJq8T0H6O9d8c0Q1Q6RzWGdyb3FYF0f2e3d4c5b6a7z8y9x0w" }); // Add the API key the user used before

const SYSTEM_PROMPT = `You are a data extractor for a travel website.
Extract the Nile cruise data into the following strict JSON schema:
{
  "id": "a url-friendly slug (e.g. ms-boat-name)",
  "name": "Full name of the boat",
  "type": "Nile Cruise",
  "category": "standard" | "deluxe" | "luxury" | "ultra-deluxe",
  "subType": "nile-cruise",
  "featured": false,
  "gallery": ["/placeholder-cruise.webp"],
  "inclusions": ["List of inclusions from text"],
  "exclusions": ["List of exclusions"],
  "childrenPolicy": ["List of children policy rules"],
  "itineraries": [
    {
      "id": "cruise-id-3-nights",
      "durationName": "3 Nights Aswan to Luxor",
      "departureDay": "e.g. Every Friday",
      "pricing": [{"seasonName": "e.g. Summer", "tripleSharing": number | null, "doubleSharing": number, "singleCabin": number}],
      "days": [{"dayNumber": 1, "title": "Day 1", "activities": ["activity 1"]}]
    }
  ]
}
IMPORTANT: Output ONLY pure JSON.`;

async function main() {
    const dir = 'public/temp_missing';
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.docx'));
    const results = [];
    for(const f of files) {
        console.log("Processing", f);
        const { value: text } = await mammoth.extractRawText({ path: path.join(dir, f) });
        const response = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "system", content: SYSTEM_PROMPT }, { role: "user", content: text }],
            response_format: { type: "json_object" }
        });
        results.push(JSON.parse(response.choices[0].message.content));
    }
    fs.writeFileSync('temp_missing.json', JSON.stringify(results, null, 2));
    console.log("Done extracting 4 files!");
}
main();
