import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { getCountryById } from "@/data/country-data";


function CountryDetailPage() {
  const router = useRouter();
  // console.log('router', router.query)

  const id = router.query.countryId;

  // const countryWineData = getDataItemById(id, COUNTRIES_WINE_DATA);
  // const { pageId } = router.query;

  const country = getCountryById(id);
  console.log("country", country);

  if (!country) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  const flagImage = `/images/flags/flag-${country.id}.svg`;
  const flagImageAlt = `Flag of ${country.itemName}`;
  const wineCategory = country.category === "OW" ? "Old World" : "New World";

  return (
    <>
    <Head>
      <title>{country.itemName} Country Index - Winography - Wine Data Visualization</title>
      <meta name="description" content="Data visualization for wine grape area production in {country.itemName }" />
    </Head>
      <Image src={flagImage} alt={flagImageAlt} width={100} height={75} />
      <h2 className="header">{country.itemName} Country Index</h2>
      <p>Classification: {wineCategory}</p>
      {/* <BarChart
        itemName={country.itemName}
        units={countryWineData.units}
        dataYear={countryWineData.dataYear}
        dataType="country"
        redGrapeData={countryWineData.redGrapeData}
        whiteGrapeData={countryWineData.whiteGrapeData}
      />
      <DetailSection
        wineCategory={wineCategory}
        itemLink={country.link}
        countryName={country.itemName}
        moreInfo={country.regions}
      />
      <div>
        <p>Data as of {countryWineData.dataYear}</p>
      </div> */}
    </>
  );
}

export default CountryDetailPage;
