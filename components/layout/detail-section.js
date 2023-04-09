import classes from "./detail-section.module.css";

const DetailSection = (props) => {
  const { wineCategory, dataType, description, itemLink, moreInfo } = props;

  let moreInfoListLabel = dataType !== "grape" ? "Other Names" : "Regions";

  let moreInfoList =
    moreInfo.length > 0 ? moreInfo.join(", ") : "No items listed";

  let classification = wineCategory;

  console.log('wineCategory: ', wineCategory)

  if (wineCategory === "NW") {
    classification = "New World";
  } else if (wineCategory === "OW") {
    classification = "Old World";
  }

  return (
    <section className={classes.details__container}>
      <div className={classes.details__items}>
        { description && (<p>Description: {description}</p>) }
        <p>Classification: {classification}</p>
        <p>{moreInfoListLabel}: {moreInfoList}</p>
        <a href={itemLink} target="_blank">
          Read Wikipedia Page in new tab
        </a>
      </div>
    </section>
  );
};

export default DetailSection;
