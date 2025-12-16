import express from "express";
import {
  createJournal,
  getJournals,
  updateJournal,
  deleteJournal
} from "../controllers/journalController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createJournal);
router.get("/", authMiddleware, getJournals);
router.put("/:id", authMiddleware, updateJournal);
router.delete("/:id", authMiddleware, deleteJournal);

export default router;
