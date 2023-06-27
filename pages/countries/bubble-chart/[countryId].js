import Link from "next/link";

import Head from "next/head";

import { useRouter } from "next/router";

import { getDataItemById } from "@/data/utils";
import { COUNTRIES_DATA } from "@/data/country-data";
import { COUNTRIES_WINE_DATA } from "@/data/country-wine-data-top-grapes-2016";

import BubbleChart from "@/components/charts/bubble-chart";
import Button from "@/components/ui/button";
import DataSource from "@/components/layout/data-source";

function CountryTopTenDetailPage() {
  const router = useRouter();
  const id = router.query.countryId;
  const country = getDataItemById(id, COUNTRIES_DATA);
  const countryWineData = getDataItemById(id, COUNTRIES_WINE_DATA);

  if (!country || !countryWineData) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  const countryLink = `/countries/${country.id}`;
  const headDescription = `${country.itemName} top national wine grapes production bubble chart, by land area`;

  return (
    <>
      <Head>
        <title>
          {country.itemName} Top National Grapes - Bubble Chart - Winography -
          Wine Data Visualization
        </title>
        <meta name="description" content={headDescription} />
      </Head>
      <BubbleChart />
      <DataSource />
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
