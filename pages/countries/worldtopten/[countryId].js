import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { getDataItemById } from "@/data/utils";
import { COUNTRIES_DATA } from "@/data/country-data";
import { COUNTRIES_WINE_DATA } from "@/data/country-wine-data-top-grapes-2016";

import BarChart from "@/components/charts/bar-chart";
import Button from "@/components/ui/button";

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

  return (
    <>
      <Head>
        <title>
          {country.itemName} Production of Top Grape Varieties -
          Winography - Wine Data Visualization
        </title>
        <meta
          name="description"
          content="Data visualization for wine grape area production in {country.itemName } for global top 10 grape varietals"
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
        <div>
          <p className="dataSource">
            Data Source:{" "}
            <Link
              href="https://economics.adelaide.edu.au/wine-economics/databases/"
              className="dataSource"
            >
              Wine Economics Research Centre, University of Adelaide
            </Link>
          </p>
        </div>
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
