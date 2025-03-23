const express = require("express");
const User = require("../models/User");

const router = express.Router();

// 🏆 Increase XP when a user solves a problem
router.post("/add-xp", async (req, res) => {
  try {
    const { username, xpGained } = req.body;

    let user = await User.findOne({ username });
    if (!user) {
      user = new User({ username });
    }

    user.xp += xpGained;

    // 🥇 Assign Badges
    if (user.xp >= 100 && !user.badges.includes("Beginner")) user.badges.push("Beginner");
    if (user.xp >= 500 && !user.badges.includes("Pro")) user.badges.push("Pro");
    if (user.xp >= 1000 && !user.badges.includes("Master")) user.badges.push("Master");

    await user.save();
    res.json({ message: "XP Updated!", user });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// 🏆 Get Leaderboard
router.get("/leaderboard", async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ xp: -1 }).limit(10);
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
