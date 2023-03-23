import classes from "./detail-section.module.css";

const DetailSection = (props) => {
  const { wineCategory, countryLink, countryName, countryRegions } = props;

  let regionList =
    countryRegions.length > 0 ? countryRegions.join(", ") : "No regions listed";

  return (
    <section className={classes.details__container}>
      <div className={classes.details__items}>
        <p>Country: {countryName}</p>
        <p>Classification: <span className={classes.details__data}>{wineCategory}</span></p>
        <p>Regions: <span className={classes.details__data}>{regionList}</span></p>
        <a href={countryLink} target="_blank">
          Read Wikipedia Page in new tab
        </a>
      </div>
    </section>
  );
};

export default DetailSection;
