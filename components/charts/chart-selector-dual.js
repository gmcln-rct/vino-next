import classes from "./chart-selector.module.css";

const ChartSelectorDual = ({ countryData, selectedItem1, setSelectedItem1, selectedItem2, setSelectedItem2 }) => {
    const COUNTRIES = countryData;
    return (
        <div className={classes.selectrow}>
    { COUNTRIES && <>
    <span className={classes.selectLabel}> Select Country: </span>
      <select
        value={selectedItem1}
        className={classes.selectDropdown}
        onChange={(event) => setSelectedItem1(event.target.value)}
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
        value={selectedItem2}
        onChange={(event) => setSelectedItem2(event.target.value)}
      >
        <option value="red">Red Grapes</option>
        <option value="white">White Grapes</option>
      </select>
    </div>
  );
};

export default ChartSelectorDual;
