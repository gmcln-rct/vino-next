import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { COUNTRIES_DATA } from "@/data/country-data";

import { getAllData } from "@/data/utils";

import CountryList from "@/components/countries/country-list";

import Masthead from "@/components/layout/masthead";

function CountryIndex() {
  const allCountries = getAllData(COUNTRIES_DATA);
  const barChartLink = "/countries/bar-chart";
  return (
    <>
      <Head>
        <title>Wine Country Index - Winography | Learn About Wine Through Data Visualizations</title>
        <meta
          name="description"
          content="Index of all wine producing countries, with links to charts comoparing production and consumption by country."
        />
      </Head>
      <Masthead
        backgroundImage="/images/site-images/index-masthead-countries.jpg"
        header="Wine Without Borders"
        headerText="Take a flavorful journey through global wine production. Dive into captivating charts comparing wine-producing nations and uncover the unique highlights of featured countries."
      />
      <section className="info">
        <h2 className="header"> Grape Production By Country - Comparison</h2>
        <p className="subheader">
          Production of the world&apos;s top red and white grape varietals, by
          country.
        </p>
        <div className="actions">
          <Link href={barChartLink} className="action__link center">
            <Image
              src="/images/icons/icon-barchart.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={100}
              height={100}
            />
            <p className="link">Bar Chart</p>
          </Link>
          {/* <Link
            href={worldTopBubbleChartLink}
            className="action__link center"
          >
            <Image
              src="/images/icons/icon-bubblechart.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={100}
              height={100}
            />
            <p className="link">Bubble Chart</p>
          </Link> */}
        </div>
      </section>
      <section className="featuredContainer">
        <h2 className="featuredHeader">Featured Countries</h2>
        <CountryList items={allCountries} />
      </section>
    </>
  );
}

export default CountryIndex;
