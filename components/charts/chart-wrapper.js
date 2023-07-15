import { useEffect, useState, useRef } from "react";

import BarChart2 from "./bar-chart2";
import classes from "./chart-wrapper.module.css";

const ChartWrapper = (props) => {
  const containerRef = useRef();
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const { country, grape, redGrapeData, whiteGrapeData, dataType, selectedGrapeType, topType } =
    props;

    let dataItem = grape;
    if (country) {
      dataItem = country;
    } else if (grape) {
      dataItem = grape;
    }

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: window.innerHeight > 325 ? 325 : window.innerHeight,
        });
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // if (!country || !grape) {
  //   return (
  //     <div className="center">
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }
console.log("chart wrapper - redgrapedata ", redGrapeData);

  return (
    <section className={classes.chart} ref={containerRef}>
      <BarChart2
        itemName={dataItem.itemName}
        units={dataItem.units}
        dataYear={dataItem.dataYear}
        dataType={dataType}
        topType={topType}
        redGrapeData={redGrapeData}
        whiteGrapeData={whiteGrapeData}
        selectedGrapeType={selectedGrapeType}
        containerRef={containerRef}
        containerSize={containerSize}
      />
    </section>
  );
};

export default ChartWrapper;
