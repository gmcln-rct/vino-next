import { useEffect, useState, useRef } from "react";

import BubbleChart from "./bubble-chart";
import classes from "./chart-wrapper.module.css";

const ChartWrapperBubble = (props) => {
  const containerRef = useRef();
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const { itemName, units, dataYear, dataType, grapeType, redGrapeData,whiteGrapeData, explanationText } =
    props;

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: window.innerHeight > 350 ? 350 : window.innerHeight,
        });
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);


  return (
    <section className={classes.chart} ref={containerRef}>
      <BubbleChart
        itemName={itemName}
        containerSize={containerSize}
        units={units}
        dataYear={dataYear}
        dataType={dataType}
        grapeType={grapeType}
        redGrapeData={redGrapeData}
        whiteGrapeData={whiteGrapeData}
        explanationText={explanationText}
      />
    </section>
  );
};

export default ChartWrapperBubble;
