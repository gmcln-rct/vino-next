import Head from "next/head";
import Image from "next/image";
import DetailSection from "@/components/layout/detail-section";
import Button from "@/components/ui/button";
import { COUNTRIES_DATA } from "@/data/country-data";
import { getDataItemById } from "@/data/utils";

export default function CountryDetailPage({ country }) {
  const flagImage = `/images/flags/flag-${country.id}.svg`;
  const flagImageAlt = `Flag of ${country.itemName}`;
  const wineCategory = country.category === "OW" ? "Old World" : "New World";

  const worldTopTenLink = `/countries/worldtopten/${country.id}`;
  const nationalTopLink = `/countries/nationaltop/${country.id}`;

  return (
    <>
      <Head>
        <title>{`${country.itemName} Country Wine Production - Winography | Learn About Wine Through Data Visualizations`}</title>
        <meta
          name="description"
          content={`Data visualization for wine grape area production in ${country.itemName}`}
        />
      </Head>

      <section className="info">
        <Image
          src={flagImage}
          alt={flagImageAlt}
          className="flagImage"
          width={200}
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
