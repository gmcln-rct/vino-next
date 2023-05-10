import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Masthead from "../components/layout/masthead";

import { COUNTRIES_DATA } from "@/data/country-data";
import { GRAPES_DATA } from "@/data/grape-data";

import MainContext from "@/store/main-context";

// MAIN HOMEPAGE

function HomePage() {
  const mainCtx = useContext(MainContext);
  const isNewVisit = mainCtx.isNewVisit;
  const infoClass = "info alt2";
  const [countryData, setCountryData] = useState(COUNTRIES_DATA);
  const [grapeData, setGrapeData] = useState(GRAPES_DATA);

  let randomGrapeData = Math.floor(Math.random() * grapeData.length);
  let grapeLink;
  let grapeName;
  let randomCountryData;
  let countryLink;
  let countryName;

 
  if (!grapeLink || !grapeName || isNewVisit) {
    grapeLink =
      "/grapes/worldtop/bubble-chart/" + grapeData[randomGrapeData].id;
    grapeName = grapeData[randomGrapeData].itemName;

    randomCountryData = Math.floor(Math.random() * countryData.length);
    countryLink = "/countries/nationaltop/" + countryData[randomCountryData].id;
    countryName = countryData[randomCountryData].itemName;
  }


  return (
    <>
      <Head>
        <title>Winography - Wine Data Visualization</title>
        <meta
          name="description"
          content="Winography - Data visualization, quizzes and other learning tools about wine production and consumption, both historic and present-day"
        />
      </Head>
      <Masthead
        backgroundImage="/images/site-images/homepage-masthead.jpg"
        header="Unleash the Wine Whisperer Within"
        headerText="Uncover wine's best-kept secrets through the beauty of data visualization. Dive into fascinating production & consumption history, eclectic grape varieties, and iconic wine regions."
      />

      <section className={infoClass}>
        <h2 className="header">Featured Charts</h2>
        <div className="actions">
          <Link
            href="/countries/bar-chart"
            className="action__container center tall"
          >
            <Image
              src="/images/icons/icon-barchart.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={100}
              height={100}
            />
            <p className="link">Production By Country</p>
          </Link>
          <Link
            href="/historic/histogram-comparison-consumption"
            className="action__container center tall"
          >
            <Image
              src="/images/icons/icon-histogram-comp.png"
              className="transparent margin-bottom"
              alt="Wine Consumption Nation Comparison Histogram"
              width={100}
              height={100}
            />
            <p className="link">Historic Consumption By Country</p>
          </Link>
          <Link href={grapeLink} className="action__container center tall">
            <Image
              src="/images/icons/icon-bubblechart.png"
              className="transparent margin-bottom"
              alt="Per Capita Wine Consumption Histogram"
              width={100}
              height={100}
            />
            <p className="link">{grapeName} Production</p>
          </Link>
          <Link
            href="/historic/histogram-comp-consumption-per-capita"
            className="action__container center tall"
          >
            <Image
              src="/images/icons/icon-histogram-comp.png"
              className="transparent margin-bottom"
              alt="Per Capita Wine Consumption Histogram"
              width={100}
              height={100}
            />
            <p className="link">Per Capita Comparative Histogram</p>
          </Link>
          <Link href={countryLink} className="action__container center tall">
            <Image
              src="/images/icons/icon-barchart.png"
              className="transparent margin-bottom"
              alt="Per Capita Wine Consumption Histogram"
              width={100}
              height={100}
            />
            <p className="link">Top Grapes of {countryName}</p>
          </Link>
        </div>
      </section>
      <section className="homePage">
        <h2 className="homePageHeader">Browse data visualizations:</h2>
        <section className="homePage__links">
          <Link href="/countries" className="action__container center">
            <Image
              src="/images/icons/icon-countries-sm.png"
              className="transparent margin-bottom"
              alt="countries icon"
              width={150}
              height={150}
            />
            <p className="link">By Country</p>
          </Link>
          <Link href="/grapes" className="action__container center">
            <Image
              src="/images/icons/icon-grapes-sm.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={150}
              height={150}
            />
            <p className="link">By Grape</p>
          </Link>
          <Link href="/historic" className="action__container center">
            <Image
              src="/images/icons/icon-historic-data-sm.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={150}
              height={150}
            />
            <p className="link">Historic Data</p>
          </Link>
        </section>
      </section>
    </>
  );
}

export default HomePage;
