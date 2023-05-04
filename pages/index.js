import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Masthead from "../components/layout/masthead";

import  {COUNTRIES_DATA} from "@/data/country-data";
import {GRAPES_DATA } from "@/data/grape-data";

// MAIN HOMEPAGE

function HomePage() {
  const infoClass = "info alt2";
  const [countryData, setCountryData] = useState(COUNTRIES_DATA);
  const [grapeData, setGrapeData] = useState(GRAPES_DATA);

  const randomGrapeData = Math.floor(Math.random() * grapeData.length);
  
  const grapeLink = "/grapes/worldtop/bubble-chart/" + grapeData[randomGrapeData].id;
  const grapeName = grapeData[randomGrapeData].itemName;
  
  const randomCountryData = Math.floor(Math.random() * countryData.length);
  const countryLink = "/countries/nationaltop/" + countryData[randomCountryData].id;
  const countryName = countryData[randomCountryData].itemName;
  
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
        header="Uncork Your Curiosity"
        headerText="Discover wine's untold stories through data visualizations. Test your wine knowlege on historic production & consumption, grape varieties, wine regions and more."
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
          <Link
            href={grapeLink}
            className="action__container center tall"
          >
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
          <Link
            href={countryLink}
            className="action__container center tall"
          >
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
