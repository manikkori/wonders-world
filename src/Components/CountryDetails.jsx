import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CountryDetailsShimmer from "./CountryDetailsShimmer";
import errorImage from "../notFound.png";

export default function CountryDetails() {
  const { country } = useParams(); //It gives me the country name
  const { state } = useLocation(); //provides information about the current URL/location, here we destructuring the state

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  function updateCountryData(data) {
    setCountryData({
      flag: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      currencies:
        Object.values(data.currencies || {})
          .map((currency) => currency.name)
          .join(", ") || "N/A",
      languages: Object.values(data.languages || {}).join(", ") || "N/A",
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((borderCountry) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${borderCountry}`)
          .then((res) => res.json())
          .then(([border]) => border.name.common);
      })
    ).then((borders) => {
      setTimeout(() => setCountryData((prev) => ({ ...prev, borders }))); //It updates the borders property of the countryData state without losing other existing properties.
    });
  }

  useEffect(() => {
    if (state) {
      //if state in not null it will call the update country function
      updateCountryData(state);
      return;
    } else {
      fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        .then((res) => res.json())
        .then(([data]) => updateCountryData(data)) //the data is like this [{}], that is why we are destructuring the array, ---> data[0]
        .catch(() => setNotFound(true)); //if an error occurred then we setting the value of setNotFound to true
    }
  }, [country]); //it reruns on the basis of country name which are provided by the useParams

  if (notFound) {
    return (
      <img
        className="h-[50vh] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        src={errorImage}
        alt=""
      />
    );
  }

  return countryData == null ? (
    <CountryDetailsShimmer />
  ) : (
    <main className="py-12 px-5 md:px-8 lg:px-12 dark:bg-gray-900 dark:text-white min-h-[calc(100vh-72px)]">
      <div>
        <button
          onClick={() => history.back()}
          className="border border-gray-300 dark:border-none dark:text-white dark:bg-gray-800 py-2 px-6 rounded-md hover:scale-[1.05] transition-all"
        >
          ← Back
        </button>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 gap-12 mb-8 md:mb-0">
        <div className="w-full md:w-[40%]">
          <img
            className="w-full rounded-md shadow-md"
            src={countryData.flag}
            alt="Flag"
          />
        </div>

        <div className="w-full lg:w-[60%] flex items-center">
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-6">{countryData.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div>
                <p>
                  <span className="font-semibold">Native Name: </span>
                  {countryData.nativeName || countryData.name}
                </p>
                <p>
                  <span className="font-semibold">Population: </span>
                  {countryData.population.toLocaleString("en-IN")}
                </p>
                <p>
                  <span className="font-semibold">Region: </span>{" "}
                  {countryData.region}
                </p>
                <p>
                  <span className="font-semibold">Sub Region: </span>{" "}
                  {countryData.subRegion}
                  Asia
                </p>
                <p>
                  <span className="font-semibold">Capital: </span>{" "}
                  {countryData.capital ? countryData.capital : "N/A"}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">Top Level Domain: </span>{" "}
                  {countryData.tld}
                </p>
                <p>
                  <span className="font-semibold">Currencies: </span>{" "}
                  {countryData.currencies}
                </p>
                <p>
                  <span className="font-semibold">Languages: </span>{" "}
                  {countryData.languages}
                </p>
              </div>
            </div>
            {countryData.borders.length > 0 && (
              <div className="mt-8">
                <p className="font-semibold mb-4">Border Countries:</p>
                <div className="flex flex-wrap gap-4">
                  {countryData.borders.map((border) => (
                    <Link
                      key={border}
                      to={`/${border}`}
                      className="border py-2 px-4 rounded-md shadow-sm hover:shadow-md cursor-pointer"
                    >
                      {border}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
