import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chatWithGemini = async (message) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const prompt = `
You are a calm, empathetic mental wellness assistant.
Respond kindly, briefly, and supportively.

User: ${message}
Assistant:
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
};
