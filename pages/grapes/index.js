import Head from "next/head";

import { GRAPES_DATA } from "@/data/grape-data";

import { getAllData } from "@/data/utils";

import DataList from "@/components/layout/data-list";

import CountryList from "@/components/countries/country-list";

function GrapeIndex() {
  const allGrapes = getAllData(GRAPES_DATA);
  return (
    <div>
      <Head>
        <title>Grapes Index - Winography - Wine Data Visualization</title>
        <meta
          name="description"
          content="Data visualization of grape wine production for all wine-producing countries"
        />
      </Head>
      <h1>Grapes Index</h1>
      {/* <h2>Featured Countries</h2> */}
      <DataList items={allGrapes} />
    </div>
  );
}

export default GrapeIndex;
