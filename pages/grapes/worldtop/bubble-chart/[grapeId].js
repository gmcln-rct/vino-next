import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { getDataItemById } from "@/data/utils";

import { GRAPES_DATA } from "@/data/grape-data";
import {
  GRAPES_RED_TOP_TEN_DATA,
  GRAPES_WHITE_TOP_TEN_DATA,
} from "@/data/grape-top-ten-countries-data-2016";

import BubbleChart from "@/components/charts/bubble-chart";
import Button from "@/components/ui/button";

function GrapeTopCountriesBubblePage() {
  const router = useRouter();
  const id = router.query.grapeId;

  const explanationText = "Wine Production By Country";

  const grape = getDataItemById(id, GRAPES_DATA);

  let wineCategory = "Red";
  if (grape) {
    wineCategory = grape.category === "R" ? "Red" : "White";
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
  if (wineCategory === "Red") {
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
          Winography - Wine Data Visualization
        </title>
        <meta
          name="description"
          content="Wine data visualization for winegrape area production for top national grape varietals"
        />
      </Head>
      <h2 className="indexheader">Top {grape.itemName} Producing Countries</h2>
      <BubbleChart
        itemName={grape.itemName}
        units={grape.units}
        dataYear={grape.dataYear}
        dataType={grape.dataType}
        grapeType={wineCategory}
        redGrapeData={redGrapeWineData.countries}
        whiteGrapeData={whiteGrapeWineData.countries}
        explanationText={explanationText}
      />
      <div>
        <p className="dataSource">
          Data Source:{" "}
          <Link
            href="https://economics.adelaide.edu.au/wine-economics/databases/"
            className="dataSource"
          >
            Wine Economics Research Centre, University of Adelaide
          </Link>
        </p>
      </div>
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
