import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesContainerShimmer from "./CountriesContainerShimmer";

export default function CountriesContainer({ query }) {
  const [countryData, setCountryData] = useState([]);
  console.log(countryData)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,borders")
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);

  return (
    <>
      {!countryData.length ? (
        <CountriesContainerShimmer />
      ) : (
        <div className="countries-container px-3 max-w-[1200px]  grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 mx-auto ">
          {countryData
            .filter((country) => {
              return (
                country.name.common.toLowerCase().includes(query) ||
                country.region.toLowerCase().includes(query)
              );
            })
            .map((country, index) => {
              return (
                <CountryCard
                  flag={country.flags.svg}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital?.[0]}
                  key={index}
                  data={country}
                />
              );
            })}
        </div>
      )}
    </>
  );
}
