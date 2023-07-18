import { useState, useEffect } from "react";
import BubbleMultiChart from "@/components/charts/bubble-multi-chart";

import { COUNTRIES_RED_GRAPE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_GRAPE_DATA} from "@/data/country-wine-data-white-all-2016";

import { getDataItemById } from "@/data/utils";

//   _____                   _        _                     ______       _     _     _        _____ _                _   
//  /  __ \                 | |      (_)                    | ___ \     | |   | |   | |      /  __ \ |              | |  
//  | /  \/ ___  _   _ _ __ | |_ _ __ _  ___  ___   ______  | |_/ /_   _| |__ | |__ | | ___  | /  \/ |__   __ _ _ __| |_ 
//  | |    / _ \| | | | '_ \| __| '__| |/ _ \/ __| |______| | ___ \ | | | '_ \| '_ \| |/ _ \ | |   | '_ \ / _` | '__| __|
//  | \__/\ (_) | |_| | | | | |_| |  | |  __/\__ \          | |_/ / |_| | |_) | |_) | |  __/ | \__/\ | | | (_| | |  | |_ 
//   \____/\___/ \__,_|_| |_|\__|_|  |_|\___||___/          \____/ \__,_|_.__/|_.__/|_|\___|  \____/_| |_|\__,_|_|   \__|
//                                                                                                                       
//       
////////////////////////////////////////////////////////////////
// General Countries Bubble Chart Index
////////////////////////////////////////////////////////////////

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
