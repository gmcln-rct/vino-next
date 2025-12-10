import React from "react";
import classes from "./masthead.module.css";
import DetailSection from "./detail-section";

const Masthead = ({
  header,
  headerText = "Default Header Text",
  backgroundImage = `/images/site-images/homepage-masthead.jpg`,
  dataType,
  wineCategory,
  itemLink,
  description,
  countryName,
  moreInfo,
}) => {
  const mastheadBackgroundImage = backgroundImage;

  return (
    <div
      className={classes.mastheadContainer}
      style={{ backgroundImage: `url(${mastheadBackgroundImage})` }}
    >
      <div className={classes.mastheadOverlay}>
        {wineCategory && itemLink && description && countryName && moreInfo && (
          <DetailSection
            wineCategory={wineCategory}
            itemLink={itemLink}
            dataType={dataType}
            description={description}
            countryName={countryName}
            moreInfo={moreInfo}
          />
        )}

        {!wineCategory && (
          <>
          <div className={classes.mastheadTextContainer}>
            <h1 className={classes.mastheadHeader}>{header}</h1>
            <p className={classes.mastheadText}>{headerText} </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Masthead;
