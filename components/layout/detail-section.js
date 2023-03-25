import classes from "./detail-section.module.css";

const DetailSection = (props) => {
  const { wineCategory, dataType, itemLink, moreInfo } = props;

  let moreInfoListLabel = dataType === "grape" ? "Other Names" : "Regions";

  let moreInfoList =
    moreInfo.length > 0 ? moreInfo.join(", ") : "No items listed";

  return (
    <section className={classes.details__container}>
      <div className={classes.details__items}>
        <p>Classification: {wineCategory}</p>
        <p>{moreInfoListLabel}: {moreInfoList}</p>
        <a href={itemLink} target="_blank">
          Read Wikipedia Page in new tab
        </a>
      </div>
    </section>
  );
};

export default DetailSection;
