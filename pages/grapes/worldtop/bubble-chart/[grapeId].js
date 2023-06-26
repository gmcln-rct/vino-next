import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { getDataItemById } from "@/data/utils";

import { GRAPES_DATA } from "@/data/grape-data";
import {
  GRAPES_RED_TOP_TEN_DATA,
  GRAPES_WHITE_TOP_TEN_DATA,
} from "@/data/grape-top-ten-countries-data-2016";

import ChartWrapperBubble from "@/components/charts/chart-wrapper-bubble";
// import BubbleChart from "@/components/charts/bubble-chart";
import Button from "@/components/ui/button";
import DataSource from "@/components/layout/data-source";


function GrapeTopCountriesBubblePage() {
  const router = useRouter();
  const id = router.query.grapeId;

  const explanationText = "Wine Production By Country";

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

  console.log("grape", grape);
  let redGrapeWineData;
  let whiteGrapeWineData;
  // const dataYear = grape.dataYear;
  if (wineCategory === "red") {
    redGrapeWineData = getDataItemById(id, GRAPES_RED_TOP_TEN_DATA);
    whiteGrapeWineData = { countries: [] };
  } else {
    whiteGrapeWineData = getDataItemById(id, GRAPES_WHITE_TOP_TEN_DATA);
    redGrapeWineData = { countries: [] };
  }

  // const dataType = grape.dataType;
  const grapeLink = `/grapes/${grape.id}`;
  const barChartLink = `/grapes/worldtop/${grape.id}`;

  return (
    <>
      <Head>
        <title>
          Top {grape.itemName} Wine Grape Producing Countries - Bubble Chart -
          Winography | Learn About Wine Through Data Visualizations
        </title>
        <meta
          name="description"
          content="Wine data visualization for winegrape area production for top national grape varietals"
        />
      </Head>
      <h2 className="indexheader">Top {grape.itemName} Producing Countries</h2>
      <ChartWrapperBubble
        itemName={grape.itemName}
        units={grape.units}
        dataYear={grape.dataYear}
        dataType={grape.dataType}
        grapeType={wineCategory}
        redGrapeData={redGrapeWineData.countries}
        whiteGrapeData={whiteGrapeWineData.countries}
        explanationText={explanationText}
      />
      <DataSource />
      <div className="buttonFooter">
        {/* <Button link={grapeLink} isSecondary="true">
          Back to {grape.itemName} Page
        </Button> */}
        <Button link={barChartLink} isSecondary='false'>
          {grape.itemName} Bar Chart
        </Button>
        <Button link="/grapes/" isSecondary="true">
          Grapes Index
        </Button>
      </div>
    </>
  );
}

export default GrapeTopCountriesBubblePage;
