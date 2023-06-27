import Head from "next/head";

import { COUNTRIES_DATA } from "@/data/country-data";

import { getTopData } from "@/data/utils";

import CountriesList from "@/components/countries/country-list";

import { DataList } from "@/components/layout/data-list";

function CountryWorldTopTenIndex() {
  if (!COUNTRIES_DATA) {
    return <p>Loading...</p>;
  }

  const topCountries = getTopData(COUNTRIES_DATA);

  return (
    <div>
      <Head>
        <title>
          Top 10 Wine Producing Country Index - Winography | Learn About Wine
          Through Data Visualizations
        </title>
        <meta
          name="description"
          content="Data visualization for all wine-producing countries"
        />
      </Head>
      <h1>Top 10 Wine Producing Countries</h1>
      <CountriesList items={topCountries} />
    </div>
  );
}

export default CountryWorldTopTenIndex;
