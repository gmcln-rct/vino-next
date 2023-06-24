import Head from "next/head";

import { useState, useEffect, use } from "react";

import classes from "@/components/charts/bar-chart.module.css";

import { COUNTRIES_DATA } from "@/data/country-data";
import { COUNTRIES_RED_GRAPE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_GRAPE_DATA} from "@/data/country-wine-data-white-all-2016";

// import MultiBarChart from "@/components/charts/bar-multi-chart";
import ChartWrapper from "@/components/charts/chart-wrapper";

import ChartSelectorDual from "@/components/charts/chart-selector-dual";
import UnitsFooter from "@/components/layout/units-footer";
import DataSource from "@/components/layout/data-source";

import { filterCountriesData, getDataItemById } from "@/data/utils";
import {
  generateHeader,
  generateSubheader,
} from "@/components/utils/chart-utils";

// General Country Bar Chart with Two dropdowns

function CountryGeneralBarChartPage() {
  const [selectedCountry, setSelectedCountry] = useState("france");
  const [selectedGrapeType, setSelectedGrapeType] = useState("red");;

  const countryRedGrapeData = COUNTRIES_RED_GRAPE_DATA;
  const countryWhiteGrapeData = COUNTRIES_WHITE_GRAPE_DATA;

  const redGrapeData = getDataItemById(selectedCountry, countryRedGrapeData);
  const whiteGrapeData = getDataItemById(selectedCountry, COUNTRIES_WHITE_GRAPE_DATA);

  const COUNTRIES = filterCountriesData(countryRedGrapeData);
  let country = getDataItemById(selectedCountry, COUNTRIES_RED_GRAPE_DATA);

  const dataType = "country";

  if (!redGrapeData || !whiteGrapeData) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  let headerText = generateHeader({
    dataType: dataType,
    itemName: redGrapeData.itemName,
    explanationText: redGrapeData.itemName + ": ",
    selectedGrapeType,
  });

  let subheaderText = generateSubheader({
    dataType: dataType,
    itemName: selectedCountry.itemName,
    selectedGrapeType,
    dataYear: 2016,
  });
  // let countryWineData;

  console.log("in bar chart index - redGrapeData", redGrapeData);
  console.log("in bar chart index - red wine grape data", countryRedGrapeData);
  console.log("in bar chart index - country", country);

  return (
    <>
      <Head>
        <title>
          Wine Production By Country - Bar Chart - Winography | Learn About Wine
          Through Data Visualizations
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
        {/* <MultiBarChart
          itemName={selectedCountry.itemName}
          units={redGrapeData.units}
          dataYear={selectedCountry.dataYear}
          dataType={dataType}
          grapeType={selectedGrapeType}
          redGrapeData={redGrapeData}
          whiteGrapeData={whiteGrapeData}
        /> */}
        <ChartWrapper
          country={country}
          redGrapeData={redGrapeData.grapeData}
          whiteGrapeData={whiteGrapeData.grapeData}
          selectedGrapeType={selectedGrapeType}
          dataType={dataType}
          topType="multi"
        />
        <UnitsFooter units="hectares" />
        <DataSource />
      </section>
    </>
  );
}

export default CountryGeneralBarChartPage;
