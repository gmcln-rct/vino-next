import classes from "./units-footer.module.css";

const UnitsFooter = (props) => {
  const { units, dataYear, isGlobalChart } = props;
  
  // For global charts, show the full subtitle instead of just units
  if (isGlobalChart && dataYear) {
    return (
      <>
        <p className={classes.units}>Land area in {units}, {dataYear}</p>
      </>
    );
  }
  
  return (
    <>
      <p className={classes.units}>Units in {units}</p>
    </>
  );
};

export default UnitsFooter;
