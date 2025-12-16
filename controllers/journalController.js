import Journal from "../models/Journal.js";

export const createJournal = async (req, res) => {
  const { title, content, moodContext } = req.body;

  const journal = await Journal.create({
    title,
    content,
    moodContext,
    userId: req.user.userId
  });

  res.json(journal);
};

export const getJournals = async (req, res) => {
  const journals = await Journal.find({ userId: req.user.userId });
  res.json(journals);
};

export const updateJournal = async (req, res) => {
  const journal = await Journal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(journal);
};

export const deleteJournal = async (req, res) => {
  await Journal.findByIdAndDelete(req.params.id);
  res.json({ message: "Journal deleted" });
};
