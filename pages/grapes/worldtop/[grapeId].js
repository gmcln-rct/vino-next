import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { getCountryById } from "@/data/country-data";

import { getDataItemById } from "@/data/utils";

import { GRAPES_DATA } from "@/data/grape-data";
import { GRAPES_RED_TOP_TEN_DATA } from "@/data/country-wine-data-top-grapes-2016";

import BarChart from "@/components/graphs/bar-chart";
import DetailSection from "@/components/layout/detail-section";

function GrapeTopTenDetailPage() {
  const router = useRouter();
  console.log('router', router.query)

  const id = router.query.countryId;

  const grapeWineData = getDataItemById(id, GRAPES_RED_TOP_TEN_DATA);
  // const { pageId } = router.query;

  const grape = getDataItemById(id, GRAPES_DATA);
  console.log("country", country);

  const wineCategory = grape.category === "OW" ? "Old World" : "New World";

  const explanationText = "national top ";

  console.log("pageId", id, grape);

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
        grapeName={grape.itemName}
        units={grapeWineData.units}
        dataYear={grapeWineData.dataYear}
        redGrapeData={grapeWineData.redGrapeDataNational}
        whiteGrapeData={grapeWineData.whiteGrapeDataNational}
        explanationText={explanationText}
      />
      <DetailSection
        wineCategory={wineCategory}
        countryLink={grape.link}
        countryName={grape.itemName}
        countryRegions={grape.regions}
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
