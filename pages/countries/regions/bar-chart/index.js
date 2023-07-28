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
  
  const [regionsArray, setRegionsArray] = useState([]);
  const [regionData, setRegionData] = useState();
  const [redGrapeData, setRedGrapeData] = useState();
  const [whiteGrapeData, setWhiteGrapeData] = useState();
  const [country, setCountry] = useState();
  const [dataType, setDataType] = useState("region");


  useEffect(() => {
    const countryData = getDataItemById(selectedCountry, REGION_PRODUCTION_DATA);
    setCountry(countryData);
    
    const regions = countryData.regions;
    setRegionsArray(regions);
    setSelectedRegionId(countryData.featuredRegionId);
    setSelectedGrapeType("red");
    // console.log("selectedRegionId", selectedRegionId);
    const selectedRegionData = regionsArray.find((region) => region.id === selectedRegionId);
    console.log("newRegionData", selectedRegionData);
    
    // const newRegionData = getDataItemById(selectedRegion, regions);
    setRegionData(selectedRegionData);
    console.log("regionData", regionData);
    //   setRedGrapeData(newRegionData.redGrapeData);
    // setWhiteGrapeData(newRegionData.whiteGrapeData);
    
    if (regionData) {
      setRedGrapeData(regionData.redGrapeData);
      setWhiteGrapeData(regionData.whiteGrapeData);
    } 


  }, [selectedCountry]);

  if (!regionData) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

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
        <ChartWrapper
          country={country}
          region={regionData}
          redGrapeData={redGrapeData}
          whiteGrapeData={whiteGrapeData}
          selectedGrapeType={selectedGrapeType}
          dataType={dataType}
          topType="multi"
        />
        <UnitsFooter units={country.units} />
        <DataSource />
      </section>
    </>
  );
}

export default RegionsBarChartPage;
