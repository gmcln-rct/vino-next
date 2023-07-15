import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { getDataItemById } from "@/data/utils";

import { GRAPES_DATA } from "@/data/grape-data";
import {
  GRAPES_RED_TOP_TEN_DATA,
  GRAPES_WHITE_TOP_TEN_DATA,
} from "@/data/grape-top-ten-countries-data-2016";

import BarChart from "@/components/charts/bar-chart";
import Button from "@/components/ui/button";
import DataSource from "@/components/layout/data-source";

import ChartWrapper from "@/components/charts/chart-wrapper";
import ChartHeader from "@/components/charts/chart-header";
import ChartSelector from "@/components/charts/chart-selector";
import UnitsFooter from "@/components/layout/units-footer";

function GrapeTopDetailPage() {
  const router = useRouter();
  const id = router.query.grapeId;

  const explanationText = "Grape Production By Country";

  const grape = getDataItemById(id, GRAPES_DATA);

  let wineCategory = "red";
  if (grape) {
    wineCategory = grape.category === "R" ? "red" : "white";
  }

  if (!grape || !grape.id) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  let redGrapeWineData;
  let whiteGrapeWineData;
  const dataYear = grape.dataYear;
  if (wineCategory === "red") {
    redGrapeWineData = getDataItemById(id, GRAPES_RED_TOP_TEN_DATA);
    whiteGrapeWineData = { countries: [] };
  } else {
    whiteGrapeWineData = getDataItemById(id, GRAPES_WHITE_TOP_TEN_DATA);
    redGrapeWineData = { countries: [] };
  }

  const headerText = `Top ${grape.itemName} Producing Countries`;
  const subHeaderText = `Winegrape land area used for production, ${grape.dataYear}`;
  // const dataType = grape.dataType;
  const grapeLink = `/grapes/${grape.id}`;
  const bubbleChartLink = `/grapes/worldtop/bubble-chart/${grape.id}`;
  console.log("grape ", grape);

  return (
    <>
      <Head>
        <title>
          {`Top ${grape.itemName} Wine Grape Producing Countries - Winography -
          Wine Data Visualization`}
        </title>
        <meta
          name="description"
          content="Wine data visualization for winegrape area production for top national grape varietals"
        />
      </Head>
      <section className="chartSection">
        <ChartHeader headerText={headerText} subHeaderText={subHeaderText} />
        <BarChart
        itemName={grape.itemName}
        units={grape.units}
        dataYear={grape.dataYear}
        dataType={grape.dataType}
        grapeType={wineCategory}
        redGrapeData={redGrapeWineData.countries}
        whiteGrapeData={whiteGrapeWineData.countries}
        explanationText={explanationText}
      />
        {/* <ChartWrapper
          country={country}
          grape={grape.id}
          countryWineData={countryWineData}
          redGrapeData={redGrapeData}
          whiteGrapeData={whiteGrapeData}
          selectedGrapeType={selectedGrapeType}
          dataType={dataType}
          topType="global"
        /> */}
        <UnitsFooter units="hectares" />
        <DataSource />
        <div className="buttonFooter">
          <Button link={bubbleChartLink} isSecondary="false">
            {grape.itemName} Bubble Chart
          </Button>
          <Button link={grapeLink} isSecondary="true">
            {grape.itemName} Page
          </Button>
        </div>
      </section>
    </>
  );
}

export default GrapeTopDetailPage;
