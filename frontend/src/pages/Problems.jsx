import React from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const Problems = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-6">
        <h1 className="text-3xl font-bold text-blue-600">💡 SolveX Problem Solving</h1>
        <p className="text-lg text-gray-600">Select a category to start solving problems.</p>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <Link to="/easy" className="p-6 bg-green-100 hover:bg-green-300 transition-all rounded-md">
            <h3 className="text-xl font-bold text-green-700">✅ Easy Problems</h3>
            <p>Solve beginner-friendly coding problems.</p>
          </Link>

          <Link to="/medium" className="p-6 bg-yellow-100 hover:bg-yellow-300 transition-all rounded-md">
            <h3 className="text-xl font-bold text-yellow-700">⚡ Medium Problems</h3>
            <p>Test your coding skills with moderate challenges.</p>
          </Link>

          <Link to="/hard" className="p-6 bg-red-100 hover:bg-red-300 transition-all rounded-md">
            <h3 className="text-xl font-bold text-red-700">🔥 Hard Problems</h3>
            <p>Challenge yourself with advanced problems.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Problems;
