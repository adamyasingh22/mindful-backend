import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import chatRoutes from "./routes/chatRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import moodRoutes from "./routes/moodRoutes.js";
import journalRoutes from "./routes/journalRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/moods", moodRoutes);
app.use("/journals", journalRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
