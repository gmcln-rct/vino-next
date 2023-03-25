import Head from "next/head";

import { GRAPES_DATA } from "@/data/grape-data";

import { getAllData } from "@/data/utils";

import CountryList from "@/components/countries/country-list";

function GrapeIndex() {
  const allGrapes = getAllData(GRAPES_DATA);
  return (
    <div>
      <Head>
        <title>Grapes Index - Winography - Wine Data Visualization</title>
        <meta
          name="description"
          content="Data visualization  of wine production by grape for all wine-producing countries"
        />
      </Head>
      <h1>Grapes Index</h1>
      {/* <h2>Featured Countries</h2> */}
      <CountryList items={allGrapes} />
    </div>
  );
}

export default GrapeIndex;
