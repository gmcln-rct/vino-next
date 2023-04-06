import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Button from "@/components/ui/button";

import HISTORIC_PRODUCTION_STACKED_DATA from "@/data/historic-production-stacked-data";

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
      <section className="masthead">
        <h2 className="header"> Historic Production Data</h2>
        <div className="actions">
          <Link href="/historic/histogram" className="action__container center">
            <Image
              src="/images/icons/icon-histogram.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={100}
              height={100}
            />
            <p className="link">Histogram Chart</p>
          </Link>
          <Link
            href="/historic/stackedarea"
            className="action__container center"
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
          {/* <div className="actions">
          <Button link={histogramLink}>Histogram Chart</Button>
          <Button link={stackedAreaLink}>Stacked Area Chart</Button>
        </div> */}
        </div>
      </section>
    </>
  );
}

export default HistoricDataIndex;
