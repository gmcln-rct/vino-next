
import Head from "next/head";

import classes from "./wine-history-timeline.module.css";

import { WINE_HISTORY_TIMELINE_DATA } from "@/data/wine-history-timeline.data";

function randomKey(year) {
  return year + Math.random();
}
const wineHistoryData = WINE_HISTORY_TIMELINE_DATA.sort(
  (a, b) => a.year - b.year
);

const WineHistoryTimeline = ({ events }) => {
  return (
    <>
      <Head>
        <title>
          Wine History Timeline - Winography | Learn About Wine Through Data Visualizations
        </title>
        <meta
          name="description"
          content="A timeline of important historic milestones in wine history"
        />
      </Head>

      <section className={classes.timeline}>
        <h1 className={classes.title}>Wine History Timeline</h1>
        <ul>
          {events.map((event) => (
            <li key={randomKey(event.year)}>
              <div className={classes.content}>
                <h2 className={classes.year}>{event.year}</h2>
                <p>{event.event}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
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
