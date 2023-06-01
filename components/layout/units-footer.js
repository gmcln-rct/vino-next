import classes from "./units-footer.module.css";

const UnitsFooter = (props) => {
  const { units } = props;
  return (
    <>
      <p className={classes.units}>Units in {units}</p>
    </>
  );
};

export default UnitsFooter;
