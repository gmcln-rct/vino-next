import Head from "next/head";
import Image from "next/image";
import DetailSection from "@/components/layout/detail-section";
import Button from "@/components/ui/button";
import { COUNTRIES_DATA } from "@/data/country-data";
import { getDataItemById } from "@/data/utils";

export default function CountryDetailPage({ country }) {
  const flagImage = `/images/flags/flag-${country.id}.png`;
  const flagImageAlt = `Flag of ${country.itemName}`;
  const wineCategory = country.category === "OW" ? "Old World" : "New World";

  const worldTopTenLink = `/countries/worldtopten/${country.id}`;
  const nationalTopLink = `/countries/nationaltop/${country.id}`;

  // Generate region list for description
  const regionList = country.regions && country.regions.length > 0
    ? country.regions.slice(0, 3).join(", ")
    : "various regions";

  const pageUrl = `https://winography.net/countries/${country.id}/`;
  const description = `Explore ${country.itemName} wine production data with interactive charts. Compare top grape varieties across ${regionList}. ${wineCategory} wine region statistics and trends.`;

  return (
    <>
      <Head>
        <title>{`${country.itemName} Wine Production Data | Winography`}</title>
        <meta
          name="description"
          content={description}
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={`${country.itemName} Wine Production Data | Winography`} />
        <meta property="og:description" content={`Discover ${country.itemName}'s wine production through interactive charts and data visualization.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`https://winography.net${flagImage}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${country.itemName} Wine Production | Winography`} />
        <meta name="twitter:description" content={`${country.itemName} wine grape production data and charts`} />
        <meta name="twitter:image" content={`https://winography.net${flagImage}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dataset",
              "name": `${country.itemName} Wine Production Dataset`,
              "description": `Comprehensive wine grape production data for ${country.itemName}, including regional breakdowns and grape variety statistics.`,
              "url": pageUrl,
              "creator": {
                "@type": "Organization",
                "name": "Winography",
                "url": "https://winography.net"
              },
              "spatialCoverage": {
                "@type": "Place",
                "name": country.itemName,
                "geo": {
                  "@type": "GeoShape",
                  "name": country.itemName
                }
              },
              "keywords": [
                "wine",
                country.itemName,
                "wine production",
                "grape varieties",
                wineCategory,
                ...(country.regions || [])
              ],
              "variableMeasured": "Wine grape production area in hectares",
              "distribution": {
                "@type": "DataDownload",
                "contentUrl": pageUrl
              }
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
                "name": "Countries",
                "item": "https://winography.net/countries/"
              }, {
                "@type": "ListItem",
                "position": 3,
                "name": country.itemName,
                "item": pageUrl
              }]
            })
          }}
        />
      </Head>

      <section className="info">
        <Image
          src={flagImage}
          alt={flagImageAlt}
          className="flagImage"
          width={150}
          height={150}
        />
        <h1 className="header">{country.itemName} Wine Production Data</h1>
        <p className="subheader">Bar Charts</p>
        <div className="actions">
          <Button link={worldTopTenLink}>Global Top Grapes in {country.itemName}</Button>
          <Button link={nationalTopLink}>Top Grapes of {country.itemName}</Button>
        </div>
      </section>

      <DetailSection
        wineCategory={wineCategory}
        itemLink={country.link}
        countryName={country.itemName}
        moreInfo={country.regions}
      />

      <div className="buttonFooter">
        <Button link="/countries/" isSecondary="true">
          Back to Countries Index
        </Button>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = COUNTRIES_DATA.map((country) => ({
    params: { countryId: country.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const country = getDataItemById(params.countryId, COUNTRIES_DATA);

  return { props: { country } };
}
