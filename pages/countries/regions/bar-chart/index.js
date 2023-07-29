import Head from "next/head";

import { useEffect, useState } from "react";

import classes from "@/components/charts/bar-chart.module.css";

import { COUNTRIES_RED_GRAPE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_GRAPE_DATA } from "@/data/country-wine-data-white-all-2016";

import { REGION_PRODUCTION_DATA } from "@/data/region-data";

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

function RegionsBarChartPage() {
  const [selectedCountry, setSelectedCountry] = useState("france");
  const [selectedRegionId, setSelectedRegionId] = useState("bordeaux");
  const [selectedGrapeType, setSelectedGrapeType] = useState("red");

  const COUNTRIES = filterCountriesData(REGION_PRODUCTION_DATA);
  const countriesArray = COUNTRIES.map((country) => country.itemName);
  
  let selectedRegionData;
  // let regionsArray;
  // // let country;
  // let countryData;

  const countryData = getDataItemById(selectedCountry, REGION_PRODUCTION_DATA);
  // country = countryData;
  const regionsArray = countryData.regions.map((region) => {
    return { id: region.id, itemName: region.itemName };
  });
  useEffect(() => {
    // setCountry(countryData);
    
    const regions = countryData?.regions;
    setSelectedRegionId(countryData?.featuredRegionId);
     selectedRegionData = regions.find((region) => region.id === selectedRegionId);
    
    // const newRegionData = getDataItemById(selectedRegion, regions);
    // setRegionData(selectedRegionData);
    //   setRedGrapeData(newRegionData.redGrapeData);
    // setWhiteGrapeData(newRegionData.whiteGrapeData);
    console.log("selectedRegionData", selectedRegionData);

  }, [countryData, selectedRegionId]);
  
  // if (!selectedRegionData) {
  //   return (
  //     <div className="center">
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

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
        <h1 className={classes.title}>Wine Production By Region</h1>

        <ChartSelectorMulti
          countryData={countriesArray}
          selectedItem1={selectedCountry}
          setSelectedItem1={setSelectedCountry}
          selectedItem2={selectedRegionId}
          setSelectedItem2={setSelectedRegionId}
          selectedItem3={selectedGrapeType}
          setSelectedItem3={setSelectedGrapeType}
          isRegionComparison={true}
          regionsArray={regionsArray}
        />
        {!selectedRegionData && (
          <div className="center">
            <p>Loading...</p>
            </div>
            )}
        {selectedRegionData && (<ChartWrapper
          country={countryData}
          region={selectedRegionData}
          redGrapeData={selectedRegionData.redGrapeData}
          whiteGrapeData={selectedRegionData.whiteGrapeData}
          selectedGrapeType={selectedGrapeType}
          dataType={dataType}
          topType="multi"
        />)}
        {countryData && (<UnitsFooter units={countryData.units} />)}
        <DataSource />
      </section>
    </>
  );
}

export default RegionsBarChartPage;
