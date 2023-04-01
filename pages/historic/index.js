import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import GRAPES_RED_TOP_TEN_DATA from "@/data/grape-top-ten-countries-data-2016";

// import StreamGraph from "@/components/graphs/streamgraph-chart";
// import TimelineChart from "@/components/graphs/streamgraph-alt";
import StackedBarChart from "@/components/graphs/stacked-area-chart";

import HISTORIC_PRODUCTION_STACKED_DATA from "@/data/historic-production-stacked-data";


function HistoricDataIndex() {

  // const [historicData, setHistoricData] = useState(HISTORIC_PRODUCTION_STACKED_DATA);

  // if (!HISTORIC_PRODUCTION_STACKED_DATA) {
  //   return <p>Loading...</p>;
  // }

  const data = GRAPES_RED_TOP_TEN_DATA;

  console.log('countries data: ', data);

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
      <h1 className="indexheader">Historic Wine Production By Year</h1>
      {/* <CountriesList items={topCountries} /> */}
      {/* <TimelineChart /> */}
      <StackedBarChart  />
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
    </>
  );
}

export default HistoricDataIndex;
