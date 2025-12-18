import axios from "axios";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent";

export const chatWithGemini = async (message) => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set");
  }

  try {
    const res = await axios.post(
      `${GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `
You are a calm, empathetic mental wellness assistant.
Respond kindly, briefly, and supportively.

User: ${message}
                `,
              },
            ],
          },
        ],
      }
    );

    const text =
      res.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("Empty response from Gemini");
    }

    return text;
  } catch (err) {
    console.error("🔥 Gemini REST Error:", err.response?.data || err.message);
    throw err;
  }
};
