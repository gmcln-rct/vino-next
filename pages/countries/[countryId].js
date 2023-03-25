import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { getCountryById } from "@/data/country-data";

import Button from "@/components/ui/button";


function CountryDetailPage() {
  const router = useRouter();

  const id = router.query.countryId;
  const country = getCountryById(id);

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
      <title>{country.itemName} Country Index - Winography - Wine Data Visualization</title>
      <meta name="description" content="Data visualization for wine grape area production in {country.itemName }" />
    </Head>
      <Image src={flagImage} alt={flagImageAlt} className="flagImage" width={100} height={75} />
      <h2 className="header">{country.itemName} Country Index</h2>
      <p>Classification: {wineCategory}</p>
      <div >
          <Button link={worldTopTenLink}>World Top 10 Grapes</Button>
          <Button link={nationalTopLink}>Country Top 10 Grapes</Button>
      </div>

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
