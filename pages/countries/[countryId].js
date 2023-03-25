import { useRouter } from "next/router";

import Link from "next/link";

import { getDataItemById } from "@/data/utils";

import { COUNTRIES_DATA } from "@/data/country-data";

import { COUNTRIES_WINE_DATA } from "@/data/country-wine-data-top-grapes-2016";

import BarChart from "@/components/graphs/bar-chart";
import DetailSection from "@/components/layout/detail-section";

function CountryDetailPage() {
  const router = useRouter();
  const id = router.query.countryId;

  // const countryWineData = getDataItemById(params, COUNTRIES_WINE_DATA);
  // // const { pageId } = router.query;

  const country = getDataItemById(id, COUNTRIES_DATA);


  if (!country) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <h1>{country.itemName} Page</h1>
      <Link href="/countries/worldtop10">World Top 10 Grape Production</Link>
      <Link href="/countries/nationaltop">National Top Grape Production</Link>
      {/* <h2 className="header">{country.itemName}: World's Top 10 Grapes</h2>
      <BarChart
        itemName={country.itemName}
        units={countryWineData.units}
        dataYear={countryWineData.dataYear}
        dataType="country"
        redGrapeData={countryWineData.redGrapeData}
        whiteGrapeData={countryWineData.whiteGrapeData}
      />
      <DetailSection
        wineCategory={wineCategory}
        itemLink={country.link}
        countryName={country.itemName}
        moreInfo={country.regions}
      />
      <div>
        <p>Data as of {countryWineData.dataYear}</p>
      </div> */}
    </>
  );
}

export default CountryDetailPage;
