const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Update XP and Level
router.post("/update-xp", async (req, res) => {
  const { userId, xpGained } = req.body;

  try {
    let user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.xp += xpGained;

    // Level Up System
    if (user.xp >= user.level * 100) {
      user.level += 1;
      user.xp = 0;
      user.badges.push(`Level ${user.level} Achieved`);
    }

    await user.save();
    res.json({ message: "XP Updated", user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
