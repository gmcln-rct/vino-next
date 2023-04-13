import { useState } from "react";
import BubbleMultiChart from '@/components/graphs/bubble-multi-chart';

import {GrapeSelector} from '@/components/layout/grape-selector';

import { COUNTRIES_RED_WINE_DATA } from "@/data/country-wine-data-red-all-2016";
import { COUNTRIES_WHITE_WINE_DATA } from "@/data/country-wine-data-white-all-2016";

// import BubbleChart from "./BubbleChart";

function CountryBubbleIndex() {
  const [selectedCountry, setSelectedCountry] = useState("france");
  const [selectedGrapeType, setSelectedGrapeType] = useState("Red");

  const redWineData = COUNTRIES_RED_WINE_DATA;
  const whiteWineData = COUNTRIES_WHITE_WINE_DATA;

  const countries = [...new Set([...redWineData, ...whiteWineData].map((d) => d.itemName))];
  const grapeTypes = ["Red", "White"];
console.log("countries", countries);
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleGrapeTypeChange = (event) => {
    setSelectedGrapeType(event.target.value);
  };


  const grapeData = selectedGrapeType === "Red" ? redWineData : whiteWineData;

  const filteredData = grapeData.filter(
    (d) => d.id === selectedCountry && d.grapeData.some((gd) => gd.value !== 0)
  );

  return (
    <>
    <div>

      <GrapeSelector
        label="Select a country"
        options={countries}
        value={selectedCountry}
        onChange={handleCountryChange}
      />
      <GrapeSelector
        label="Select a grape type"
        options={grapeTypes}
        value={selectedGrapeType}
        onChange={handleGrapeTypeChange}
      />
          </div>
      {selectedCountry && selectedGrapeType && filteredData.length > 0 && (
        <BubbleMultiChart
          data={filteredData[0].grapeData.filter((d) => d.value !== 0)}
          width={600}
          height={400}
        />
      )}
      {!filteredData.length && (
        <p>No data available for selected country and grape type.</p>
      )}

    </>
  );
};

export default CountryBubbleIndex;
