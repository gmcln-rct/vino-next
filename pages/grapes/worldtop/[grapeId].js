import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { getDataItemById } from "@/data/utils";

import { GRAPES_DATA } from "@/data/grape-data";
import { GRAPES_RED_TOP_TEN_DATA, GRAPES_WHITE_TOP_TEN_DATA } from "@/data/grape-top-ten-countries-data-2016";

import BarChart from "@/components/graphs/bar-chart";
import DetailSection from "@/components/layout/detail-section";

function GrapeTopTenDetailPage() {
  const router = useRouter();
  console.log('router', router.query)

  const id = router.query.grapeId;

  console.log('grapes data', GRAPES_DATA)

  const grape = getDataItemById(id, GRAPES_DATA);
  const redGrapeWineData = getDataItemById(id, GRAPES_RED_TOP_TEN_DATA);
  const whiteGrapeWineData = getDataItemById(id, GRAPES_WHITE_TOP_TEN_DATA);

    console.log('grape', grape);
    console.log('redrapeWineData', redGrapeWineData);
    console.log('whiteGrapeWineData', whiteGrapeWineData);

  const wineCategory = grape.category === "R" ? "Red" : "White";

    // const wineCategory = "Red";
  const explanationText = "national top counteies ";

  console.log("pageId", id);

  if (!grape || !redGrapeWineData) {
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
          Grape World Top Grapes - {grape.itemName} - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Wine data visualization for winegrape area production for top national grape varietals"
        />
      </Head>
      <h2 className="header">{grape.itemName}:  Top Wine Producing Countries</h2>
      <BarChart
        itemName={grape.itemName}
        units={redGrapeWineData.units}
        dataYear={redGrapeWineData.dataYear}
        redGrapeData={redGrapeWineData.countries}
        whiteGrapeData={whiteGrapeWineData.countries}
        explanationText={explanationText}
      />
      <DetailSection
        wineCategory={wineCategory}
        countryLink={grape.link}
        countryName={grape.itemName}
        countryRegions={grape.altNames}
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
