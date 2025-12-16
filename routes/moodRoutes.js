import express from "express";
import { addMood, getMoods, deleteMood } from "../controllers/moodController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, addMood);
router.get("/", authMiddleware, getMoods);
router.delete("/:id", authMiddleware, deleteMood);

export default router;
