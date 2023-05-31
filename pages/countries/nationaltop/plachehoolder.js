import Link from "next/link";

import Head from "next/head";

import { useRouter } from "next/router";

import { getDataItemById } from "@/data/utils";
import { COUNTRIES_DATA} from "@/data/country-data";
import { COUNTRIES_WINE_DATA } from "@/data/country-wine-data-top-grapes-2016";

import { COUNTRIES_RED_WINE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_WINE_DATA } from "@/data/country-wine-data-white-all-2016";

import BarChart from "@/components/charts/bar-chart";
import Button from "@/components/ui/button";
import DataSource from "@/components/layout/data-source";


// TOP NATIONAL GRAPES

function CountryTopTenDetailPage() {
  const router = useRouter();
  console.log("router", router.query.countryId);

  const id = router.query.countryId;
  const country = getDataItemById(id, COUNTRIES_DATA);
  const countryWineData = getDataItemById(id, COUNTRIES_WINE_DATA);

  const dataType = "country";

  // const headerText = country.itemName + "'s Most Produced Grape Varieties";


  const headerSuffix = "Top "
  const explanationText = "Production of ";

  if (!country || !countryWineData) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  const countryLink = `/countries/${country.id}`;
  const globalTopTenLink = `/countries/worldtopten/${country.id}`;
  const headDescription = `Top national grapes of ${country.itemName} production bar chart, by land area`;

  return (
    <>
      <Head>
        <title>
        Top Grapes of {country.itemName} - Bar Chart - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content={headDescription}
        />
      </Head>
      <BarChart
        itemName={country.itemName}
        units={countryWineData.units}
        dataYear={countryWineData.dataYear}
        dataType={dataType}
        topType="national"
        redGrapeData={countryWineData.redGrapeDataNational}
        whiteGrapeData={countryWineData.whiteGrapeDataNational}
        headerSuffix={headerSuffix}
        explanationText={explanationText}
      />
      <DataSource />
      <div className="buttonFooter">
        <Button link={globalTopTenLink} isSecondary="false">Global Top Grapes in {country.itemName} </Button>
        <Button link={countryLink} isSecondary="true">{country.itemName} Country Page</Button>
        <Button link="/countries/" isSecondary="true">Country Index</Button>
      </div>
    </>
  );
}

export default CountryTopTenDetailPage;
