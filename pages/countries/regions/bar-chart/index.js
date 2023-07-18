import Head from "next/head";

import { useState } from "react";

import classes from "@/components/charts/bar-chart.module.css";

import { COUNTRIES_DATA } from "@/data/country-data";
import { COUNTRIES_RED_GRAPE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_GRAPE_DATA } from "@/data/country-wine-data-white-all-2016";

import ChartSelectorDual from "@/components/charts/chart-selector-dual";
import ChartWrapper from "@/components/charts/chart-wrapper";
import UnitsFooter from "@/components/layout/units-footer";
import DataSource from "@/components/layout/data-source";

import { filterCountriesData, getDataItemById } from "@/data/utils";
import {
  generateHeader,
  generateSubheader,
} from "@/components/utils/chart-utils";

// ######                                                   ######                    #####                             
// #     # ######  ####  #  ####  #    #  ####              #     #   ##   #####     #     # #    #   ##   #####  ##### 
// #     # #      #    # # #    # ##   # #                  #     #  #  #  #    #    #       #    #  #  #  #    #   #   
// ######  #####  #      # #    # # #  #  ####     #####    ######  #    # #    #    #       ###### #    # #    #   #   
// #   #   #      #  ### # #    # #  # #      #             #     # ###### #####     #       #    # ###### #####    #   
// #    #  #      #    # # #    # #   ## #    #             #     # #    # #   #     #     # #    # #    # #   #    #   
// #     # ######  ####  #  ####  #    #  ####              ######  #    # #    #     #####  #    # #    # #    #   #   
                                                                                                                                       
////////////////////////////////////////////////////////////////
// General Regions Bar Chart with Three dropdowns
////////////////////////////////////////////////////////////////

function RegionsBarCartPage() {
  const [selectedCountry, setSelectedCountry] = useState("france");
  const [selectedGrapeType, setSelectedGrapeType] = useState("red");

  const countryRedGrapeData = COUNTRIES_RED_GRAPE_DATA;
  // const countryWhiteGrapeData = COUNTRIES_WHITE_GRAPE_DATA;

  const redGrapeData = getDataItemById(
    selectedCountry,
    COUNTRIES_RED_GRAPE_DATA
  );
  const whiteGrapeData = getDataItemById(
    selectedCountry,
    COUNTRIES_WHITE_GRAPE_DATA
  );

  const COUNTRIES = filterCountriesData(countryRedGrapeData);
  const countriesArray = COUNTRIES.map((country) => country.itemName);
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

  return (
    <>
      <Head>
        <title>
          Wine Production By Region - Bar Chart - Winography | Learn About Wine
          Through Data Visualizations
        </title>
        <meta
          name="description"
          content="Customizable bar chart of production in wine-producing regions, top national grape varietals, by land area."
        />
      </Head>
      <section className={classes.chart}>
        <h1 className={classes.title}>Wine Production By Country</h1>
        <h2 className={classes.header}>{headerText}</h2>
        <p className={classes.subheader}>{subheaderText}</p>

        <ChartSelectorDual
          countryData={countriesArray}
          selectedItem1={selectedCountry}
          setSelectedItem1={setSelectedCountry}
          selectedItem2={selectedGrapeType}
          setSelectedItem2={setSelectedGrapeType}
        />
        {/* <ChartWrapper
          country={country}
          redGrapeData={redGrapeData.grapeData}
          whiteGrapeData={whiteGrapeData.grapeData}
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

export default RegionsBarCartPage;
