import Link from "next/link";

import Head from "next/head";

import { useRouter } from "next/router";

import { getCountryById } from "@/data/country-data";

import { getDataItemById } from "@/data/utils";

import { COUNTRIES_WINE_DATA } from "@/data/country-wine-data-top-grapes-2016";

import BarChart from "@/components/graphs/bar-chart";
import DetailSection from "@/components/layout/detail-section";
import Button from "@/components/ui/button";

function CountryTopTenDetailPage() {
  const router = useRouter();
  console.log("router", router.query.countryId);

  const id = router.query.countryId;

  const countryWineData = getDataItemById(id, COUNTRIES_WINE_DATA);

  const country = getCountryById(id);

  const explanationText = "National Top ";

  const dataType = "country";

  if (!country || !countryWineData) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  const countryLink = `/countries/${country.id}`;
  return (
    <>
      <Head>
        <title>
          Top National Grapes - {country.itemName} - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Wine data visualization for winegrape area production for top national grape varietals"
        />
      </Head>
      <BarChart
        itemName={country.itemName}
        units={countryWineData.units}
        dataYear={countryWineData.dataYear}
        dataType={dataType}
        redGrapeData={countryWineData.redGrapeDataWorld}
        whiteGrapeData={countryWineData.whiteGrapeDataWorld}
        explanationText={explanationText}
      />
      {/* <DetailSection
        wineCategory={country.category}
        countryLink={country.link}
        dataType={dataType}
        countryName={country.itemName}
        moreInfo={country.regions}
      /> */}
      <div>
        <p>
          Data Source: Wine Economics Research Centre, University of Adelaide
        </p>
      </div>
      <div className="buttonFooter">
        <Button link={countryLink}>Back to {country.itemName} Page</Button>
        <Button link="/countries/">Back to Country Index</Button>
      </div>
    </>
  );
}

export default CountryTopTenDetailPage;
