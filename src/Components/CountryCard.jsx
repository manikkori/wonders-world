import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
  data,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex justify-center"
    >
      <Link
        className="hover:scale-[1.05] cursor-pointer inline-block 
                   overflow-hidden shadow-md transition-all duration-200 ease-in-out
                   rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 
                   dark:from-gray-800 dark:to-gray-900 dark:text-white
                   w-[100%] sm:w-[280px]"  // mobile pe 90% width, bade screen pe fixed
        to={`/${name}`}
        state={data}
      >
        <div className="w-full h-[180px]">
          <img
            className="object-cover w-full h-full"
            src={flag}
            alt={name}
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl mb-3 font-semibold">{name}</h3>
          <div className="flex flex-col text-base gap-1">
            <p>
              <b>Population: </b>
              {population.toLocaleString("en-IN")}
            </p>
            <p>
              <b>Region: </b>
              {region}
            </p>
            <p>
              <b>Capital: </b>
              {capital}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
