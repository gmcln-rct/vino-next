import Link from "next/link";

import Head from "next/head";

import { useRouter } from "next/router";

import { getCountryById } from "@/data/country-data";

import { getDataItemById } from "@/data/utils";

import { COUNTRIES_WINE_DATA } from "@/data/country-wine-data-top-grapes-2016";

import BarChart from "@/components/graphs/bar-chart";
import DetailSection from "@/components/layout/detail-section";

function nationalTopDetailPage() {
  const router = useRouter();
  console.log('router', router.query.countryId)

  const id = router.query.countryId;
  // console.log('params', params)

  const countryWineData = getDataItemById(id, COUNTRIES_WINE_DATA);
  // const { pageId } = router.query;

  const country = getCountryById(id);
  console.log("country", country);

  // const wineCategory = country.category === "OW" ? "Old World" : "New World";

  const explanationText = "world's top 10";

  console.log("pageId", id);

  if (!country || !countryWineData) {
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
          Country Top Grapes - {country.itemName} - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Wine data visualization for winegrape area production for top national grape varietals"
        />
      </Head>
      <h2 className="header">{country.itemName}: Country Top 10 Grapes</h2>
      <BarChart
        units={countryWineData.units}
        dataYear={countryWineData.dataYear}
        dataType="country"
        redGrapeData={countryWineData.redGrapeDataNational}
        whiteGrapeData={countryWineData.whiteGrapeDataNational}
        explanationText={explanationText}
      />
      <DetailSection
        wineCategory={wineCategory}
        countryLink={country.link}
        countryName={country.itemName}
        moreInfo={country.regions}
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

export default nationalTopDetailPage;
