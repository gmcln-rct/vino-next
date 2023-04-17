// import React from 'react';

import {useState } from 'react';

import { WINE_HISTORY_TIMELINE_DATA } from '@/data/wine-history-timeline.data';


const wineHistoryData = WINE_HISTORY_TIMELINE_DATA;

// const [wineHistoryData, setWineHistoryData] = useState(WINE_HISTORY_TIMELINE_DATA);
const WineHistoryTimeline = ({ events }) => {
    console.log("wine history timeline events",  WINE_HISTORY_TIMELINE_DATA);
    return (
      <div className="timeline">
        {events.map((event) => (
          <div className="timeline-event" key={event.year}>
            <div className="timeline-year">{event.year}</div>
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