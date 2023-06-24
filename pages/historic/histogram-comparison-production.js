import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

import classes from "./histogram.module.css";

import HistogramComparisonChart from "@/components/charts/histogram-comparison-chart";

import { HISTORIC_PRODUCTION_STACKED_DATA } from "@/data/historic-production-stacked-data";

import HistoricChartNotes from "@/components/layout/historic-chart-notes";

import ChartSelectorDual from "@/components/charts/chart-selector-dual";
import ChartWrapper from "@/components/charts/chart-wrapper";

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

function HistogramComparisonPage() {
  const [country1, setCountry1] = useState(COUNTRIES[0]);
  const [country2, setCountry2] = useState(COUNTRIES[1]);

  const historicData = HISTORIC_PRODUCTION_STACKED_DATA;

  useEffect(() => {
    // update country2 if it is the same as country1
    if (country2 && country1 === country2) {
      setCountry2(COUNTRIES.find((c) => c !== country1));
    }
  }, [country1, country2]);

  const handleCountry2Change = (e) => {
    const value = e.target.value;
    setCountry2(value === "" ? null : value);
  };

  const isCountryComparison = true;

  return (
    <>
      <Head>
        <title>
          Historic Wine Production Comparison - Histogram - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Histogram data visualization by country."
        />
      </Head>
      <h1 className="indexheader">
         Historic Wine Production Comparison
      </h1>
      <ChartSelectorDual
          countryData={COUNTRIES}
          selectedItem1={country1}
          setSelectedItem1={setCountry1}
          selectedItem2={country1}
          setSelectedItem2={setCountry1}
        />
      {/* <div className={classes.selectrow}>
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
        <span className="versus">vs.</span>
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
      </div> */}
      <HistogramComparisonChart
        data={historicData}
        country1={country1}
        country2={country2}
      />
      <HistoricChartNotes />
      <div className="buttonFooter">
        <Button link="/historic/histogram-individual-production" isSecondary="false">
          Individual Histogram Chart
        </Button>

        <Button link="/historic/" isSecondary="true">
          Historic Data Index
        </Button>
      </div>
    </>
  );
}

export default HistogramComparisonPage;
