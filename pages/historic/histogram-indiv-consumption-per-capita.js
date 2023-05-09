import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

import classes from "./histogram.module.css";

import HistogramChart from "@/components/graphs/histogram-chart";

import { HISTORIC_CONSUMPTION_DATA } from "@/data/historic-consumption-data";

// import {convertToStackedFormat} from "@/data/utils";

import { HISTORIC_CONSUMPTION_PER_CAPITA } from "@/data/historic-consumption-per-capita";

import HistoricChartNotes from "@/components/layout/historic-chart-notes";

import Button from "@/components/ui/button";

  // Get all the unique country names
  const COUNTRIES = [...new Set( HISTORIC_CONSUMPTION_DATA.map(d => d.itemName))];


function HistogramIndividualConsumptionPerCapitaPage() {
  const [country1, setCountry1] = useState(COUNTRIES[0]);

  const historicData = HISTORIC_CONSUMPTION_PER_CAPITA;

  return (
    <>
      <Head>
        <title>
          Historic Per Capita Wine Consumption - Histogram - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Histogram data visualization by country."
        />
      </Head>
      <h1 className="indexheader">Historic Per Capita Wine Consumption, by Volume</h1>
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
        <Button link="/historic/histogram-comp-consumption-per-capita" isSecondary="false">Comparative Per Capita Histogram Chart</Button>
        <Button link="/historic/" isSecondary="true">Historic Data Index</Button>
      </div>
    </>
  );
}

export default HistogramIndividualConsumptionPerCapitaPage;
