import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Search from "./Search";
import SearchMenu from "./SearchMenu";
import CountriesContainer from "./CountriesContainer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000); // 2 sec tak welcome screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className="min-h-[calc(100vh-72px)] flex justify-center items-center 
      bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 
      dark:from-gray-900 dark:via-gray-800 dark:to-black 
      transition-all duration-700"
    >
      {showIntro ? (
        // 👇 Welcome Screen
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-white"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl font-bold drop-shadow-lg"
          >
            Welcome 🌍
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-2 text-sm sm:text-lg text-gray-100"
          >
            Explore the World of Countries
          </motion.p>
        </motion.div>
      ) : (
        // 👇 Actual Page Content
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Search Section */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-7 sm:gap-0 justify-between py-10 sm:py-14 px-6 text-white"
          >
            <SearchMenu setQuery={setQuery} />
            <Search setQuery={setQuery} />
          </motion.div>

          {/* Countries Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="px-6"
          >
            <CountriesContainer query={query} />
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
