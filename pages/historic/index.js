import Head from "next/head";


import StreamGraph from "@/components/graphs/streamgraph-chart";
import TimelineChart from "@/components/graphs/streamgraph-alt";
import StackedBarChart from "@/components/graphs/stacked-area-chart";

function HistoricDataIndex() {

  // console.log('countries data: ', allCountries);

//   if (!COUNTRIES_DATA) {
//     return <p>Loading...</p>;
//   }

//   const topCountries = getTopData(COUNTRIES_DATA);

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
      <h1>Top 10 Wine Producing Countries</h1>
      {/* <CountriesList items={topCountries} /> */}
      {/* <TimelineChart /> */}
      <StackedBarChart />
    </>
  );
}

export default HistoricDataIndex;
