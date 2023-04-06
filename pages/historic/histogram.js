import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import classes from "./histogram.module.css";

import HistogramChart from "@/components/graphs/histogram-chart";

import { HISTORIC_PRODUCTION_STACKED_DATA } from "@/data/historic-production-stacked-data";

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

function HistoricHistogramPage() {
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

  return (
    <>
      <Head>
        <title>
          Historic Wine Production - Histogram - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Histogram data visualization by country."
        />
      </Head>
      <h1 className="indexheader">Histogram: Historic Wine Production By Year</h1>
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
        <select
          value={country2}
          className="selectCss select120"
          onChange={handleCountry2Change}
        >
          {COUNTRIES.filter((c) => c !== country1).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <HistogramChart
        data={historicData}
        country1={country1}
        country2={country2}
      />
      <div>
        <p className="dataSource">
          Data Source:{" "}
          <Link
            href="https://economics.adelaide.edu.au/wine-economics/databases/"
            className="dataSource"
          >
            Wine Economics Research Centre, University of Adelaide
          </Link>
        </p>
      </div>
      <div className="buttonFooter">
        <Button link="/historic/" isSecondary="true">Back to Historic Data Index</Button>
      </div>
    </>
  );
}

export default HistoricHistogramPage;
