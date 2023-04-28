import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { COUNTRIES_DATA } from "@/data/country-data";

import { getAllData } from "@/data/utils";

import CountryList from "@/components/countries/country-list";

import { DataList } from "@/components/layout/data-list";

import Masthead from "@/components/layout/masthead";


function CountryIndex() {
  const allCountries = getAllData(COUNTRIES_DATA);
  const barChartLink = "/countries/bar-chart";
  return (
    <>
      <Head>
        <title>Country Index - Winography - Wine Data Visualization</title>
        
        <meta
          name="description"
          content="Data visualization of wine production by country for all wine-producing countries"
        />
      </Head>
      {/* <h1 className="indexheader">Country Index</h1> */}
      <Masthead
        backgroundImage="/images/site-images/index-masthead-countries.jpg"
        header="Countries"
        headerText="Learn about wine production around the world, with charts comparing nations and sections for featured countries."
      />
      <section className="info">
        <h2 className="header"> Grape Production Country Comparison</h2>
        <p className="subheader">Production of world&apos;s top red and white grape varietals, by country.</p>
        <div className="actions">
          <Link href={barChartLink} className="action__container center">
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
            className="action__container center"
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
