import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("❌ GEMINI_API_KEY is not set in environment variables");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chatWithGemini = async (message) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.0-pro",
    });

    const prompt = `
     You are a calm, empathetic mental wellness assistant.
     Respond kindly, briefly, and supportively.

     User: ${message}
     Assistant:
     `;

    const result = await model.generateContent(prompt);

    if (!result?.response?.text) {
      throw new Error("Empty response from Gemini");
    }

    return result.response.text();
  } catch (err) {
    console.error("🔥 Gemini SDK Error:", err);
    throw err;
  }
};
