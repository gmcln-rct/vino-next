import Head from "next/head";

import { useState } from "react";

import classes from "@/components/charts/bar-chart.module.css";

import { COUNTRIES_RED_GRAPE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_GRAPE_DATA } from "@/data/country-wine-data-white-all-2016";

import ChartSelectorMulti from "@/components/charts/chart-selector-multi";
import ChartWrapper from "@/components/charts/chart-wrapper";
import UnitsFooter from "@/components/layout/units-footer";
import DataSource from "@/components/layout/data-source";

import { filterCountriesData, getDataItemById } from "@/data/utils";
import { generateSubheader } from "@/components/utils/chart-utils";

//   _____                   _        _                     ______              _____ _                _
//  /  __ \                 | |      (_)                    | ___ \            /  __ \ |              | |
//  | /  \/ ___  _   _ _ __ | |_ _ __ _  ___  ___   ______  | |_/ / __ _ _ __  | /  \/ |__   __ _ _ __| |_
//  | |    / _ \| | | | '_ \| __| '__| |/ _ \/ __| |______| | ___ \/ _` | '__| | |   | '_ \ / _` | '__| __|
//  | \__/\ (_) | |_| | | | | |_| |  | |  __/\__ \          | |_/ / (_| | |    | \__/\ | | | (_| | |  | |_
//   \____/\___/ \__,_|_| |_|\__|_|  |_|\___||___/          \____/ \__,_|_|     \____/_| |_|\__,_|_|   \__|
//

////////////////////////////////////////////////////////////////
// General Country Bar Chart with Two dropdowns
////////////////////////////////////////////////////////////////

function CountryGeneralBarChartPage() {
  const [selectedCountry, setSelectedCountry] = useState("france");
  const [selectedGrapeType, setSelectedGrapeType] = useState("red");

  const countryRedGrapeData = COUNTRIES_RED_GRAPE_DATA;

  const redGrapeData = getDataItemById(
    selectedCountry,
    COUNTRIES_RED_GRAPE_DATA
  );
  const whiteGrapeData = getDataItemById(
    selectedCountry,
    COUNTRIES_WHITE_GRAPE_DATA
  );

  const COUNTRIES = filterCountriesData(countryRedGrapeData);
  const countriesArray = COUNTRIES.map((country) => {
    return {
      id: country.id,
      itemName: country.itemName,
    };
  });
  let country = getDataItemById(selectedCountry, COUNTRIES_RED_GRAPE_DATA);
  const dataType = "country";

  if (!redGrapeData || !whiteGrapeData) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  let countryName = country.itemName;

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
          Wine Production By Country - Bar Chart - Winography | Learn About Wine
          Through Data Visualizations
        </title>
        <meta
          name="description"
          content="Customizable bar chart of production in wine-producing countries, top national grape varietals, by land area."
        />
      </Head>
      <section className={classes.chart}>
        <h1 className={classes.title}>
          Production By Country: <span className="yellow">{countryName}</span>
        </h1>
        <p className={classes.subheader}>{subheaderText}</p>
        <ChartSelectorMulti
          countryData={countriesArray}
          selectedItem1={selectedCountry}
          setSelectedItem1={setSelectedCountry}
          selectedItem2={selectedGrapeType}
          setSelectedItem2={setSelectedGrapeType}
        />
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
