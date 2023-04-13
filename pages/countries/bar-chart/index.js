import Link from "next/link";
import Head from "next/head";

import { useState } from "react";

import classes from "./index.module.css";

import { COUNTRIES_RED_WINE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_WINE_DATA } from "@/data/country-wine-data-white-all-2016";


// import BarChart from "@/components/graphs/bar-chart";
import MultiBarChart from "@/components/graphs/bar-multi-chart";
import Button from "@/components/ui/button";

import {filterCountriesData, getDataItemById} from "@/data/utils";

function CountryGeneralBarChartPage() {
  //   const country = getDataItemById(id, COUNTRIES_DATA);
  const [selectedCountry, setSelectedCountry] = useState('france');
  const [selectedGrapeType, setSelectedGrapeType] = useState('red');

  const countryRedWineData = COUNTRIES_RED_WINE_DATA;
  const countryWhiteWineData = COUNTRIES_WHITE_WINE_DATA;

  console.log('countryRedWineData', countryRedWineData);
  
  const redWineData = getDataItemById(selectedCountry, countryRedWineData);
  const whiteWineData = getDataItemById(selectedCountry, countryWhiteWineData);

  const COUNTRIES = filterCountriesData(countryRedWineData);

// console.log('COUNTRIES', COUNTRIES)
  // const COUNTRIES = [
  //   "France",
  //   "Italy",
  //   "Spain",
  //   "United States",
  //   "Argentina",
  //   "Australia",
  //   "Chile",
  //   "South Africa",
  //   "Germany",
  //   "Portugal",
  // ];


  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleGrapeTypeChange = (event) => {
    setSelectedGrapeType(event.target.value);
  };

  // const country = getDataItemById("france", COUNTRIES_RED_WINE_DATA);

  // const dataType = "country";

  if (!countryRedWineData || !countryWhiteWineData) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  // const countryLink = `/countries/${country.id}`;
  return (
    <>
      <Head>
        <title>
          Countries Bar Chart - Winography - Wine Data Visualization
        </title>
        <meta
          name="description"
          content="Wine data visualization for winegrape area production for top national grape varietals"
        />
      </Head>
      <div className={classes.selectrow}>

        <select
          value={selectedCountry}
          className="selectCss select120"
          onChange={handleCountryChange}
        >
          {COUNTRIES.map((country) => (
            <option key={country.id} value={country.id}>
              {country.itemName}
            </option>
          ))}
        </select>
        <span>vs.</span>
        <select
          value={selectedGrapeType}
          className="selectCss select120"
          onChange={handleGrapeTypeChange}
        >
          <option value="red">Red</option>
          <option value="white">White</option>
        </select>

      </div>
      <MultiBarChart
        // itemName={country.itemName}
        // units={country.units}
        // dataYear={country.dataYear}
        // dataType={dataType}
        grapeType={selectedGrapeType}s
        redGrapeData={redWineData.grapeData}
        whiteGrapeData={whiteWineData.grapeData}
        // explanationText={explanationText}
        // isGeneral="true"
      />

      {/* <BarChart
        itemName={country.itemName}
        units={country.units}
        dataYear={country.dataYear}
        dataType={dataType}
        redGrapeData={countryRedWineData}
        whiteGrapeData={countryWhiteWineData}
        explanationText={explanationText}
        isGeneral="true"
      /> */}
      <div>
        <p className="dataSource">
          Data Source:{" "}
          <Link
            href="https://economics.adelaide.edu.au/wine-economics/databases/"
            className="dataSource"
          >
            Wine Economics Research Centre, University of Adelaide
          </Link>
        </p>
      </div>
      {/* <div className="buttonFooter">
        <Button link={countryLink} isSecondary="true">
          Back to {country.itemName} Page
        </Button>
        <Button link="/countries/" isSecondary="true">
          Back to Country Index
        </Button>
      </div> */}
    </>
  );
}

export default CountryGeneralBarChartPage;
