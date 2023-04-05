import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import classes from "./histogram.module.css"

import HistogramChart from "@/components/graphs/histogram-chart";

import { HISTORIC_PRODUCTION_STACKED_DATA } from "@/data/historic-production-stacked-data";

const COUNTRIES = [
  "France",
  "Italy",
  "Spain",
  "United States",
  "Argentina",
  "Australia",
  "Chile",
  "South Africa",
  "Germany",
  "Portugal",
];

const YEARS = [
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006
]

function HistoricHistogram() {

  const [country1, setCountry1] = useState(COUNTRIES[0]);
  const [country2, setCountry2] = useState(COUNTRIES[1]);

  const historicData = HISTORIC_PRODUCTION_STACKED_DATA;

  const handleCountry2Change = (e) => {
    if (e.target.value === country1) {
      setCountry2(COUNTRIES.find((c) => c !== country1));
    } else {
      setCountry2(e.target.value);
    }
  };

//   const filteredData = historicData.filter((data) => data.year === parseInt(year))[0];
//   const newData = { 
//     year: year,
//     country1: filteredData[country1],
//     country2: filteredData[country2],
//   };

//   console.log('histogram page data', newData);

  return (
    <>
      <Head>
        <title>
          Historic Wine Production Index - Histogram - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Data visualization for all wine-producing countries"
        />
      </Head>
      <h1 className="indexheader">Historic Wine Production By Year</h1>
      <div className={classes.selectrow}>
        <select
          value={country1}
          className="selectCss"
          onChange={(e) => setCountry1(e.target.value)}
        >
          {COUNTRIES.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <select
          value={country2}
          className="selectCss"
          onChange={handleCountry2Change}
        >
          {COUNTRIES.filter((c) => c !== country1).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {/* <select
          value={year}
          className="selectCss"
          onChange={(e) => setYear(e.target.value)}
        > */}
         {/* {YEARS.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))} */}
        {/* </select> */}
      </div>
      {/* <HistogramChart data={newData} /> */}
      <HistogramChart
        data={historicData}
        country1={country1}
        country2={country2}
        />
    </>
  );
}

export default HistoricHistogram;