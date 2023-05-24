import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Masthead from "@/components/layout/masthead";

function HistoricDataIndex() {
  const histogramLink = "/historic/histogram";
  const stackedAreaLink = "/historic/stackedarea";

  const infoClass = "info alt";

  return (
    <>
      <Head>
        <title>
          Historic Wine Production Index - Winography | Learn About Wine Through Data Visualizations
        </title>
        <meta
          name="description"
          content="Data visualization for all wine-producing countries"
        />
      </Head>
      <>
        <Masthead
          backgroundImage="/images/site-images/index-masthead-historic.jpg"
          header="Wine Through the Ages"
          headerText="Embark on a historic adventure that reveals the dynamic shifts in wine production and consumption from the 19th century to today's trends."
        />
        <section className="info">
          <h2 className="header"> Historic Production Charts</h2>
          <div className="actions">
            <Link
              href="/historic/histogram-individual-production"
              className="action__container center tall"
            >
              <Image
                src="/images/icons/icon-histogram-indiv.png"
                className="transparent margin-bottom"
                alt="grapes icon"
                width={100}
                height={100}
              />
              <p className="link">Histogram Individual</p>
            </Link>
            <Link
              href="/historic/histogram-comparison-production"
              className="action__container center tall"
            >
              <Image
                src="/images/icons/icon-histogram-comp.png"
                className="transparent margin-bottom"
                alt="grapes icon"
                width={100}
                height={100}
              />
              <p className="link">Comparative Histogram</p>
            </Link>
            <Link
              href="/historic/stackedarea"
              className="action__container center tall"
            >
              <Image
                src="/images/icons/icon-stackedarea.png"
                className="transparent margin-bottom"
                alt="grapes icon"
                width={100}
                height={100}
              />
              <p className="link">Comparative Stacked</p>
            </Link>
          </div>
        </section>
        <section className={infoClass}>
          <h2 className="header">Historic Consumption Charts</h2>
          <div className="actions">
            <Link
              href="/historic/histogram-individual-consumption"
              className="action__container center tall"
            >
              <Image
                src="/images/icons/icon-histogram-indiv.png"
                className="transparent margin-bottom"
                alt="National Wine Consumption Histogram"
                width={100}
                height={100}
              />
              <p className="link">Individual Country Histogram</p>
            </Link>
            <Link
              href="/historic/histogram-comparison-consumption"
              className="action__container center tall"
            >
              <Image
                src="/images/icons/icon-histogram-comp.png"
                className="transparent margin-bottom"
                alt="Wine Consumption Nation Comparison Histogram"
                width={100}
                height={100}
              />
              <p className="link">Comparing Countries Histogram</p>
            </Link>
            <Link
              href="/historic/histogram-indiv-consumption-per-capita"
              className="action__container center tall"
            >
              <Image
                src="/images/icons/icon-histogram-indiv.png"
                className="transparent margin-bottom"
                alt="Per Capita Wine Consumption Histogram"
                width={100}
                height={100}
              />
              <p className="link">Country Per Capita Histogram</p>
            </Link>
            <Link
              href="/historic/histogram-comp-consumption-per-capita"
              className="action__container center tall"
            >
              <Image
                src="/images/icons/icon-histogram-comp.png"
                className="transparent margin-bottom"
                alt="Per Capita Wine Consumption Histogram"
                width={100}
                height={100}
              />
              <p className="link">Per Capita Comparative Histogram</p>
            </Link>
          </div>
        </section>
      </>
    </>
  );
}

export default HistoricDataIndex;
