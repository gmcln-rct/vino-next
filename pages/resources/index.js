import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
      <Image
        src="/images/site-images/resources-bg.jpeg"
        alt="Wine History Timeline"
        className={classes.bgImage}
        width={1280}
        height={1080}
        priority={true}
        // fill="cover"
        // sizes="(max-width: 768px) 100vw,
        // (max-width: 1200px) 155vw,
        // 33vw"
      />
      <section className={classes.resourcesPage}>
        <h1 className="indexheader">Resources Index</h1>
        <Link href="/resources/terms">Wine Terms</Link>
        <Link href="/resources/wine-history-timeline">
          Wine History Timeline
        </Link>
      </section>
    </>
  );
}
