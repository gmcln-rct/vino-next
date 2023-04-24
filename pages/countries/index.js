import Head from "next/head";

import { COUNTRIES_DATA } from "@/data/country-data";

import { getAllData } from "@/data/utils";

import CountryList from "@/components/countries/country-list";

import { DataList } from "@/components/layout/data-list";

import Masthead from "@/components/layout/masthead";

function CountryIndex() {
  const allCountries = getAllData(COUNTRIES_DATA);
  return (
    <>
      <Head>
        <title>
          Country Index - Winography - Wine Data Visualization
        </title>
        <meta
          name="description"
          content="Data visualization of wine production by country for all wine-producing countries"
        />
      </Head>
      {/* <h1 className="indexheader">Country Index</h1> */}
      <Masthead
        backgroundImage="/images/site-images/index-masthead-countries.jpg"
        header="Countries"
        headerText="Learn about grape production in countries around the world, overall national bar chart or individual country sections."
      />
      {/* <h2>Featured Countries</h2> */}
      <CountryList items={allCountries} />
    </>
  );
}

export default CountryIndex;
