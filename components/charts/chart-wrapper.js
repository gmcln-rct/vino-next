import { useEffect, useState, useRef } from "react";

import BarChartTwoValues from "./bar-chart2";
import classes from "./chart-wrapper.module.css";

const ChartWrapper = (props) => {
  const containerRef = useRef();
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const { country, redGrapeData, whiteGrapeData, dataType, selectedGrapeType, topType } =
    props;

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


  return (
    <section className={classes.chart} ref={containerRef}>
      <BarChartTwoValues
        itemName={country.itemName}
        units={country.units}
        dataYear={country.dataYear}
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
