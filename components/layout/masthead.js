import React from 'react';
import classes from './masthead.module.css';

const Masthead = ({ headerText }) => {

  const backgroundImage= `/images/homepage-masthead.jpg`;
  return (
    <div className={classes.mastheadContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={classes.mastheadOverlay}>
        {/* <h1 className={classes.mastheadHeader}>{headerText}</h1> */}
        <p className={classes.mastheadText}>Explore the world of wine through data visualizations by grapes, country or historic yearly trends. </p>
      </div>
    </div>
  );
};

Masthead.defaultProps = {
  backgroundImage: `/images/homepage-masthead.jpg`,
  headerText: 'Default Header Text',
};

export default Masthead;
