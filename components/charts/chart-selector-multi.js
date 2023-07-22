import classes from "./chart-selector.module.css";

const ChartSelectorMulti = ({
  countryData,
  regionsArray,
  isCountryComparison,
  isRegionComparison,
  selectedItem1,
  setSelectedItem1,
  selectedItem2,
  setSelectedItem2,
  selectedItem3,
  setSelectedItem3,
}) => {
  const COUNTRIES = countryData;
  let selectLabel1 = "Country: ";
  let selectLabel2 = "Grape Type: ";
  let selectData1 = countryData;
  let selectData2 = ["red", "white"];
  let selectLabel3;

  if (isCountryComparison) {
    selectLabel1 = "Country 1: ";
    selectLabel2 = " Country 2: ";
    selectData2 = countryData;
  } else if (isRegionComparison) {
    selectLabel2 = "Region: ";
    selectLabel3 = "Grape Type: ";
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
              <option key={dataItem1} value={dataItem1.toLowerCase()}>
                {dataItem1}
              </option>
            ))}
          </select>
        </>
      )}
      <>
        <span className={classes.selectLabel}> {selectLabel2} </span>
        <select
          value={selectedItem2}
          className={classes.selectDropdown}
          onChange={(event) => setSelectedItem2(event.target.value)}
        >
          {selectData2.map((dataItem2) => (
            <option
              key={dataItem2}
              value={dataItem2}
              className={classes.selectOption}
            >
              {dataItem2.charAt(0).toUpperCase() + dataItem2.slice(1)}
            </option>
          ))}
        </select>
      </>
      {/* Selector 3 */}
      {isRegionComparison && (
        <>
          <span className={classes.selectLabel}> {selectLabel3} </span>
          <select
            value={selectedItem3}
            className={classes.selectDropdown}
            onChange={(event) => setSelectedItem3(event.target.value)}
          >
            {regionsArray.map((dataItem3) => (
              <option
                key={dataItem3.id}
                value={dataItem3.id}
                className={classes.selectOption}
              >
                {dataItem3.itemName.charAt(0).toUpperCase() + dataItem3.itemName.slice(1)}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default ChartSelectorMulti;
