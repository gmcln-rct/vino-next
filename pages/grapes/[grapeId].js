import { useRouter } from "next/router";
import Head from "next/head";

import { getDataItemById } from "@/data/utils";
import { GRAPES_DATA } from "@/data/grape-data";
import {
  GRAPES_RED_TOP_TEN_DATA,
  GRAPES_WHITE_TOP_TEN_DATA,
} from "@/data/grape-top-ten-countries-data-2016";

import DetailSection from "@/components/layout/detail-section";
import Button from "@/components/ui/button";

function GrapeDetailPage() {
  const router = useRouter();
  const id = router.query.grapeId;
  const grape = getDataItemById(id, GRAPES_DATA);

  const worldTopLink = "/grapes/worldtop/" + id;

  const wineCategory = grape.category === "R" ? "Red" : "White";

  if (!grape || !grape.id) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>
          {grape.itemName} Wine Grape Production - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Data visualization for {grape.itemName} wine grape area production."
        />
      </Head>
      <section className="masthead">

      <h2 className="header"> {grape.itemName} Grape Page</h2>
      <div className="actions">
        <Button link={worldTopLink}>World Top Grapes</Button>
      </div>
      </section>
      <DetailSection
        wineCategory={wineCategory}
        itemLink={grape.link}
        countryName={grape.itemName}
        moreInfo={grape.altNames}
      />
    </>
  );
}

export default GrapeDetailPage;
