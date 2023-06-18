import Head from "next/head";

import { useState, useEffect, use } from "react";

import classes from "@/components/charts/bar-chart.module.css";

import { COUNTRIES_DATA } from "@/data/country-data";
import { COUNTRIES_RED_WINE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_WINE_DATA } from "@/data/country-wine-data-white-all-2016";

import MultiBarChart from "@/components/charts/bar-multi-chart";
import ChartWrapper from "@/components/charts/chart-wrapper";

import ChartSelectorDual from "@/components/charts/chart-selector-dual";
import UnitsFooter from "@/components/layout/units-footer";
import DataSource from "@/components/layout/data-source";

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
  let country = getDataItemById(selectedCountry, COUNTRIES_DATA);

  const dataType = "country";

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
  let countryWineData;



    if (selectedGrapeType ==="Red") {
      countryWineData = redWineData;
    } else {
      countryWineData = countryWhiteWineData;
    }


  console.log("countryWineData ", countryWineData);
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
        <MultiBarChart
          itemName={selectedCountry.itemName}
          units={redWineData.units}
          dataYear={selectedCountry.dataYear}
          dataType={dataType}
          grapeType={selectedGrapeType}
          redGrapeData={redWineData}
          whiteGrapeData={whiteWineData}
        />
        {/* <ChartWrapper
          country={country}
          countryWineData={countryWineData}
          selectedGrapeType={selectedGrapeType}
          dataType={dataType}
          topType="multi"
        /> */}
        <UnitsFooter units="hectares" />
        <DataSource />
      </section>
    </>
  );
}

export default CountryGeneralBarChartPage;
