import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

import classes from "./histogram.module.css";

import HistogramComparisonChart from "@/components/charts/histogram-comparison-chart";

import { HISTORIC_CONSUMPTION_DATA } from "@/data/historic-consumption-data";

// import {convertToStackedFormat} from "@/data/utils";

import { HISTORIC_CONSUMPTION_PER_CAPITA } from "@/data/historic-consumption-per-capita";

import HistoricChartNotes from "@/components/layout/historic-chart-notes";

import Button from "@/components/ui/button";

const COUNTRIES = [...new Set( HISTORIC_CONSUMPTION_DATA .map(d => d.itemName))];

const YEARS = [2000, 2001, 2002, 2003, 2004, 2005, 2006];

function HistogramComparisonConsumptionPage() {
  const [country1, setCountry1] = useState(COUNTRIES[0]);
  const [country2, setCountry2] = useState(COUNTRIES[1]);

//   const historicData = HISTORIC_PRODUCTION_STACKED_DATA;


//   _   _ _     _             _        _____                                       _   _              ______           _____             
//  | | | (_)   | |           (_)      /  __ \                                     | | (_)             | ___ \         /  __ \            
//  | |_| |_ ___| |_ ___  _ __ _  ___  | /  \/ ___  _ __  ___ _   _ _ __ ___  _ __ | |_ _  ___  _ __   | |_/ /__ _ __  | /  \/ __ _ _ __  
//  |  _  | / __| __/ _ \| '__| |/ __| | |    / _ \| '_ \/ __| | | | '_ ` _ \| '_ \| __| |/ _ \| '_ \  |  __/ _ \ '__| | |    / _` | '_ \ 
//  | | | | \__ \ || (_) | |  | | (__  | \__/\ (_) | | | \__ \ |_| | | | | | | |_) | |_| | (_) | | | | | | |  __/ |    | \__/\ (_| | |_) |
//  \_| |_/_|___/\__\___/|_|  |_|\___|  \____/\___/|_| |_|___/\__,_|_| |_| |_| .__/ \__|_|\___/|_| |_| \_|  \___|_|     \____/\__,_| .__/ 
//                                                                           | |                                                   | |                                                                            |_|                                                   |_|    
//             _   _ _     _                                                                                                              
//            | | | (_)   | |                                                                                                             
//    ______  | |_| |_ ___| |_ ___   __ _ _ __ __ _ _ __ ___                                                                              
//   |______| |  _  | / __| __/ _ \ / _` | '__/ _` | '_ ` _ \                                                                             
//            | | | | \__ \ || (_) | (_| | | | (_| | | | | | |                                                                            
//            \_| |_/_|___/\__\___/ \__, |_|  \__,_|_| |_| |_|                                                                            
//                                   __/ |                                                                                                
//     
const historicData = HISTORIC_CONSUMPTION_PER_CAPITA;

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

  const dataTypeText = "Annual production in Kiloliters (KL)";


  return (
    <>
      <Head>
        <title>
          Historic Wine Consumption Comparision - Histogram - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Histogram data visualization by country."
        />
      </Head>
      <h1 className="indexheader">
       Historic Per Capita Wine Consumption
      </h1>
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
      </div>
      <HistogramComparisonChart
        data={historicData}
        country1={country1}
        country2={country2}
      />

      <HistoricChartNotes />
      <div className="buttonFooter">
        <Button link="/historic/histogram-indiv-consumption-per-capita" isSecondary="false">
          Individual Per Capita Histogram Chart
        </Button>

        <Button link="/historic/" isSecondary="true">
          Historic Data Index
        </Button>
      </div>
    </>
  );
}

export default HistogramComparisonConsumptionPage;
