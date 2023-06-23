import classes from "./chart-selector.module.css";

const ChartSelector = ({ selectedGrapeType, setSelectedGrapeType }) => {
    return (
      <>
        <select
          className={classes.selectDropdown}
          value={selectedGrapeType}
          onChange={(event) => setSelectedGrapeType(event.target.value)}
        >
          <option value="red">Red Grapes</option>
          <option value="white">White Grapes</option>
        </select>
      </>
    );
  };
  
  export default ChartSelector;