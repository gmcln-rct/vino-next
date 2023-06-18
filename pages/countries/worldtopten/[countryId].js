import { useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";

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

// World Top Grapes

function CountryWorldTopTenDetailPage() {
  const router = useRouter();

  const id = router.query.countryId;

  const country = getDataItemById(id, COUNTRIES_DATA);
  const countryWineData = getDataItemById(id, COUNTRIES_WINE_DATA);


  const [selectedGrapeType, setSelectedGrapeType] = useState("Red");

  const dataType = "country";

  if (!country || !countryWineData) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  const redGrapeData = countryWineData.redGrapeDataGlobal;
  const whiteGrapeData = countryWineData.whiteGrapeDataGlobal;
  const itemName = country.ItemName;
  const dataYear = countryWineData.dataYear;
  const topType = "global";
  const headerSuffix = "Global Top ";
  const explanationText = "Production of global top ";
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
  const nationalTopLink = `/countries/nationaltop/${country.id}`;
  const headDescription = `${country.itemName} production of global top grape varietals bar chart, by land area`;

  return (
    <>
      <Head>
        <title>
          {`${country.itemName} Production of Global Top Grape Varieties -
          Winography | Learn About Wine Through Data Visualizations`}
        </title>
        <meta name="description" content={headDescription} />
      </Head>
      <section className="chartSection">
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
          topType="global"
        />
        <UnitsFooter units="hectares" />
        <DataSource />
        <div className="buttonFooter">
          <Button link={nationalTopLink} isSecondary="false">
            Top Grapes of {country.itemName}
          </Button>
          <Button link={countryLink} isSecondary="true">
            {country.itemName} Country Page
          </Button>
          <Button link="/countries/" isSecondary="true">
            Country Index
          </Button>
        </div>
      </section>
    </>
  );
}

export default CountryWorldTopTenDetailPage;
