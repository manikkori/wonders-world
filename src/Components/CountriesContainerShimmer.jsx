import React from "react";

export default function CountriesContainerShimmer() {
  return (
    <div className="countries-container px-3 max-w-[1200px] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 mx-auto">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="cursor-pointer inline-block rounded-lg overflow-hidden shadow-md transition-all duration-200 ease-in-out bg-[#e1e1e1] dark:bg-gray-800"
        >
          <div className="w-full h-[200px] md:h-[175px] bg-[#cbcbcb] dark:bg-gray-700  shimmer"></div>

          <div className="p-6">
            <div className="w-3/4 h-6 mb-3 bg-[#b8b7b7] dark:bg-gray-700  shimmer"></div>
            <div className="flex flex-col gap-2">
              <div className="w-full h-4 bg-[#b8b7b7] dark:bg-gray-700  shimmer"></div>
              <div className="w-5/6 h-4 bg-[#b8b7b7] dark:bg-gray-700  shimmer"></div>
              <div className="w-2/3 h-4 bg-[#b8b7b7] dark:bg-gray-700  shimmer"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
