import React from "react";
import axios from "axios";

const SolveProblem = ({ username, problemId, xpGained }) => {
  const handleSolve = async () => {
    await axios.post("http://localhost:5000/api/xp/add-xp", {
      username,
      xpGained,
    });
    alert("Problem Solved! XP Added!");
  };

  return (
    <button
      onClick={handleSolve}
      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800"
    >
      ✅ Mark as Solved (+{xpGained} XP)
    </button>
  );
};

export default SolveProblem;
