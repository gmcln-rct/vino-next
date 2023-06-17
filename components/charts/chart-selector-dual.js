import classes from "./chart-selector.module.css";

const ChartSelectorDual = ({ selectedGrapeType, setSelectedGrapeType }) => {
  return (
    <>
      <select
        value={selectedCountry}
        className={classes.selectCss}
        onChange={handleCountryChange}
      >
        {COUNTRIES.map((country) => (
          <option key={country.id} value={country.id}>
            {country.itemName}
          </option>
        ))}
      </select>
      <select
        className={classes.selectCss}
        value={selectedGrapeType}
        onChange={(event) => setSelectedGrapeType(event.target.value)}
      >
        <option value="Red">Red Grapes</option>
        <option value="White">White Grapes</option>
      </select>
    </>
  );
};

export default ChartSelectorDual;
