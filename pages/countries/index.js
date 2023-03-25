import Head from "next/head";

import { getFeaturedCountries, getAllCountries } from "@/data/country-data";

import CountryList from "@/components/countries/country-list";

function CountryIndex() {
  const allCountries = getAllCountries();
  return (
    <div>
      <Head>
        <title>
          Country Index - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Data visualization for wine grape area production in {country.itemName } for global top 10 grape varietals"
        />
      </Head>
      <h1>Country Index</h1>
      <h2>Featured Countries</h2>
      <CountryList items={allCountries} />
    </div>
  );
}

export default CountryIndex;
