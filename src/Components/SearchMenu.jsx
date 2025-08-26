import React from "react";

export default function SearchMenu({ setQuery }) {
  return (
    <div
      className="border border-gray-300 text-gray-500 dark:border-none rounded-md overflow-hidden w-[230px] "
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
    >
      <select className="border-none outline-none py-4  px-5 w-full dark:bg-gray-800 dark:text-white">
        <option hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
