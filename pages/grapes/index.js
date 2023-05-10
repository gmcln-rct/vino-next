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
          content="Data visualizations and information about grape wine production for all wine-producing countries"
        />
      </Head>
      <Masthead
        backgroundImage="/images/site-images/index-masthead-grapes.jpg"
        header="Wine Grapes: A Flavorful Voyage "
        headerText="Explore the world of popular and off-the-beaten-path wine grape varieties with intriguing data charts and insightful grape profiles."
      />
      {/* <h2>Featured Grapes</h2> */}
      <DataList items={topGrapes} headerText="Featured Grapes" />
    </div>
  );
}

export async function getStaticProps() {
  const topGrapes = getTopData(GRAPES_DATA);

  return { props: { topGrapes } };
}