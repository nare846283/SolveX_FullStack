const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  badges: { type: [String], default: [] },
  solvedProblems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Problem" }],
});

module.exports = mongoose.model("User", userSchema);
