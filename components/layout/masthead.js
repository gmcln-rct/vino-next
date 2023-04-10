import React from 'react';
import classes from './masthead.module.css';
import DetailSection from './detail-section'; 

const Masthead = ({ headerText, backgroundImage, wineCategory, itemLink,description, countryName, moreInfo }) => {

  // let mastheadBackgroundImage = backgroundImage;
  // if (!headerText) {
  //   mastheadBackgroundImage = `/images/site-images/homepage-masthead.jpg`;
  // }

  const mastheadBackgroundImage = backgroundImage || `/images/site-images/homepage-masthead.jpg`;

  return (
    <div className={classes.mastheadContainer} style={{ backgroundImage: `url(${mastheadBackgroundImage})` }}>
      <div className={classes.mastheadOverlay}>
        {wineCategory && itemLink && description && countryName && moreInfo && (
      <DetailSection
        wineCategory={wineCategory}
        itemLink={itemLink}
        description={description}
        countryName={countryName}
        moreInfo={moreInfo}
      />)}

        {!wineCategory && ( <>
        <h1 className={classes.mastheadHeader}>{headerText}</h1> 
        <p className={classes.mastheadText}>Explore the world of wine through data visualizations by grapes, country or historic yearly trends. </p> </>)}

      </div>
    </div>
  );
};

Masthead.defaultProps = {
  backgroundImage: `/images/homepage-masthead.jpg`,
  headerText: 'Default Header Text',
};

export default Masthead;
