import { useRouter } from "next/router";

import { getCountryById } from "@/data/country-data";

import { getDataItemById } from "@/data/utils";

import { COUNTRIES_WINE_DATA } from "@/data/country-wine-data-2016";

import BarChart from "@/components/graphs/bar-chart";
import DetailSection from "@/components/layout/detail-section";

function CountryWorldTopTenDetailPage() {
  const router = useRouter();
  // console.log('router', router.query)

  const [params] = router.query.countryId.split("-");

  const countryWineData = getDataItemById(params, COUNTRIES_WINE_DATA);
  // const { pageId } = router.query;

  const country = getCountryById(params);
  console.log("country", country);

  const wineCategory = country.category === "OW" ? "Old World" : "New World";

  const explanationText = "world's top 10";

  console.log("pageId", params, country);

  return (
    <>
      <h2 className="header">{country.itemName}: World's Top 10 Grapes</h2>
      <BarChart
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
        <p>Data as of {countryWineData.dataYear}</p>
      </div>
    </>
  );
}

export default CountryWorldTopTenDetailPage;
