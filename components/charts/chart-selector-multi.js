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

  const countryObject = countryData.map((country) => {
    return {
      id: country.replace(" ", "-").toLowerCase(),
      itemName: country,
    };
  });
  const COUNTRIES = countryData;
  let selectLabel1 = "Country: ";
  let selectLabel2 = "Grape Type: ";
  let selectData1 = countryObject;
  let selectData2 = [
    { id: "red", itemName: "Red" },
    { id: "white", itemName: "White" },
  ];
  let selectLabel3 = "Grape Type: ";
  let selectData3 = [
    { id: "red", itemName: "Red" },
    { id: "white", itemName: "White" },
  ];
  let select2Class = "selectCss select80";

  if (isCountryComparison) {
    selectLabel1 = "Country 1: ";
    selectLabel2 = " Country 2: ";
    selectData2 = countryData;
  } else if (isRegionComparison) {
    selectLabel2 = "Region: ";
    selectData2 = regionsArray;
    selectData3 = [
      { id: "red", itemName: "Red" },
      { id: "white", itemName: "White" },
    ];
    select2Class = "selectCss";
  }
  return (
    <div className={classes.selectrow}>
      {
        COUNTRIES && (
          <>
          <span className={classes.selectLabel}> {selectLabel1} </span>
          <select
            value={selectedItem1}
            className={classes.selectDropdown}
            onChange={(event) => setSelectedItem1(event.target.value)}
          >
            {selectData1.map((dataItem1) => (
              <option
                key={dataItem1.id}
                value={dataItem1.id}
                className={classes.selectOption}
              >
                {dataItem1.itemName.charAt(0).toUpperCase() + dataItem1.itemName.slice(1)}
              </option>
            ))}
          </select>
        </>)
      }
      {/* {COUNTRIES && (
        <>
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
        </>
      )} */}
      <>
        <span className={classes.selectLabel}> {selectLabel2} </span>
        <select
          value={selectedItem2}
          className={select2Class}
          onChange={(event) => setSelectedItem2(event.target.value)}
        >
          {selectData2.map((dataItem2) => (
            <option
              key={dataItem2.id}
              value={dataItem2.id}
              className={classes.selectOption}
            >
              {dataItem2.itemName}
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
            className="selectCss select80"
            onChange={(event) => setSelectedItem3(event.target.value)}
          >
            {selectData3.map((dataItem3) => (
              <option
                key={dataItem3.id}
                value={dataItem3.id}
                className={classes.selectOption}
              >
                {dataItem3.itemName.charAt(0).toUpperCase() +
                  dataItem3.itemName.slice(1)}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default ChartSelectorMulti;
