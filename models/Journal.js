import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
  title: String,
  content: String,
  moodContext: String,
  createdAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model("Journal", journalSchema);
