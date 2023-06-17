import Head from "next/head";

import { useState, useEffect } from "react";

import classes from "@/components/charts/bar-chart.module.css";

import { COUNTRIES_RED_WINE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_WINE_DATA } from "@/data/country-wine-data-white-all-2016";

import MultiBarChart from "@/components/charts/bar-multi-chart";
import DataSource from "@/components/layout/data-source";
import ChartSelectorDual from "@/components/charts/chart-selector-dual";


import { filterCountriesData, getDataItemById } from "@/data/utils";
import {
  generateHeader,
  generateSubheader,
} from "@/components/utils/chart-utils";

// General Country Bar Chart with two dropdowns

function CountryGeneralBarChartPage() {
  const [selectedCountry, setSelectedCountry] = useState("france");
  const [selectedGrapeType, setSelectedGrapeType] = useState("red");

  const countryRedWineData = COUNTRIES_RED_WINE_DATA;
  const countryWhiteWineData = COUNTRIES_WHITE_WINE_DATA;

  const redWineData = getDataItemById(selectedCountry, countryRedWineData);
  const whiteWineData = getDataItemById(selectedCountry, countryWhiteWineData);

  const COUNTRIES = filterCountriesData(countryRedWineData);

  console.log("itemName", whiteWineData.itemName);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleGrapeTypeChange = (event) => {
    setSelectedGrapeType(event.target.value);
  };

  const dataType = "country";

  // const headerExplanationText = selectedCountry.itemName + " Production: ";

  if (!countryRedWineData || !countryWhiteWineData) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  let headerText = generateHeader({
    dataType: dataType,
    itemName: redWineData.itemName,
    explanationText: whiteWineData.itemName + ": ",
    selectedGrapeType,
  });


  let subheaderText = generateSubheader({
    dataType: dataType,
    itemName: selectedCountry.itemName,
    selectedGrapeType,
    dataYear: 2016,
  });

  return (
    <>
      <Head>
        <title>
          Wine Production By Country - Bar Chart - Winography | Learn About Wine Through Data Visualizations
        </title>
        <meta
          name="description"
          content="Customizable bar chart of production in wine-producing contries, top national grape varietals, by land area."
        />
      </Head>
      <section className={classes.chart}>
        <h2 className={classes.header}>{headerText}</h2>
        <p className={classes.subheader}>{subheaderText}</p>

        <ChartSelectorDual
          countryData={COUNTRIES}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedGrapeType={selectedGrapeType}
          setSelectedGrapeType={setSelectedGrapeType}
        />
        <div className={classes.selectrow}>
        <span className={classes.selectLabel}> Select Country: </span>

          <select
            value={selectedCountry}
            className={classes.selectCss}
            onChange={handleCountryChange}
          >
            {COUNTRIES.map((country) => (
              <option key={country.id} value={country.id}>
                {country.itemName}
              </option>
            ))}
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
        <MultiBarChart
          itemName={selectedCountry.itemName}
          units={redWineData.units}
          dataYear={selectedCountry.dataYear}
          dataType={dataType}
          grapeType={selectedGrapeType}
          redGrapeData={redWineData}
          whiteGrapeData={whiteWineData}
        />

        <DataSource />
      </section>
    </>
  );
}

export default CountryGeneralBarChartPage;
