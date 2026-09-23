const { Groq } = require('groq-sdk');
require('dotenv').config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function test() {
  try {
    const response = await groq.chat.completions.create({
      messages: [{ role: 'user', content: 'Translate "Hello World" to French.' }],
      model: 'llama3-8b-8192',
    });
    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("Groq error:", error);
  }
}

test();
