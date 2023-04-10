import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { getDataItemById } from "@/data/utils";
import { GRAPES_DATA } from "@/data/grape-data";

import DetailSection from "@/components/layout/detail-section";
import Button from "@/components/ui/button";
import Masthead from "@/components/layout/masthead";

function GrapeDetailPage() {
  const router = useRouter();
  const id = router.query.grapeId;
  const grape = getDataItemById(id, GRAPES_DATA);

  const worldTopLink = "/grapes/worldtop/" + id;

  const worldTopBubbleChartLink = "/grapes/worldtop/bubble-chart/" + id;

  if (!grape || !grape.id) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

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
          content="Data visualization for {grape.itemName} wine grape area production."
        />
      </Head>
      <Masthead
        backgroundImage={grape.imageLink}
        headerText="Winography"
        wineCategory={wineCategory}
        itemLink={grape.link}
        description={grape.description}
        countryName={grape.itemName}
        moreInfo={grape.altNames}
      />
      <section className="masthead">
        <h2 className="header"> {grape.itemName} Grape Production Data</h2>
        <h3 className="subheader">Top {grape.itemName} Producing Countries:</h3>
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
      {/* <DetailSection
        wineCategory={wineCategory}
        itemLink={grape.link}
        description={grape.description}
        countryName={grape.itemName}
        moreInfo={grape.altNames}
      /> */}

      <div className="buttonFooter">
        <Button link="/grapes/" isSecondary="true">
          Back to Grapes Index
        </Button>
      </div>
    </>
  );
}

export default GrapeDetailPage;
