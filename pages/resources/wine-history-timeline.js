// import React from 'react';

import { useState } from "react";

import classes from "./wine-history-timeline.module.css";

import { WINE_HISTORY_TIMELINE_DATA } from "@/data/wine-history-timeline.data";

function randomKey(year) {
  return year + Math.random();
}
const wineHistoryData = WINE_HISTORY_TIMELINE_DATA.sort(
  (a, b) => a.year - b.year
);

// const [wineHistoryData, setWineHistoryData] = useState(WINE_HISTORY_TIMELINE_DATA);
const WineHistoryTimeline = ({ events }) => {
  return (
    <section className={classes.timeline}>
      <ul >
        {events.map((event) => (
            <li key={randomKey(event.year)}>
              <div className={classes.content}>
                <h2 className={classes.year}>
                 {event.year}
                </h2>
                <p>{event.event}</p>
              </div>
            </li>
        ))}
      </ul>
    </section>
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
