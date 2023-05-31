import classes from "./chart-selector.module.css";

const ChartSelector = ({ selectedGrapeType, setSelectedGrapeType }) => {
    return (
      <>
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
  
  export default ChartSelector;