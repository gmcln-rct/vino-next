import Head from "next/head";

import { COUNTRIES_DATA } from "@/data/country-data";

import { getAllData } from "@/data/utils";

import CountryList from "@/components/countries/country-list";

function CountryIndex() {
  const allCountries = getAllData(COUNTRIES_DATA);
  return (
    <div>
      <Head>
        <title>
          Country Index - Winography - Wine Data Visualization
        </title>
        <meta
          name="description"
          content="Data visualization of wine production by country for all wine-producing countries"
        />
      </Head>
      <h1>Country Index</h1>
      {/* <h2>Featured Countries</h2> */}
      <CountryList items={allCountries} />
    </div>
  );
}

export default CountryIndex;
