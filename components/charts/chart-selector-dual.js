import classes from "./chart-selector.module.css";

const ChartSelectorDual = ({ countryData, selectedCountry, setSelectedCountry, selectedGrapeType, setSelectedGrapeType }) => {
    console.log("in chart selector dual - countryData", countryData);
    const COUNTRIES = countryData;
    return (
        <div className={classes.selectrow}>
    { COUNTRIES && <>
    <span className={classes.selectLabel}> Select Country: </span>
      <select
        value={selectedCountry}
        className={classes.selectDropdown}
        onChange={(event) => setSelectedCountry(event.target.value)}
      >
        {COUNTRIES.map((country) => (
          <option key={country.id} value={country.id}>
            {country.itemName}
          </option>
        ))}
      </select>
      </>}
      <span className={classes.selectLabel}> Select Grape: </span>

      <select
        className={classes.selectDropdown}
        value={selectedGrapeType}
        onChange={(event) => setSelectedGrapeType(event.target.value)}
      >
        <option value="red">Red Grapes</option>
        <option value="white">White Grapes</option>
      </select>
    </div>
  );
};

export default ChartSelectorDual;
