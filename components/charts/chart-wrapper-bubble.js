import { useEffect, useState, useRef } from "react";

import BubbleChart from "./bubble-chart";
import classes from "./chart-wrapper.module.css";

const ChartWrapperBubble = (props) => {
  let currentWidth = window.innerWidth >= 500 ? 500 : 320;
  let currentHeight = window.innerWidth >= 500 ? 500 : 320;
  const containerRef = useRef();
  const [containerSize, setContainerSize] = useState({ width: currentWidth, height: currentHeight });

  const { itemName, units, dataYear, dataType, grapeType, redGrapeData,whiteGrapeData, explanationText } =
    props;

  //   useEffect(() => {
  //   const updateSize = () => {
  //     if (containerRef.current) {
  //       setContainerSize({
  //         width: containerRef.current.offsetWidth > 500 ? 500 : containerRef.current.offsetWidth,
  //         height: window.innerHeight > 500 ? 500 : 320
  //       });
  //     }
  //   };

  //   window.addEventListener("resize", updateSize);
  //   updateSize();

  //   return () => window.removeEventListener("resize", updateSize);
  // }, []);


  return (
    <section className={classes.chartBubbleWrapper} ref={containerRef}>
      <BubbleChart
        containerSize={containerSize}
        units={units}
        dataType={dataType}
        grapeType={grapeType}
        redGrapeData={redGrapeData}
        whiteGrapeData={whiteGrapeData}
      />
    </section>
  );
};

export default ChartWrapperBubble;
