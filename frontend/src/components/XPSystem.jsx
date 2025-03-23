import React, { useEffect, useState } from "react";
import axios from "axios";

const XPSystem = ({ username }) => {
  const [xp, setXP] = useState(0);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/xp/leaderboard`).then((res) => {
      const user = res.data.find((u) => u.username === username);
      if (user) {
        setXP(user.xp);
        setBadges(user.badges);
      }
    });
  }, [username]);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-md">
      <h2 className="text-xl font-bold">🏆 {username}'s XP</h2>
      <p>XP: {xp}</p>
      <p>Badges: {badges.join(", ") || "No Badges Yet"}</p>
    </div>
  );
};

export default XPSystem;
