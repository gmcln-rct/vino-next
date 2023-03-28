import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { getDataItemById } from "@/data/utils";
import { COUNTRIES_DATA } from "@/data/country-data";

import DetailSection from "@/components/layout/detail-section";
import Button from "@/components/ui/button";

function CountryDetailPage() {
  const router = useRouter();

  const id = router.query.countryId;
  const country = getDataItemById(id, COUNTRIES_DATA);

  if (!country || !country.id) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  const flagImage = `/images/flags/flag-${country.id}.svg`;
  const flagImageAlt = `Flag of ${country.itemName}`;
  const wineCategory = country.category === "OW" ? "Old World" : "New World";

  const worldTopTenLink = `/countries/worldtopten/${id}`;
  const nationalTopLink = `/countries/nationaltop/${id}`;

  return (
    <>
      <Head>
        <title>
          {country.itemName} Country Wine Production - Winography - Wine Data
          Visualization
        </title>
        <meta
          name="description"
          content="Data visualization for wine grape area production in {country.itemName }"
        />
      </Head>

      <section className="masthead">
        <Image
          src={flagImage}
          alt={flagImageAlt}
          className="flagImage"
          width={100}
          height={75}
        />
        <h2 className="countryHeader">{country.itemName} Wine Production Data</h2>
        <div className="actions">
          <Button link={worldTopTenLink}>World Top Grapes</Button>
          <Button link={nationalTopLink}>Country Top Grapes</Button>
        </div>
      </section>

      {/* <BarChart
        itemName={country.itemName}
        units={countryWineData.units}
        dataYear={countryWineData.dataYear}
        dataType="country"
        redGrapeData={countryWineData.redGrapeData}
        whiteGrapeData={countryWineData.whiteGrapeData}
      /> */}
      <DetailSection
        wineCategory={wineCategory}
        itemLink={country.link}
        countryName={country.itemName}
        moreInfo={country.regions}
      />
    </>
  );
}

export default CountryDetailPage;
