import { useState, useEffect } from "react";
import BubbleMultiChart from "@/components/charts/bubble-multi-chart";

import { COUNTRIES_RED_GRAPE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_GRAPE_DATA} from "@/data/country-wine-data-white-all-2016";

import { getDataItemById } from "@/data/utils";

function CountryBubbleIndex() {
  const redWineData = COUNTRIES_RED_GRAPE_DATA;
  const whiteWineData = COUNTRIES_WHITE_GRAPE_DATA;

  const [selectedCountry, setSelectedCountry] = useState("algeria");
  const [selectedGrapeType, setSelectedGrapeType] = useState("red");;
  const [grapeData, setGrapeData] = useState();
  const [units, setUnits] = useState("hectares");

  const COUNTRIES = redWineData.map((d) => ({ id: d.id, itemName: d.itemName }));


  useEffect(() => {

    const data = selectedGrapeType === "red" ? redWineData : whiteWineData;

    const country = getDataItemById(selectedCountry, data);

    if(country) {
      setGrapeData(country.grapeData);
    }

  }, [redWineData, whiteWineData, selectedCountry, selectedGrapeType]);
  
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
          <option value="red">Red Grapes</option>
          <option value="white">White Grapes</option>
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
