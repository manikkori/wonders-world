import React from "react";
import { motion } from "framer-motion";

export default function Header({ isDark, setIsDark }) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex justify-between items-center 
                 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600
                 dark:from-gray-900 dark:via-gray-800 dark:to-black
                 text-white shadow-lg px-4 sm:px-6 lg:px-8 py-5 
                 sticky top-0 w-full z-20"
    >
      {/* Logo / Title */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
        onClick={() => window.location.reload()} // 👈 Refresh on click
      >
        <i className="fa-solid fa-earth-asia text-2xl text-green-300 drop-shadow-md animate-pulse" />
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          Wonders of World
        </h1>
      </motion.div>

      {/* Theme Toggle */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center cursor-pointer gap-2"
        onClick={() => {
          setIsDark(!isDark);
          localStorage.setItem("isDark", !isDark);
        }}
      >
        <i
          className={`fa-solid fa-${isDark ? "sun" : "moon"} text-2xl transition-all duration-500 ${
            isDark
              ? "text-yellow-400 drop-shadow-glow"
              : "text-blue-300 drop-shadow-glow"
          }`}
        />
        <span className="hidden sm:inline text-sm font-medium">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      </motion.div>
    </motion.header>
  );
}
