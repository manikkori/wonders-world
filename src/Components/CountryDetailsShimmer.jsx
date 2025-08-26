import React from "react";

export default function CountryDetailsShimmer() {
  return (
    <main className="py-12 px-5 md:px-8 lg:px-12 dark:bg-gray-900">
      <div>
        <div className="w-28 h-8 rounded-md bg-[#e1e1e1] dark:bg-gray-700 shimmer"></div>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 gap-12 mb-8 md:mb-0">
        {/* Shimmer for Flag */}
        <div className="w-full md:w-[40%]">
          <div className="w-full h-64 rounded-md bg-[#d1d1d1] dark:bg-gray-700 shimmer"></div>
        </div>

        {/* Shimmer for Details */}
        <div className="w-full lg:w-[60%] flex items-center">
          <div className="w-full">
            <div className="w-3/4 h-8 rounded-md bg-[#d1d1d1] dark:bg-gray-700 shimmer mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div>
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-6 bg-[#d1d1d1] dark:bg-gray-700 shimmer mb-4"
                  ></div>
                ))}
              </div>
              <div>
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-6 bg-[#d1d1d1] dark:bg-gray-700 shimmer mb-4"
                  ></div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <div className="w-1/3 h-6 bg-[#d1d1d1] dark:bg-gray-700  shimmer mb-4"></div>
              <div className="flex flex-wrap gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-28 h-10 bg-[#d1d1d1] dark:bg-gray-700 shimmer rounded-md"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
