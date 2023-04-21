import Head from "next/head";
import { GRAPES_DATA } from "@/data/grape-data";
import { getTopData } from "@/data/utils";
import DataList from "@/components/layout/data-list";
import Masthead from "@/components/layout/masthead";

export default function GrapeIndex({ topGrapes }) {
  return (
    <div>
      <Head>
        <title>Grapes Index - Winography - Wine Data Visualization</title>
        <meta
          name="description"
          content="Data visualization of grape wine production for all wine-producing countries"
        />
      </Head>
      <Masthead
        backgroundImage="/images/site-images/index-masthead-grape.jpg"
        header="Grapes"
        headerText="Learn about individual grape varietals through our customizable data charts or sections for individual grapes."
      />
      {/* <h2>Featured Countries</h2> */}
      <DataList items={topGrapes} />
    </div>
  );
}

export async function getStaticProps() {
  const topGrapes = getTopData(GRAPES_DATA);

  return { props: { topGrapes } };
}