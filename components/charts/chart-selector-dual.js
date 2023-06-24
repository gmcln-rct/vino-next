import classes from "./chart-selector.module.css";

const ChartSelectorDual = ({ countryData, isCountryComparison, selectedItem1, setSelectedItem1, selectedItem2, setSelectedItem2 }) => {
    const COUNTRIES = countryData;
    let selectLabel1 = "Select Country: ";
    let selectLabel2 = "Select Grape: ";
    let selectData1 = countryData;
    let selectData2 = ["red", "white"];

    if (isCountryComparison) {
      selectLabel1 = "Select Country 1: ";
      selectLabel2 = "Select Country 2: ";
      selectData2 = countryData;
    };
    console.log("in chart selector dual - countrycompar", isCountryComparison);
    console.log("in chart selector dual - selectData1", selectData1);
    console.log("in chart selector dual - selectData2", selectData2);
    return (
        <div className={classes.selectrow}>
    { COUNTRIES && <>
    <span className={classes.selectLabel}> {selectLabel1} </span>
      <select
        value={selectedItem1}
        className={classes.selectDropdown}
        onChange={(event) => setSelectedItem1(event.target.value)}
      >
        {selectData1.map((dataItem1) => (
          <option key={dataItem1.id} value={dataItem1.id}>
            {dataItem1.itemName}
          </option>
        ))}
      </select>
      </>}
      <span className={classes.selectLabel}> {selectLabel2} </span>
      <select
        value={selectedItem2}
        className={classes.selectDropdown}
        onChange={(event) => setSelectedItem2(event.target.value)}
      >
        {selectData2.map((dataItem2) => (
          <option key={dataItem2.id} value={dataItem2.id}>
            {dataItem2.itemName}
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
