import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">💡 Problem Categories</h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/easy">Easy</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/medium">Medium</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/hard">Hard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
