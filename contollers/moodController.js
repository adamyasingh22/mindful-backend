import Mood from "../models/Mood.js";

export const addMood = async (req, res) => {
  try {
    const { moodType, note } = req.body;

    const mood = await Mood.create({
      moodType,
      note,
      userId: req.user.userId
    });

    res.json(mood);
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const getMoods = async (req, res) => {
  const moods = await Mood.find({ userId: req.user.userId });
  res.json(moods);
};

export const deleteMood = async (req, res) => {
  await Mood.findByIdAndDelete(req.params.id);
  res.json({ message: "Mood deleted" });
};
