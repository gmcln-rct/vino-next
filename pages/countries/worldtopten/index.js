import Head from "next/head";

import { getTopData } from "@/data/utils";

import { COUNTRIES_DATA } from "@/data/country-data";

import CountryList from "@/components/countries/country-list";

function CountryWorldTopTenIndex() {

  const topTenCountries = getTopData(COUNTRIES_DATA);

    return (
      <div>
              <Head>
        <title>
          Top 10 Wine Producing Countries - Winography - Wine Data Visualization
        </title>
        <meta
          name="description"
          content="Data visualization for Top 10 Wine Producing Countries"
        />
      </Head>
          <h1>Top 10 Wine Producing Countries</h1>
          <CountryList items={topTenCountries} />
      </div>
    )
  }
  
  export default CountryWorldTopTenIndex;