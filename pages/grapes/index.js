import Head from "next/head";

import { GRAPES_DATA } from "@/data/grape-data";

import { getTopData } from "@/data/utils";

import DataList from "@/components/layout/data-list";


function GrapeIndex() {
  // const allGrapes = getAllData(GRAPES_DATA);
  const topGrapes = getTopData(GRAPES_DATA);

  console.log('topGrapes: ', topGrapes);
  return (
    <div>
      <Head>
        <title>Grapes Index - Winography - Wine Data Visualization</title>
        <meta
          name="description"
          content="Data visualization of grape wine production for all wine-producing countries"
        />
      </Head>
      <h1 className="indexheader">Grapes Index</h1>
      {/* <h2>Featured Countries</h2> */}
      <DataList items={topGrapes} />
    </div>
  );
}

export default GrapeIndex;
