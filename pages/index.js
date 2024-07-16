import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Masthead from "../components/layout/masthead";

import { COUNTRIES_DATA } from "@/data/country-data";
import { GRAPES_DATA } from "@/data/grape-data";
import { getTopData } from "@/data/utils";

import DataList from "@/components/layout/data-list";

import MainContext from "@/store/main-context";

export async function getStaticProps() {
  const topGrapes = getTopData(GRAPES_DATA);
  // if(isNewVisit) {
  // generate random data here
  const randomGrapeIndex = Math.floor(Math.random() * GRAPES_DATA.length);
  const randomGrape = GRAPES_DATA[randomGrapeIndex];

  const randomCountryIndex = Math.floor(Math.random() * COUNTRIES_DATA.length);
  const randomCountry = COUNTRIES_DATA[randomCountryIndex];

  // };

  return {
    props: {
      topGrapes,
      randomGrape,
      randomCountry,
    },
  };
}

// MAIN HOMEPAGE

function HomePage({ topGrapes, randomGrape, randomCountry }) {
  const mainCtx = useContext(MainContext);

  const infoClass = "info alt";
  const infoClass2 = "info alt2";

  // use passed in props instead of generating new data on each render
  let grapeLink = "/grapes/worldtop/bubble-chart/" + randomGrape.id;
  let grapeName = randomGrape.itemName;
  const countryLink = "/countries/nationaltop/" + randomCountry.id;
  const countryName =
    randomCountry.itemName === "United States"
      ? "the United States"
      : randomCountry.itemName;

  const barChartLink = "/countries/bar-chart";
  const regionalChartLink = "countries/regions/bar-chart";

  return (
    <>
      <Head>
        <title>Winography | Learn About Wine Through Data Visualizations</title>
        <meta
          name="description"
          content="Winography | Data visualization, quizzes and other learning tools about wine production and consumption, both historic and present-day. "
        />
      </Head>
      <Masthead
        backgroundImage="/images/site-images/homepage-masthead.jpg"
        header="Discover Wine, One Chart at a Time"
        headerText="Uncover the magic of wine through data visualizations. Dive into fascinating production & consumption history, eclectic grape varietals, and iconic and lesser-known wine regions."
      />
      <section className={infoClass}>
        <h2 className="header">Featured Charts</h2>
        <div className="actions">
        <Link
            href="/historic/histogram-comparison-production"
            className="action__link center tall"
          >
            <Image
              src="/images/icons/icon-histogram-comp.png"
              className="transparent margin-bottom"
              alt="Per Capita Wine Production Histogram"
              width={100}
              height={100}
            />
            <p className="link">Historic Production by Country</p>
          </Link>
          <Link href={grapeLink} className="action__link center tall">
            <Image
              src="/images/icons/icon-bubblechart.png"
              className="transparent margin-bottom"
              alt="Per Capita Wine Consumption Histogram"
              width={100}
              height={100}
            />
            <p className="link">{grapeName} Production</p>
          </Link>
          <Link href={regionalChartLink} className="action__link center tall">
            <Image
              src="/images/icons/icon-barchart.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={100}
              height={100}
            />
            <p className="link">Production by Region</p>
          </Link>
          {countryLink && countryName && (
            <Link href={countryLink} className="action__link center tall">
              <Image
                src="/images/icons/icon-barchart.png"
                className="transparent margin-bottom"
                alt="Per Capita Wine Consumption Histogram"
                width={100}
                height={100}
              />
              <p className="link">Top Grapes of {countryName}</p>
            </Link>
          )}
        </div>
      </section>
      <section className={infoClass2}>
        <h2 className="header">Data Categories</h2>
        <section className="homePage__links">
          <Link href="/countries" className="action__link center">
            <Image
              src="/images/icons/icon-countries.png"
              className="transparent margin-bottom"
              alt="countries icon"
              width={150}
              height={150}
            />
            <p className="link">Countries</p>
          </Link>
          <Link href="/grapes" className="action__link center">
            <Image
              src="/images/icons/icon-grapes.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={150}
              height={150}
            />
            <p className="link">Grapes</p>
          </Link>
          <Link href="/historic" className="action__link center">
            <Image
              src="/images/icons/icon-historic-data.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={150}
              height={150}
            />
            <p className="link">Historical Data</p>
          </Link>
        </section>
      </section>
      <DataList items={topGrapes} headerText="Featured Grapes" />
    </>
  );
}

export default HomePage;
