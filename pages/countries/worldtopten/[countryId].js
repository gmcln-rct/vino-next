import { useRouter } from "next/router";

import Head from "next/head";

import { getCountryById } from "@/data/country-data";

import { getDataItemById } from "@/data/utils";

import { COUNTRIES_WINE_DATA } from "@/data/country-wine-data-top-grapes-2016";

import BarChart from "@/components/graphs/bar-chart";
import DetailSection from "@/components/layout/detail-section";

function CountryWorldTopTenDetailPage() {
  const router = useRouter();
  console.log('router', router.query.countryId)

  const id = router.query.countryId;
  // console.log('params', params)

  const countryWineData = getDataItemById(id, COUNTRIES_WINE_DATA);
  // const { pageId } = router.query;

  const country = getCountryById(id);
  // console.log("country", country);

  const wineCategory = country.category === "OW" ? "Old World" : "New World";

  const explanationText = "world's top 10";

  console.log("pageId", id);

  return (
    <>
      <Head>
      <title>World Top 10 Grapes {country.itemName } - Winography - Wine Data Visualization</title>
      <meta name="description" content="Data visualization for wine grape area production in {country.itemName } for global top 10 grape varietals" />
    </Head>
      <BarChart
        countryName={country.itemName}
        units={countryWineData.units}
        dataYear={countryWineData.dataYear}
        redGrapeData={countryWineData.redGrapeDataWorld}
        whiteGrapeData={countryWineData.whiteGrapeDataWorld}
        explanationText={explanationText}
      />
      <DetailSection
        wineCategory={wineCategory}
        countryLink={country.link}
        countryName={country.itemName}
        countryRegions={country.regions}
      />
      <div>
      <p className="dataSource">Data Source: Wine Economics Research Centre, University of Adelaide</p>
      </div>
    </>
  );
}

export default CountryWorldTopTenDetailPage;
