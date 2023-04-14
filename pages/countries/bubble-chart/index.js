import { useState, useEffect } from "react";
import BubbleMultiChart from "@/components/graphs/bubble-multi-chart";

import { COUNTRIES_RED_WINE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_WINE_DATA } from "@/data/country-wine-data-white-all-2016";

import { getDataItemById } from "@/data/utils";

function CountryBubbleIndex() {
  const redWineData = COUNTRIES_RED_WINE_DATA;
  const whiteWineData = COUNTRIES_WHITE_WINE_DATA;

  const [selectedCountry, setSelectedCountry] = useState("algeria");
  const [selectedGrapeType, setSelectedGrapeType] = useState("Red");
  const [grapeData, setGrapeData] = useState();
  const [units, setUnits] = useState("hectares");

  const COUNTRIES = redWineData.map((d) => ({ id: d.id, itemName: d.itemName }));

  // const COUNTRIES = redWineData.map((d) => {d.id, d.itemName});
// console.log("in bubble index - COUNTRIES: ", COUNTRIES);

  // let filteredData = grapeData.filter(
  //   (d) =>
  //     d.id === selectedCountry && d.grapeData.filter((gd) => gd.value !== 0)
  // );

  useEffect(() => {

    const data = selectedGrapeType === "Red" ? redWineData : whiteWineData;

    // console.log("in bubble index - data: ", data);
    // console.log("in bubble index - selectedCountry: ", selectedCountry);
    // ? setGrapeData(country.grapeData)
    // : setGrapeData(COUNTRIES_RED_WINE_DATA);
    const country = getDataItemById(selectedCountry, data);

    // console.log("bubblr INDEX - country", country);
    // selectedGrapeType === "Red"
    //   ? setGrapeData(country.grapeData)
    //   : setGrapeData(COUNTRIES_RED_WINE_DATA);
    if(country) {
      setGrapeData(country.grapeData);
    }
    // setGrapeData(country.grapeData);

  }, [selectedCountry, selectedGrapeType]);
  
  // const filteredData = grapeData.filter(
  //   (d) =>
  //     d.id === selectedCountry &&
  //     d.grapeData.some((gd) => gd.value !== 0)
  // );

  // if (filteredData.length > 0) {
  //   setGrapeData(filteredData[0].grapeData.filter((d) => d.value !== 0));
  // }
  // console.log("selectedCountry 2", selectedCountry);
  // console.log("selectedGrapeType 2", selectedGrapeType);
  // console.log("bubble index - grapeData 2", grapeData);

  return (
    <>
      <div className="selectRow">
        <select
          className="selectCss select120"
          value={selectedCountry}
          onChange={(event) => setSelectedCountry(event.target.value)}
        >
          {COUNTRIES.map((country) => (
            <option key={country.id} value={country.id}>
              {country.itemName}
            </option>
          ))}
        </select>
        <span> - </span>
        <select
          className="selectCss select120"
          value={selectedGrapeType}
          onChange={(event) => setSelectedGrapeType(event.target.value)}
        >
          <option value="Red">Red Grapes</option>
          <option value="White">White Grapes</option>
        </select>
      </div>

      {grapeData && (
        <BubbleMultiChart
          country={selectedCountry}
          grapeData={grapeData}
          units={units}
          width={600}
          height={400}
        />
      )}
      {/* {!filteredData.length && (
        <p>No data available for selected country and grape type.</p>
      )} */}
    </>
  );
}

export default CountryBubbleIndex;
