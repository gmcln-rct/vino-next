import { useState } from "react";

import Head from "next/head";

import { useRouter } from "next/router";

import { getDataItemById } from "@/data/utils";
import { COUNTRIES_DATA } from "@/data/country-data";
import { COUNTRIES_WINE_DATA } from "@/data/country-wine-data-top-grapes-2016";

import Button from "@/components/ui/button";
import DataSource from "@/components/layout/data-source";
import UnitsFooter from "@/components/layout/units-footer";

import { getHeaders } from "@/components/utils/header-utils";

import ChartWrapper from "@/components/charts/chart-wrapper";
import ChartHeader from "@/components/charts/chart-header";
import ChartSelector from "@/components/charts/chart-selector";

//  NATIONAL TOP GRAPES

function CountryTopTenDetailPage() {
  const router = useRouter();
  console.log("router", router.query.countryId);

  const id = router.query.countryId;
  const country = getDataItemById(id, COUNTRIES_DATA);
  const countryWineData = getDataItemById(id, COUNTRIES_WINE_DATA);
  const redGrapeData = countryWineData.redGrapeDataNational;
  const whiteGrapeData = countryWineData.whiteGrapeDataNational;

  const [selectedGrapeType, setSelectedGrapeType] = useState("Red");

  const dataType = "country";

  if (!country || !countryWineData) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  const itemName = country.ItemName;
  const dataYear = countryWineData.dataYear;
  const topType = "national";
  const headerSuffix = "Top ";
  const explanationText = "Production of ";
  let countryName =
    country.itemName === "United States"
      ? "the " + country.itemName
      : country.itemName;

  const { headerText, subHeaderText } = getHeaders(
    dataType,
    itemName,
    explanationText,
    dataYear,
    selectedGrapeType,
    topType,
    countryName,
    headerSuffix
  );

  const countryLink = `/countries/${country.id}`;
  const globalTopTenLink = `/countries/worldtopten/${country.id}`;
  const headDescription = `Top national grapes of ${country.itemName} production bar chart, by land area`;
  console.log("country", country);
  return (
    <>
      <Head>
        <title>
          {`Top Grapes of ${country.itemName} - Bar Chart - Winography - Wine Data
          Visualization`}
        </title>
        <meta name="description" content={headDescription} />
      </Head>
      <section class="chartSection">
        <ChartHeader headerText={headerText} subHeaderText={subHeaderText} />
        <ChartSelector
          selectedGrapeType={selectedGrapeType}
          setSelectedGrapeType={setSelectedGrapeType}
        />
        <ChartWrapper
          country={country}
          countryWineData={countryWineData}
          redGrapeData={redGrapeData}
          whiteGrapeData={whiteGrapeData}
          selectedGrapeType={selectedGrapeType}
          dataType={dataType}
          topType="national"
        />
        <UnitsFooter units="hectares" />
        <DataSource />
      </section>
      <div class="buttonFooter">
        <Button link={globalTopTenLink} isSecondary="false">
          Global Top Grapes in {country.itemName}{" "}
        </Button>
        <Button link={countryLink} isSecondary="true">
          {country.itemName} Country Page
        </Button>
        <Button link="/countries/" isSecondary="true">
          Country Index
        </Button>
      </div>
    </>
  );
}

export default CountryTopTenDetailPage;
