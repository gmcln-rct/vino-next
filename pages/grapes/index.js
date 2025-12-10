import Head from "next/head";

import { GRAPES_DATA } from "@/data/grape-data";
import { getTopData } from "@/data/utils";
import DataList from "@/components/layout/data-list";
import Masthead from "@/components/layout/masthead";

export default function GrapeIndex({ topGrapes }) {
  return (
    <div>
      <Head>
        <title>Wine Grapes Index | Winography</title>
        <meta
          name="description"
          content="Discover 100+ wine grape varieties with interactive production data. Explore Cabernet Sauvignon, Merlot, Chardonnay, Pinot Noir, and more with global charts and regional insights."
        />
        <link rel="canonical" href="https://winography.net/grapes/" />
        <meta property="og:title" content="Wine Grapes Index | Winography" />
        <meta property="og:description" content="Discover 100+ wine grape varieties with interactive production data and global charts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://winography.net/grapes/" />
        <meta property="og:image" content="https://winography.net/images/site-images/index-masthead-grapes.jpg" />
      </Head>
      <Masthead
        backgroundImage="/images/site-images/index-masthead-grapes.jpg"
        header="Wine Grapes: A Flavorful Voyage "
        headerText="Explore the world of popular and off-the-beaten-path wine grape varieties with intriguing data charts and insightful grape profiles."
      />
      <DataList items={topGrapes} headerText="Featured Grapes" />
    </div>
  );
}

export async function getStaticProps() {
  const topGrapes = getTopData(GRAPES_DATA);

  return { props: { topGrapes } };
}
