import { useEffect, useState, useRef } from "react";

import BarChart from "./bar-chart";
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
    } else if (region) {
      dataItem = region;
      dataItem.dataYear=country.dataYear;
      dataItem.units = country.units;
    }

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth > 420 ? containerRef.current.offsetWidth - 150 : 360,
          height: window.innerHeight > 325 ? 325 : window.innerHeight,
        });
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className={classes.chart} ref={containerRef}>
      <BarChart
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
