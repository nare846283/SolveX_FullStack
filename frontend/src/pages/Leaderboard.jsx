import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold text-purple-600">🏆 Leaderboard</h2>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Rank</th>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">XP</th>
            <th className="border px-4 py-2">Level</th>
          </tr>
        </thead>
        <tbody>
          {users.sort((a, b) => b.xp - a.xp).map((user, index) => (
            <tr key={user._id} className="text-center">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.xp}</td>
              <td className="border px-4 py-2">{user.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
