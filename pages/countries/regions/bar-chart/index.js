import { useState, useEffect } from "react";
import Head from "next/head";


import classes from "@/components/charts/bar-chart.module.css";

import { REGION_PRODUCTION_DATA } from "@/data/region-data";

import ChartSelectorMulti from "@/components/charts/chart-selector-multi";
import ChartWrapper from "@/components/charts/chart-wrapper";
import UnitsFooter from "@/components/layout/units-footer";
import DataSource from "@/components/layout/data-source";

import { filterCountriesData, getDataItemById } from "@/data/utils";



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

  const [country, setCountry] = useState();

  const [regionData, setRegionData] = useState();

  const [regionsArray, setRegionsArray] = useState([]);
  // const [country, setCountry] = useState();

  useEffect(() => {
    const countryData = getDataItemById(
      selectedCountry,
      REGION_PRODUCTION_DATA
    );
   // console.log("countryData: ", countryData);
    const newRegionData = countryData.regions.find(
      (region) => region.id === selectedCountry
    );

    console.log("regionData: ", newRegionData);

    const regions = countryData.regions;
    setRegionsArray(regions);

    const selectedCountryRegionsArray = regions.map((region) => {
      return {
        id: region.id,
        itemName: region.itemName,
      }
    });
    const selectedRegionData = regions.find(
      (region) => region.id === countryData.featuredRegionId
    );
    setCountry(countryData);
    setRegionData(selectedRegionData);
    setRegionsArray(selectedCountryRegionsArray);
    console.log("selectedCountryRegionsArray: ", regionsArray);

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
        <h1 className={classes.header}>Wine Production By Region</h1>
        <h2 className={classes.subheader}>
          Production of world top 100 wine grapes in regions of{" "}
          {country.itemName}
        </h2>

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
          redGrapeData={regionData.redGrapeData}
          whiteGrapeData={regionData.whiteGrapeData}
          selectedGrapeType={selectedGrapeType}
          dataType="region"
          topType="multi"
        />
        <UnitsFooter units={country.units} />
        <DataSource />
      </section>
    </>
  );
}

export default RegionsBarChartPage;
