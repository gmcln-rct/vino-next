import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { getDataItemById } from "@/data/utils";
import { COUNTRIES_DATA } from "@/data/country-data";
import { COUNTRIES_WINE_DATA } from "@/data/country-wine-data-top-grapes-2016";

import BarChart from "@/components/charts/bar-chart";
import Button from "@/components/ui/button";
import DataSource from "@/components/layout/data-source";


function CountryWorldTopTenDetailPage() {
  const router = useRouter();

  const id = router.query.countryId;

  const country = getDataItemById(id, COUNTRIES_DATA);
  const countryWineData = getDataItemById(id, COUNTRIES_WINE_DATA);

  const dataType = "country";

  const headerSuffix = "Global Top ";
  const explanationText = "Production of global top ";

  if (!country || !countryWineData) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  const flagImage = `/images/flags/flag-${country.id}.svg`;
  const flagImageAlt = `Flag of ${country.itemName}`;

  const countryLink = `/countries/${country.id}`;
  const nationalTopLink = `/countries/nationaltop/${country.id}`;
  const headDescription = `${country.itemName} production of global top grape varietals bar chart, by land area`;

  return (
    <>
      <Head>
        <title>
          {country.itemName} Production of Global Top Grape Varieties -
          Winography | Learn About Wine Through Data Visualizations
        </title>
        <meta
          name="description"
          content={headDescription}
        />
      </Head>
      <section>
        {/* <h2 className="chartHeader">
          {headerText}
        </h2> */}
        {/* <p className="chartSubheader">
          {subHeaderText}
        </p> */}

        <BarChart
          itemName={country.itemName}
          units={countryWineData.units}
          dataYear={countryWineData.dataYear}
          dataType={dataType}
          redGrapeData={countryWineData.redGrapeDataWorld}
          whiteGrapeData={countryWineData.whiteGrapeDataWorld}
          headerSuffix={headerSuffix}
          explanationText={explanationText}
        />
        <DataSource />
        <div className="buttonFooter">
          <Button link={nationalTopLink} isSecondary="false">
            Top Grapes of {country.itemName}
          </Button>
          <Button link={countryLink} isSecondary="true">
            {country.itemName} Country Page
          </Button>
          <Button link="/countries/" isSecondary="true">
            Country Index
          </Button>
        </div>
      </section>
    </>
  );
}

export default CountryWorldTopTenDetailPage;
