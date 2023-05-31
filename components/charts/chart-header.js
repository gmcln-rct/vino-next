import classes from "./chart-header.module.css";

const ChartHeader = (props) => {
  const { headerText, subHeaderText } = props;
  return (
    <>
      <h2 className={classes.header}>{headerText}</h2>
      <p className={classes.subheader}>{subHeaderText}</p>
    </>
  );
};

export default ChartHeader;
