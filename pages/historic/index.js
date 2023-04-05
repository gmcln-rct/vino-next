import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import Button from "@/components/ui/button";

import HISTORIC_PRODUCTION_STACKED_DATA from "@/data/historic-production-stacked-data";

function HistoricDataIndex() {
  const histogramLink = "/historic/histogram";
  const stackedAreaLink = "/historic/stackedbar";

  return (
    <>
      <Head>
        <title>
          Historic Wine Production Index - Winography - Wine Data Visualization
        </title>
        <meta
          name="description"
          content="Data visualization for all wine-producing countries"
        />
      </Head>
      <section className="masthead">
        <h2 className="header"> Historic Production Data</h2>
        <div className="actions">
          <Button link={histogramLink}>Histogram Chart</Button>
          <Button link={stackedAreaLink}>Stacked Area Chart</Button>
        </div>
      </section>
    </>
  );
}

export default HistoricDataIndex;
