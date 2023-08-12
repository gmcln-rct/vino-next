import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

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

  const [country, setCountry] = useState();
  const [regionData, setRegionData] = useState();
  const [regionsArray, setRegionsArray] = useState([]);

  const COUNTRIES = filterCountriesData(REGION_PRODUCTION_DATA);
  const countriesArray = COUNTRIES.map((country) => country.itemName);

  console.log("selectedCountry: ", COUNTRIES);

  useEffect(() => {
    const countryData = getDataItemById(
      selectedCountry,
      REGION_PRODUCTION_DATA
    );

    const regions = countryData.regions;
      console.log("countryData: ", countryData);
    const selectedCountryRegionsArray = regions.map((region) => {
      return {
        id: region.id,
        itemName: region.itemName,
      };
    });
    const selectedRegionData = regions.find(
      (region) => region.id === countryData.featuredRegionId
    );
      console.log("selectedRegionData: ", selectedRegionData);
      console.log('selected Region Data', selectedRegionData);
    setCountry(countryData);
    setRegionData(selectedRegionData);
    setRegionsArray([...selectedCountryRegionsArray]);
  }, [selectedCountry]);

  useEffect(() => {
    const countryData = getDataItemById(
      selectedCountry,
      REGION_PRODUCTION_DATA
    );
    if (selectedRegionId) {
      const selectedRegionData = countryData.regions.find(
        (region) => region.id === selectedRegionId
      );
      // console.log("selectedRegionId: ", selectedRegionId);

      setRegionData(selectedRegionData);
    }
  }, [selectedRegionId]);

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
          Wine Grape Production By Region - Bar Chart - Winography | Learn About
          Wine Through Data Visualizations
        </title>
        <meta
          name="description"
          content="Customizable bar chart of production in wine-producing regions, top national grape varietals, by land area."
        />
      </Head>
      <section className={classes.chart}>
        <h1 className={classes.header}>
          Grape Production By Region: {country.itemName}
        </h1>
        <h2 className={classes.subheader}>
          Production of world top 100 wine grapes in individual regions.
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
        <p className={classes.note}>
          Note that the above chart covers the{" "}
          <Link href="./top-wine-grapes">
            top 100 most produced wine grapes{" "}
          </Link>
          worldwide. Regional varietals are not included in this chart.
        </p>
        <DataSource />
      </section>
    </>
  );
}

export default RegionsBarChartPage;
