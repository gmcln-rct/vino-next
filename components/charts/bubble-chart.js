import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import classes from "./bubble-chart.module.css";

const BubbleChart = (props) => {
  const {
    itemName,
    dataYear,
    dataType,
    grapeType,
    units,
    redGrapeData,
    whiteGrapeData,
    explanationText,
  } = props;

  const svgRef = useRef();

  const dataTypeText = "Units in hectares";

  // Adjust text color based on background color
  function getContrastYIQ(hexcolor) {
    console.log("hexcolor ", hexcolor);
    const red = parseInt(hexcolor.substring(1, 3), 16);
    const green = parseInt(hexcolor.substring(3, 5), 16);
    const blue = parseInt(hexcolor.substring(5, 7), 16);
    const brightness = red * 0.299 + green * 0.587 + blue * 0.114;
    return brightness < 180 ? "white" : "black";
  }

  const [selectedGrapeType, setSelectedGrapeType] = useState(
    grapeType ? grapeType : "red"
  );
  const data = selectedGrapeType === "red" ? redGrapeData : whiteGrapeData;

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = 580;
    const height = 580;

    const color = d3.scaleOrdinal(d3.schemeYlOrRd[5]);

    const pack = (data) =>
      d3.pack().size([width, height]).padding(1.5)(
        d3
          .hierarchy({ children: data })
          .sum((d) => Math.max(d.value, (100 * 100) / Math.PI))
          .sort((a, b) => b.value - a.value)
      );

    const root = pack(data);

    const simulation = d3
      .forceSimulation(root.leaves())
      .force("charge", d3.forceManyBody().strength(1))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collision",
        d3
          .forceCollide()
          .radius((d) => d.r + 1)
          .strength(0.5)
      )
      .force("x", d3.forceX(width / 2).strength(0.1))
      .force("y", d3.forceY(height / 2).strength(0.1));

    const node = svg
      .selectAll("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", (d) => `translate(${d.x},${d.y})`);

    const circles = node
      .append("circle")
      .attr("r", 1) // start small
      .attr("fill", (d) => color(d.data.country))
      .style("padding", "5px")
      .on('click', d => {
        window.open("http://en.wikipedia.org", "_blank")
    });

    circles
      .transition()
      .duration(1000) // grow over 1 second
      .attr("r", (d) => d.r);

    node
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.3em")
      .text((d) => d.data.country)
      .attr("font-size", (d) => `${Math.max(8, d.r / 4)}px`)
      .attr("fill", (d) => {
        let textColor = getContrastYIQ(color(d.data.country));
        return textColor;
      })
      .style("text-wrap", "wrap");

    // Tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "white")
      .style("border", "1px solid black")
      .style("padding", "5px")
      .style("border-radius", "5px")
      .style("font-family", "Open Sans")
      .style("visibility", "hidden");

    node
      .on("mouseover", function (event, d) {
        tooltip
          .style("visibility", "visible")
          .text(
            `${d.data.country}: ${d.data.value.toLocaleString(
              "en-US"
            )} ${units}`
          );
      })
      .on("mousemove", (event) => {
        tooltip
          .style("top", `${event.pageY - 10}px`)
          .style("left", `${event.pageX + 10}px`);
      })
      .on("mouseout", () => {
        tooltip.style("visibility", "hidden");
      });
  }, [data]);

  return (
    <>
      <svg
        ref={svgRef}
        width={600}
        height={600}
        className={classes.chartMain}
        style={{ display: "block" }}
      />
      <p className="chartfooter moveUp">{dataTypeText}</p>
    </>
  );
};

export default BubbleChart;
