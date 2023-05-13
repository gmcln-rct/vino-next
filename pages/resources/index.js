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
        <title>Wine Resources - Winography - Wine Data Visualization</title>
        <meta
          name="description"
          content="Wine resources including wine terminologies and a timeline"
        />
      </Head>
      <Masthead
        backgroundImage="/images/site-images/resources-bg.jpg"
        header="Resources"
        headerText="Learn about wine through wine terminologies and a timeline of important historic milestones."
      />
      <section className="info">
        <h2 className="header"> Wine Resources</h2>
        <div className="actionsContainer">
        <div className="actions">
          <Link href="/resources/terms" className="action__container center">
            <Image
              src="/images/icons/icon-terms.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={100}
              height={100}
            />
            <p className="link">Wine Terminology</p>
          </Link>
        </div>
        <div className="actions">
          <Link href="/resources/wine-history-timeline" className="action__container center">
            <Image
              src="/images/icons/icon-timeline.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={100}
              height={100}
            />
            <p className="link"> Wine Timeline</p>
          </Link>
        </div>
        </div>
      </section>
    </>
  );
}
