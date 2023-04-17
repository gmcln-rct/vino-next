// import React from 'react';

import {useState } from 'react';

import classes from './wine-history-timeline.module.css';

import { WINE_HISTORY_TIMELINE_DATA } from '@/data/wine-history-timeline.data';

function randomKey(year) {
  return year + Math.random();
}
const wineHistoryData = WINE_HISTORY_TIMELINE_DATA;

// const [wineHistoryData, setWineHistoryData] = useState(WINE_HISTORY_TIMELINE_DATA);
const WineHistoryTimeline = ({ events }) => {
    // console.log("wine history timeline events",  WINE_HISTORY_TIMELINE_DATA);
    return (
      <div className={classes.timeline}>
        {events.map((event) => (
          <div className={classes.event} key={randomKey(event.year)}>
            <div className={classes.year}>{event.year}</div>
            <div className="timeline-description">{event.event}</div>
          </div>
        ))}
      </div>
    );
  };
  
  export default WineHistoryTimeline;
  
  export async function getStaticProps() {
    return {
      props: {
        events: wineHistoryData,
      },
    };
  }