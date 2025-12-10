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

  const wineCategory = grape.category === "R" ? "red" : "white";
  const wineType = grape.category === "R" ? "Red" : "White";
  const pageUrl = `https://winography.net/grapes/${grape.id}/`;

  // Create enhanced description from grape data
  const shortDescription = grape.description.substring(0, 120);
  const description = `${grape.itemName} ${wineType.toLowerCase()} wine grape production data. ${shortDescription}... View global charts and country-specific statistics.`;

  return (
    <>
      <Head>
        <title>{`${grape.itemName} Wine Grape Production Data | Winography`}</title>
        <meta
          name="description"
          content={description}
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={`${grape.itemName} Wine Grape Production | Winography`} />
        <meta property="og:description" content={`${grape.itemName} ${wineType.toLowerCase()} wine grape production data with interactive charts showing global distribution.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`https://winography.net${grape.imageLink}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${grape.itemName} Wine Grape | Winography`} />
        <meta name="twitter:description" content={`${grape.itemName} production data and charts`} />
        <meta name="twitter:image" content={`https://winography.net${grape.imageLink}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dataset",
              "name": `${grape.itemName} Wine Grape Production Dataset`,
              "description": grape.description,
              "url": pageUrl,
              "identifier": grape.id,
              "creator": {
                "@type": "Organization",
                "name": "Winography",
                "url": "https://winography.net"
              },
              "keywords": [
                grape.itemName,
                "wine grape",
                wineType,
                "wine production",
                "viticulture",
                "grape varieties",
                ...(grape.altNames || [])
              ],
              "variableMeasured": `${grape.itemName} grape production area in ${grape.units}`,
              "temporalCoverage": grape.dataYear ? grape.dataYear.toString() : "2016",
              "distribution": {
                "@type": "DataDownload",
                "encodingFormat": "text/html",
                "contentUrl": pageUrl
              },
              "license": "https://creativecommons.org/licenses/by/4.0/"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://winography.net/"
              }, {
                "@type": "ListItem",
                "position": 2,
                "name": "Grapes",
                "item": "https://winography.net/grapes/"
              }, {
                "@type": "ListItem",
                "position": 3,
                "name": grape.itemName,
                "item": pageUrl
              }]
            })
          }}
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
      <section className="info">
        <h2 className="header"> {grape.itemName} Grape Production Data</h2>
        <div className="actions">
          <Link href={worldTopLink} className="action__link center">
            <Image
              src="/images/icons/icon-barchart.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={100}
              height={100}
            />
            <p className="link">Bar Chart</p>
          </Link>
          <Link href={worldTopBubbleChartLink} className="action__link center">
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
          Grapes Index
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
