import Link from "next/link";
import Head from "next/head";

// import { useRouter } from "next/router";

import { getDataItemById } from "@/data/utils";
import { COUNTRIES_RED_WINE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_WINE_DATA } from "@/data/country-wine-data-white-all-2016";
import { COUNTRIES_DATA } from "@/data/country-data";
import { COUNTRIES_WINE_DATA } from "@/data/country-wine-data-top-grapes-2016";

import BarChart from "@/components/graphs/bar-chart";
import Button from "@/components/ui/button";

function CountryTopTenDetailPage() {
  //   const country = getDataItemById(id, COUNTRIES_DATA);

  const countryRedWineData = COUNTRIES_RED_WINE_DATA;
  const countryWhiteWineData = COUNTRIES_WHITE_WINE_DATA;

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
          Countries Bar Chart - Winography - Wine Data Visualization
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
        redGrapeData={countryRedWineData}
        whiteGrapeData={countryWhiteWineData}
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
        <Button link={countryLink} isSecondary="true">
          Back to {country.itemName} Page
        </Button>
        <Button link="/countries/" isSecondary="true">
          Back to Country Index
        </Button>
      </div>
    </>
  );
}

export default CountryTopTenDetailPage;
