import classes from "./chart-selector.module.css";

const ChartSelectorDual = ({
  countryData,
  isCountryComparison,
  selectedItem1,
  setSelectedItem1,
  selectedItem2,
  setSelectedItem2,
}) => {
  const COUNTRIES = countryData;
  let selectLabel1 = "Select Country: ";
  let selectLabel2 = "Select Grape: ";
  let selectData1 = countryData;
  let selectData2 = ["red", "white"];

  if (isCountryComparison) {
    selectLabel1 = "Select Country 1: ";
    selectLabel2 = "Select Country 2: ";
    selectData2 = countryData;
  }

  return (
    <div className={classes.selectrow}>
      {COUNTRIES && (
        <>
          <span className={classes.selectLabel}> {selectLabel1} </span>
          <select
            value={selectedItem1}
            className={classes.selectDropdown}
            onChange={(event) => setSelectedItem1(event.target.value)}
          >
            {selectData1.map((dataItem1) => (
              <option key={dataItem1} value={dataItem1}>
                {dataItem1}
              </option>
            ))}
          </select>
        </>
      )}
      <span className={classes.selectLabel}> {selectLabel2} </span>
      <select
        value={selectedItem2}
        className={classes.selectDropdown}
        onChange={(event) => setSelectedItem2(event.target.value)}
      >
        {selectData2.map((dataItem2) => (
          <option key={dataItem2} value={dataItem2}>
            {dataItem2}
          </option>
        ))}
      </select>
      {/* <select
        className={classes.selectDropdown}
        value={selectedItem2}
        onChange={(event) => setSelectedItem2(event.target.value)}
      >
        <option value="red">Red Grapes</option>
        <option value="white">White Grapes</option>
      </select> */}
    </div>
  );
};

export default ChartSelectorDual;
