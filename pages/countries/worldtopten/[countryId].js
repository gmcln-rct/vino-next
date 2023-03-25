import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

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
  console.log("countryWineData", countryWineData);
  // const { pageId } = router.query;

  const country = getCountryById(id);
  // console.log("country", country);

  // const wineCategory = country.category === "OW" ? "Old World" : "New World";

  const explanationText = "Global Top 10";

  if (!country || !countryWineData) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  const flagImage = `/images/flags/flag-${country.id}.svg`;
  const flagImageAlt = `Flag of ${country.itemName}`;

  return (
    <>
      <Head>
      <title>World Top 10 Grapes {country.itemName } - Winography - Wine Data Visualization</title>
      <meta name="description" content="Data visualization for wine grape area production in {country.itemName } for global top 10 grape varietals" />
    </Head>
      <BarChart
        itemName={country.itemName}
        units={countryWineData.units}
        dataYear={countryWineData.dataYear}
        dataType="country"
        redGrapeData={countryWineData.redGrapeDataWorld}
        whiteGrapeData={countryWineData.whiteGrapeDataWorld}
        explanationText={explanationText}
      />
      <DetailSection
        wineCategory={country.category}
        itemLink={country.link}
        countryName={country.itemName}
        moreInfo={country.regions}
      />
      <div>
      <p className="dataSource">Data Source: Wine Economics Research Centre, University of Adelaide</p>
      </div>
    </>
  );
}

export default CountryWorldTopTenDetailPage;
