import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logos/logo.png"; // Add your logo

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav
      className={`w-full flex items-center justify-between px-6 py-4 shadow-lg transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {/* Logo */}
      <motion.img
        src={logo}
        alt="SolveX Logo"
        className="h-16"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-lg">
        {["Home", "Learning", "Problems", "Community", "Live Editor", "🏆 Leaderboard"].map((item, index) => (
          <motion.li
            key={index}
            className="cursor-pointer relative hover:text-blue-500"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </motion.li>
        ))}
      </ul>

      {/* Dark Mode Toggle */}
      <motion.button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all"
        onClick={() => setDarkMode(!darkMode)}
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </motion.button>
    </nav>
  );
};

export default Navbar;
