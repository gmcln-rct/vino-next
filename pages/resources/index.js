import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Masthead from "@/components/layout/masthead";
import Button from "@/components/ui/button";

import classes from "./index.module.css";

export default function ResourcesIndex({ topGrapes }) {
  return (
    <>
      <Head>
        <title>Grapes Index - Winography - Wine Data Visualization</title>
        <meta
          name="description"
          content="Data visualization of grape wine production for all wine-producing countries"
        />
      </Head>
      {/* <Image
        src="/images/site-images/resources-bg.jpeg"
        alt="Wine History Timeline"
        className={classes.bgImage}
        width={1280}
        height={1080}
        priority={true}
      /> */}
            <Masthead
        backgroundImage="/images/site-images/resources-bg.jpeg"
        header="Resources"
        headerText="Learn about wine through tools like a searchable wine terms list and a historic timeline of important milestones in the history of wine."
      />
      <section className={classes.resourcesPage}>
        {/* <h1 className="indexheader">Resources Index</h1> */}

        <div className="actions">
          <Button link="/resources/terms">Wine Terms</Button>
          <Button link="/resources/wine-history-timeline">Wine History Timeline</Button>
        </div>
        {/* <Link href="/resources/terms">Wine Terms</Link>
        <Link href="/resources/wine-history-timeline">
          Wine History Timeline
        </Link> */}
      </section>
    </>
  );
}
