import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/button";
import Masthead from "@/components/layout/masthead";
import { GRAPES_DATA } from "@/data/grape-data";
import { getDataItemById } from "@/data/utils";

export default function GrapeDetailPage({ grape }) {
  const worldTopLink = "/grapes/worldtop/" + grape.id;
  const worldTopBubbleChartLink = "/grapes/worldtop/bubble-chart/" + grape.id;

  const wineCategory = grape.category === "R" ? "Red" : "White";

  return (
    <>
      <Head>
        <title>
          {grape.itemName} Wine Grape Production - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content={`Data visualization for ${grape.itemName} wine grape area production.`}
        />
      </Head>
      <Masthead
        backgroundImage={grape.imageLink}
        headerText="Winography"
        wineCategory={wineCategory}
        dataType={grape.dataType}
        itemLink={grape.link}
        description={grape.description}
        countryName={grape.itemName}
        moreInfo={grape.altNames}
      />
      <section className="masthead">
        <h2 className="header"> {grape.itemName} Grape Production Data</h2>
        {/* <h3 className="subheader">Top {grape.itemName} Producing Countries:</h3> */}
        <div className="actions">
          <Link href={worldTopLink} className="action__container center">
            <Image
              src="/images/icons/icon-barchart.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={100}
              height={100}
            />
            <p className="link">Bar Chart</p>
          </Link>
          <Link
            href={worldTopBubbleChartLink}
            className="action__container center"
          >
            <Image
              src="/images/icons/icon-bubblechart.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={100}
              height={100}
            />
            <p className="link">Bubble Chart</p>
          </Link>
        </div>
      </section>
      <div className="buttonFooter">
        <Button link="/grapes/" isSecondary="true">
          Back to Grapes Index
        </Button>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = GRAPES_DATA.map((grape) => ({
    params: { grapeId: grape.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const grape = getDataItemById(params.grapeId, GRAPES_DATA);

  return { props: { grape } };
}
