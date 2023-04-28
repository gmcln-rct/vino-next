import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

import classes from "./histogram.module.css";

import HistogramChart from "@/components/graphs/histogram-chart";

import { HISTORIC_CONSUMPTION_DATA } from "@/data/historic-consumption-data";

import {convertToStackedFormat} from "@/data/utils";

// import { HISTORIC_PRODUCTION_STACKED_DATA } from "@/data/historic-production-stacked-data";


import Button from "@/components/ui/button";


  // Get all the unique country names
  const COUNTRIES = [...new Set( HISTORIC_CONSUMPTION_DATA.map(d => d.itemName))];


const YEARS = [2000, 2001, 2002, 2003, 2004, 2005, 2006];

function HistogramIndividualConsumptionPage() {
  const [country1, setCountry1] = useState(COUNTRIES[0]);

  const historicData = convertToStackedFormat(HISTORIC_CONSUMPTION_DATA, COUNTRIES);

  return (
    <>
      <Head>
        <title>
          Historic Wine Consumption - Histogram - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Histogram data visualization by country."
        />
      </Head>
      <h1 className="indexheader">Histogram: Historic Yearly Wine Consumption, by Volume</h1>
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
        <Button link="/historic/histogram-comparison-consumption" isSecondary="false">Histogram Comparison Chart</Button>
        <Button link="/historic/" isSecondary="true">Back to Historic Data Index</Button>
      </div>
    </>
  );
}

export default HistogramIndividualConsumptionPage;
