import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";


import { getDataItemById } from "@/data/utils";
import { COUNTRIES_DATA } from "@/data/country-data";
import { COUNTRIES_WINE_DATA } from "@/data/country-wine-data-top-grapes-2016";

import BarChart from "@/components/graphs/bar-chart";
import DetailSection from "@/components/layout/detail-section";
import Button from "@/components/ui/button";

function CountryWorldTopTenDetailPage() {
  const router = useRouter();
  console.log("router", router.query.countryId);

  const id = router.query.countryId;

  const country = getDataItemById(id, COUNTRIES_DATA);
  const countryWineData = getDataItemById(id, COUNTRIES_WINE_DATA);

  const dataType = "country";

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

  const countryLink = `/countries/${country.id}`;

  return (
    <>
      <Head>
        <title>
          World Top 10 Grapes {country.itemName} - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Data visualization for wine grape area production in {country.itemName } for global top 10 grape varietals"
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
        itemLink={country.link}
        dataType={dataType}
        moreInfo={country.regions}
      /> */}
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
        <Button link={countryLink}>Back to {country.itemName} Page</Button>
        <Button link="/countries/">Back to Country Index</Button>
      </div>
    </>
  );
}

export default CountryWorldTopTenDetailPage;
