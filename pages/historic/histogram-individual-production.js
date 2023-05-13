import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

import classes from "./histogram.module.css";

import HistogramChart from "@/components/charts/histogram-chart";

import { HISTORIC_PRODUCTION_STACKED_DATA } from "@/data/historic-production-stacked-data";

import HistoricChartNotes from "@/components/layout/historic-chart-notes";

import Button from "@/components/ui/button";

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

const YEARS = [2000, 2001, 2002, 2003, 2004, 2005, 2006];

function HistogramIndividualPage() {
  const [country1, setCountry1] = useState(COUNTRIES[0]);
  const [country2, setCountry2] = useState(null);

  const historicData = HISTORIC_PRODUCTION_STACKED_DATA;

  console.log("histogram indiv historic data ",  historicData);

  // useEffect(() => {
  //   // update country2 if it is the same as country1
  //   if (country2 && country1 === country2) {
  //     setCountry2(COUNTRIES.find((c) => c !== country1));
  //   }
  // }, [country1, country2]);

  // const handleCountry2Change = (e) => {
  //   const value = e.target.value;
  //   setCountry2(value === "" ? null : value);
  // };


  return (
    <>
      <Head>
        <title>
        Historic Wine Production In Individual Countries - Histogram - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Histogram data visualization by country."
        />
      </Head>
      <h1 className="indexheader">Historic Wine Production in Individual Countries</h1>
      <div className={classes.selectrow}>
        <select
          value={country1}
          className="selectCss select120"
          onChange={(e) => setCountry1(e.target.value)}
        >
          {COUNTRIES.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <HistogramChart
        data={historicData}
        country1={country1}
      />
      <HistoricChartNotes />
      <div className="buttonFooter">
        <Button link="/historic/histogram-comparison-production" isSecondary="false">Histogram Comparison Chart</Button>
        <Button link="/historic/" isSecondary="true">Historic Data Index</Button>
      </div>
    </>
  );
}

export default HistogramIndividualPage;
