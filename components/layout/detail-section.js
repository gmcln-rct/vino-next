import classes from "./detail-section.module.css";

const DetailSection = (props) => {
  const { wineCategory, dataType, description, itemLink, moreInfo } = props;

  let classification = "";
  let moreInfoListLabel = "";
  let moreInfoList = "";
  if(moreInfo && wineCategory) {
   moreInfoListLabel = dataType !== "grape" ? "Other Names" : "Regions";

   moreInfoList =
    moreInfo.length > 0 ? moreInfo.join(", ") : "No items listed";

  classification = wineCategory;
  if (wineCategory === "NW") {
    classification = "New World";
  } else if (wineCategory === "OW") {
    classification = "Old World";
  }
  } else {
      return (
        <div className="center">
          <p>Loading...</p>
        </div>
      );
    }

  // console.log('wineCategory: ', wineCategory)


  return (
    <section className={classes.container}>
      <div className={classes.Items}>
        { description && (<p className={classes.description}>{description}</p>) }
        <p className={classes.data}>Classification: {classification}</p>
        <p className={classes.data}>{moreInfoListLabel}: {moreInfoList}</p>
        <a className={classes.link} href={itemLink} target="_blank">
          Read Wikipedia Page in new tab
        </a>
      </div>
    </section>
  );
};

export default DetailSection;
