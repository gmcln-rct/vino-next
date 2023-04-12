import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import GRAPES_RED_TOP_TEN_DATA from "@/data/grape-top-ten-countries-data-2016";

import StackedAreaChart from "@/components/graphs/stacked-area-chart";
import Button from "@/components/ui/button";

function HistoricDataHistogram() {

  const data = GRAPES_RED_TOP_TEN_DATA;

  console.log('countries data: ', data);

  return (
    <>
      <Head>
        <title>
          Historic Wine Production - Stacked Bar - Winography - Wine Data Visualization
        </title>
        <meta
          name="description"
          content="Data visualization for all wine-producing countries"
        />
      </Head>
      <h1 className="indexheader">Stacked Area: Historic Yearly Wine Production, by Volume</h1>

      <StackedAreaChart  />
      <div> 
        <p className="dataSource moveUp">
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

export default HistoricDataHistogram;
