import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[90%] max-w-[750px] 
      bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 
      dark:from-gray-900 dark:via-gray-800 dark:to-black
      text-white rounded-2xl shadow-xl border border-white/10
      flex flex-col sm:flex-row items-center sm:justify-between px-6 py-3
      backdrop-blur-lg z-30"
    >
      {/* Left side text */}
      <p className="font-semibold text-sm tracking-wide text-center sm:text-left">
        🚀 Developed by{" "}
        <span className="text-yellow-300 font-bold hover:underline cursor-pointer">
          Manik Kori
        </span>
      </p>

      {/* Right side icons */}
      <div className="flex space-x-5 mt-2 sm:mt-0 text-[20px]">
        
        
        <a
          href="https://github.com/manikkori"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-transform transform hover:scale-125"
        >
          <FaGithub className="drop-shadow-lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/manik-kori-3622a0320/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-transform transform hover:scale-125"
        >
          <FaLinkedin className="drop-shadow-lg" />
        </a>
        <a
          href="manikkori697@gmail.com"

          
          className="hover:text-red-400 transition-transform transform hover:scale-125"
        >
          <MdEmail className="drop-shadow-lg" />
        </a>
        <a
          href="https://instagram.com/kori_manik__"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-transform transform hover:scale-125"
        >
          <FaInstagram className="drop-shadow-lg" />
        </a>
      </div>
    </footer>
  );
}
