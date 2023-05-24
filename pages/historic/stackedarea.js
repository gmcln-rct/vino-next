import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import GRAPES_RED_TOP_TEN_DATA from "@/data/grape-top-ten-countries-data-2016";

import StackedAreaChart from "@/components/charts/stacked-area-chart";
import Button from "@/components/ui/button";

function HistoricDataHistogram() {

  const data = GRAPES_RED_TOP_TEN_DATA;

  console.log('countries data: ', data);

  return (
    <>
      <Head>
        <title>
        Historic Wine Production in Top Producing Countries - Stacked Area - Winography | Learn About Wine Through Data Visualizations
        </title>
        <meta
          name="description"
          content="Data visualization for all wine-producing countries"
        />
      </Head>
      <h1 className="indexheader">Historic Wine Production in Top Producing Countries</h1>

      <StackedAreaChart  />
      <div> 
        <p className="dataSource moveUp light">
          Data Source:{" "}
          <Link
            href="https://economics.adelaide.edu.au/wine-economics/databases/"
            className="dataSource light"
          >
            Wine Economics Research Centre, University of Adelaide
          </Link>
        </p>
      </div>
      <div className="buttonFooter">
        <Button link="/historic/" isSecondary="true">Historic Data Index</Button>
      </div>
    </>
  );
}

export default HistoricDataHistogram;
