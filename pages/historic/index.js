import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Masthead from "@/components/layout/masthead";

function HistoricDataIndex() {
  const histogramLink = "/historic/histogram";
  const stackedAreaLink = "/historic/stackedarea";

  return (
    <>
      <Head>
        <title>
          Historic Wine Production Index - Winography - Wine Data Visualization
        </title>
        <meta
          name="description"
          content="Data visualization for all wine-producing countries"
        />
      </Head>
      <>
        <Masthead
          backgroundImage="/images/site-images/index-masthead-historic.jpg"
          header="Historic Data"
          headerText="Learn about how wine production has evolved from the 19th Century to the Present."
        />
        <section className="info">
          <h2 className="header"> Historic Production Data</h2>
          <div className="actions">
            <Link
              href="/historic/histogram-individual"
              className="action__container center tall"
            >
              <Image
                src="/images/icons/icon-histogram-indiv.png"
                className="transparent margin-bottom"
                alt="grapes icon"
                width={100}
                height={100}
              />
              <p className="link">Histogram Chart</p>
            </Link>
            <Link
              href="/historic/histogram-comparison"
              className="action__container center tall"
            >
              <Image
                src="/images/icons/icon-histogram.png"
                className="transparent margin-bottom"
                alt="grapes icon"
                width={100}
                height={100}
              />
              <p className="link">Histogram Comparison Chart</p>
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
              <p className="link">Stacked Area Chart</p>
            </Link>
          </div>
        </section>
      </>
    </>
  );
}

export default HistoricDataIndex;
