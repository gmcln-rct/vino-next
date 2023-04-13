import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import classes from "./bubble-chart.module.css";

const BubbleMultiChart = ({ data }) => {
  // const [selectedCountry, setSelectedCountry] = useState("");
  // const [selectedGrape, setSelectedGrape] = useState("");
  console.log("bubble = data", data);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Define dimensions of SVG
    const width = svg.node().getBoundingClientRect().width;
    const height = svg.node().getBoundingClientRect().height;

    // Define data for the bubble chart
    const grapeData = data
      .filter((d) => d.id === selectedCountry)[0]
      .grapeData.filter((d) => d.value !== 0);

    // Define scales for the bubble chart
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    const sizeScale = d3
      .scaleSqrt()
      .domain([0, d3.max(grapeData, (d) => d.value)])
      .range([0, (width / 2) * 0.8]);

    // Create simulation for positioning the bubbles
    const simulation = d3
      .forceSimulation(grapeData)
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "charge",
        d3.forceManyBody().strength((d) => -sizeScale(d.value) * 5)
      )
      .force(
        "collision",
        d3.forceCollide().radius((d) => sizeScale(d.value) + 1)
      )
      .stop();

    // Run the simulation for a few steps to position the bubbles
    for (let i = 0; i < 100; i++) {
      simulation.tick();
    }

    // Draw the bubbles
    const bubbles = svg.selectAll(".bubble").data(grapeData, (d) => d.grape);

    bubbles
      .enter()
      .append("circle")
      .classed("bubble", true)
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", (d) => sizeScale(d.value))
      .style("fill", (d) => colorScale(d.grape));

    bubbles
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", (d) => sizeScale(d.value))
      .style("fill", (d) => colorScale(d.grape));

    bubbles.exit().remove();
  }, [selectedCountry]);

  return (
    <>
      <svg
        ref={svgRef}
        width={600}
        height={600}
        className={classes.chartMain}
        style={{ display: "block" }}
      />
      {/* <p className="chartfooter moveUp">{dataTypeText}</p> */}
    </>
  );
};

export default BubbleMultiChart;
