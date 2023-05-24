import Link from "next/link";
import Head from "next/head";

import { useState, useEffect } from "react";

import classes from "@/components/charts/bar-chart.module.css";

import DataSource from "@/components/layout/data-source";

// import { COUNTRIES_RED_WINE_DATA } from "@/data/country-wine-data-red-all-2016";
// import { COUNTRIES_WHITE_WINE_DATA } from "@/data/country-wine-data-white-all-2016";
import { WINE_REGION_PRODUCTION_DATA } from "@/data/region-test-data";

// import BarChart from "@/components/charts/bar-chart";
import MultiBarChart from "@/components/charts/bar-multi-chart";

import { filterCountriesData, getDataItemById } from "@/data/utils";
import {
  generateHeader,
  generateSubheader,
} from "@/components/utils/chart-utils";

function RegionalGeneralBarChartPage() {
  const [selectedCountry, setSelectedCountry] = useState("france");
  const [selectedRegion, setselectedRegion] = useState("burgundy");
  const [selectedGrapeType, setSelectedGrapeType] = useState("red");

  //   const countryRedWineData = COUNTRIES_RED_WINE_DATA;
  //   const countryWhiteWineData = COUNTRIES_WHITE_WINE_DATA;
  const regionData = WINE_REGION_PRODUCTION_DATA;

  const newData = regionData.find(
    (d) => d.countryId === selectedCountry && d.id === selectedRegion
  );

  console.log("new data ", newData);

  // const redWineData = getDataItemById(selectedCountry, countryRedWineData);
  // const whiteWineData = getDataItemById(selectedCountry, countryWhiteWineData);

  const COUNTRIES = filterCountriesData(regionData);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleRegionChange = (event) => {
    setselectedRegion(event.target.value);
  };

  const handleGrapeTypeChange = (event) => {
    setselectedGrapeType(event.target.value);
  };
  const dataType = "country";

  const headerExplanationText = "National Production: ";

  return (
    <>
      <Head>
        <title>
          Countries Bar Chart - Winography | Learn About Wine Through Data Visualizations
        </title>
        <meta
          name="description"
          content="Bar charts showing winegrape area production by region."
        />
      </Head>
      <section className={classes.chart}>
        {/* <h2 className={classes.header}>{headerText}</h2>
        <p className={classes.subheader}>{subheaderText}</p> */}
        <div className={classes.selectrow}>
          <span className={classes.selectLabel}> Select Country: </span>

          <select
            value={selectedCountry}
            className={classes.selectCss}
            onChange={handleCountryChange}
          >
            {regionData.map((region) => (
              <option key={region.countryId} value={region.countryId}>
                {region.countryName}
              </option>
            ))}
          </select>
          <span className={classes.selectLabel}> Select Region: </span>
          <select
            value={selectedRegion}
            className={classes.selectCss}
            onChange={handleRegionChange}
          >
            <option value="burgundy">Burgundy</option>
            <option value="sonoma">Sonoma</option>
          </select>
          <span className={classes.selectLabel}> Select Grape: </span>
          <select
            value={selectedGrapeType}
            className={classes.selectCss}
            onChange={handleGrapeTypeChange}
          >
            <option value="red">Red</option>
            <option value="white">White</option>
          </select>
        </div>
        {/* <MultiBarChart
          itemName={selectedCountry.countryName}
          units={redWineData.units}
          dataYear={selectedCountry.dataYear}
          dataType={dataType}
          grapeType={selectedGrapeType}
          redGrapeData={redWineData}
          whiteGrapeData={whiteWineData}
        /> */}

        <DataSource />
      </section>
    </>
  );
}

export default RegionalGeneralBarChartPage;
