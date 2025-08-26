import React from "react";

export default function Search({ setQuery }) {
  return (
    <div className="border border-gray-300 dark:border-none   rounded-md overflow-hidden w-full sm:w-[310px] relative text-gray-500 dark:text-white">
      <input
        className="border-none outline-none px-5 py-4 w-full  dark:bg-gray-800 "
        type="text"
        placeholder="Search a country..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <button className="border-none h-full right-[1.25rem] outline-none absolute">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
