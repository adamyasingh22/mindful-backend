import express from "express";
import rateLimit from "express-rate-limit";
import { chatWithGemini } from "../services/geminiService.js";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
  message: "Too many requests. Please slow down.",
});

router.post("/", limiter, async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await chatWithGemini(message);

    res.json({ response });
  } catch (error) {
    console.error("Gemini Error:", error.message);
    res.status(500).json({
      response:
        "I'm here with you, but something went wrong. Please try again.",
    });
  }
});

export default router;
