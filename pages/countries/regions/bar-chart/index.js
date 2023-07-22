import Head from "next/head";

import { useState } from "react";

import classes from "@/components/charts/bar-chart.module.css";

import { COUNTRIES_RED_GRAPE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_GRAPE_DATA } from "@/data/country-wine-data-white-all-2016";

import {REGION_PRODUCTION_DATA } from "@/data/region-data-test-2";

import ChartSelectorMulti from "@/components/charts/chart-selector-multi";
import ChartWrapper from "@/components/charts/chart-wrapper";
import UnitsFooter from "@/components/layout/units-footer";
import DataSource from "@/components/layout/data-source";

import { filterCountriesData, getDataItemById } from "@/data/utils";
import {
  generateHeader,
  generateSubheader,
} from "@/components/utils/chart-utils";

//  ______           _                           ______              _____ _                _   
//  | ___ \         (_)                          | ___ \            /  __ \ |              | |  
//  | |_/ /___  __ _ _  ___  _ __  ___   ______  | |_/ / __ _ _ __  | /  \/ |__   __ _ _ __| |_ 
//  |    // _ \/ _` | |/ _ \| '_ \/ __| |______| | ___ \/ _` | '__| | |   | '_ \ / _` | '__| __|
//  | |\ \  __/ (_| | | (_) | | | \__ \          | |_/ / (_| | |    | \__/\ | | | (_| | |  | |_ 
//  \_| \_\___|\__, |_|\___/|_| |_|___/          \____/ \__,_|_|     \____/_| |_|\__,_|_|   \__|
//              __/ |                                                                           
//                                                                                                                                    
////////////////////////////////////////////////////////////////
// General Regions Bar Chart with Three dropdowns
////////////////////////////////////////////////////////////////

function RegionsBarCartPage() {
  const [selectedCountry, setSelectedCountry] = useState("argentina");
  const [selectedRegion, setSelectedRegion] = useState("bordeaux");
  const [selectedGrapeType, setSelectedGrapeType] = useState("red");

  console.log("REGION_PRODUCTION_DATA", REGION_PRODUCTION_DATA);

  const COUNTRIES = filterCountriesData(REGION_PRODUCTION_DATA);

  console.log("COUNTRIES", COUNTRIES);

//   const countryRedGrapeData = COUNTRIES_RED_GRAPE_DATA;
  // const countryWhiteGrapeData = COUNTRIES_WHITE_GRAPE_DATA;

//   const redGrapeData = getDataItemById(
//     selectedCountry,
//     COUNTRIES_RED_GRAPE_DATA
//   );
//   const whiteGrapeData = getDataItemById(
//     selectedCountry,
//     COUNTRIES_WHITE_GRAPE_DATA
//   );

//   const COUNTRIES = filterCountriesData(countryRedGrapeData);
  const countriesArray = COUNTRIES.map((country) => country.itemName);
  const regionsArray = REGION_PRODUCTION_DATA.filter(country => country.id === selectedCountry)[0].regions;

//   let country = getDataItemById(selectedCountry, COUNTRIES_RED_GRAPE_DATA);
//   const dataType = "country";

//   if (!redGrapeData || !whiteGrapeData) {
//     return (
//       <div className="center">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   let headerText = generateHeader({
//     dataType: dataType,
//     itemName: redGrapeData.itemName,
//     explanationText: redGrapeData.itemName + ": ",
//     selectedGrapeType,
//   });

//   let subheaderText = generateSubheader({
//     dataType: dataType,
//     itemName: selectedCountry.itemName,
//     selectedGrapeType,
//     dataYear: 2016,
//   });
console.log("in regions - countriesARray", countriesArray);

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
        {/* <h2 className={classes.header}>{headerText}</h2>
        <p className={classes.subheader}>{subheaderText}</p> */}

        <ChartSelectorMulti
          countryData={countriesArray}
          selectedItem1={selectedCountry}
          setSelectedItem1={setSelectedCountry}
          selectedItem2={selectedRegion}
          setSelectedItem2={setSelectedRegion}
          selectedItem3={selectedGrapeType}
          setSelectedItem3={setSelectedGrapeType}
          isRegionComparison={true}
          regionsArray={regionsArray}
        />
        {/* <ChartWrapper
          country={country}
          redGrapeData={redGrapeData.grapeData}
          whiteGrapeData={whiteGrapeData.grapeData}
          selectedGrapeType={selectedGrapeType}
          dataType={dataType}
          topType="multi"
        /> */}
        {/* <UnitsFooter units="hectares" />
        <DataSource /> */}
      </section>
    </>
  );
}

export default RegionsBarCartPage;
