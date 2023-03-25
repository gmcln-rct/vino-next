import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { getDataItemById } from "@/data/utils";

import { GRAPES_DATA } from "@/data/grape-data";
import {
  GRAPES_RED_TOP_TEN_DATA,
  GRAPES_WHITE_TOP_TEN_DATA,
} from "@/data/grape-top-ten-countries-data-2016";

import BarChart from "@/components/graphs/bar-chart";
import DetailSection from "@/components/layout/detail-section";

function GrapeTopTenDetailPage() {
  const router = useRouter();
  console.log("router", router.query);

  const id = router.query.grapeId;

  console.log("grapes data", GRAPES_DATA);

  const grape = getDataItemById(id, GRAPES_DATA);
  const redGrapeWineData = getDataItemById(id, GRAPES_RED_TOP_TEN_DATA);
  const whiteGrapeWineData = getDataItemById(id, GRAPES_WHITE_TOP_TEN_DATA);
  const dataType = "grape";

  console.log("grape", grape);
  console.log("redrapeWineData", redGrapeWineData);
  console.log("whiteGrapeWineData", whiteGrapeWineData);

  let wineCategory = "Red";
  if (grape) {
       wineCategory = grape.category === "R" ? "Red" : "White";
  }

console.log('wineCategory', wineCategory)
//   const wineCategory = "Red";
  const explanationText = "national top counteies ";

  console.log("pageId", id);

  if (!grape || !redGrapeWineData || !whiteGrapeWineData) {
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
            {grape.itemName} - World {wineCategory} Top Grapes in Top Wine-Producing Countries - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Wine data visualization for winegrape area production for top national grape varietals"
        />
      </Head>
      <BarChart
        itemName={grape.itemName}
        units={grape.units}
        dataYear={redGrapeWineData.dataYear}
        dataType="grape"
        grapeType={wineCategory}
        redGrapeData={redGrapeWineData.countries}
        whiteGrapeData={whiteGrapeWineData.countries}
        explanationText={explanationText}
      />
      <DetailSection
        wineCategory={wineCategory}
        dataType={dataType}
        itemLink={grape.link}
        countryName={grape.itemName}
        moreInfo={grape.altNames}
      />
      <div>
        <p>
          Data Source: Wine Economics Research Centre, University of Adelaide
        </p>
      </div>
      <Link href="/countries/">Back to Country</Link>
    </>
  );
}

export default GrapeTopTenDetailPage;
