import { useEffect, useState, useRef, useLayoutEffect } from "react";

const ChartWrapper = ({ events }) => {

    const containerRef = useRef();
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () => {
          if (containerRef.current) {
            setContainerSize({
              width: containerRef.current.offsetWidth,
              height: Math.min(containerRef.current.offsetHeight, window.innerHeight * 0.8),
            });
          }
        };
    
        window.addEventListener("resize", updateSize);
        updateSize();
    
        return () => window.removeEventListener("resize", updateSize);
      }, []);
    return (
        <section className={classes.chart} ref={containerRef}>

        </section>
    );
};

export default ChartWrapper;