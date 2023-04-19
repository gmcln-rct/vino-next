import React from 'react';
import classes from './masthead.module.css';
import DetailSection from './detail-section'; 

const Masthead = (props) => {

  const { headerText, backgroundImage, dataType, wineCategory, itemLink,description, countryName, moreInfo } = props;
  // let mastheadBackgroundImage = backgroundImage;
  // if (!headerText) {
  //   mastheadBackgroundImage = `/images/site-images/homepage-masthead.jpg`;
  // }
// console.log("wine category: ", wineCategory);
  const mastheadBackgroundImage = backgroundImage || `/images/site-images/homepage-masthead.jpg`;

  return (
    <div className={classes.mastheadContainer} style={{ backgroundImage: `url(${mastheadBackgroundImage})` }}>
      <div className={classes.mastheadOverlay}>
        {wineCategory && itemLink && description && countryName && moreInfo && (
      <DetailSection
        wineCategory={wineCategory}
        itemLink={itemLink}
        dataType={dataType}
        description={description}
        countryName={countryName}
        moreInfo={moreInfo}
      />)}

        {!wineCategory && ( <>
        {/* <h1 className={classes.mastheadHeader}>{headerText}</h1>  */}
        <p className={classes.mastheadText}>{headerText} </p> </>)}

      </div>
    </div>
  );
};

Masthead.defaultProps = {
  backgroundImage: `/images/homepage-masthead.jpg`,
  headerText: 'Default Header Text',
};

export default Masthead;
