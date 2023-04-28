import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

import { HISTORIC_PRODUCTION_STACKED_DATA } from "@/data/historic-production-stacked-data";

const StackedAreaChart = () => {
  const svgRef = useRef();
  const tooltipRef = useRef();
  const data = HISTORIC_PRODUCTION_STACKED_DATA;
  const [displayNormalized, setDisplayNormalized] = useState(false);

  const dataTypeText = displayNormalized ? "Production by % of World Production" : "Production in Kiloliters (KL)";

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();
    const margin = { top: 10, right: 30, bottom: 110, left: 60 };
    const width = 600;
    const height = 250;

    if (!data) {
      return <div>Loading...</div>;
    }
    const objArray = Object.keys(data[0]).slice(1);

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height-10}`)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    svg
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width - margin.left - margin.right)
      .attr("height", height - margin.top - margin.bottom)
      .style("fill", "#555454")
      .style("opacity", 0.8);

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.year), d3.max(data, (d) => d.year)])
      .range([0, width - margin.left - margin.right]);

    let yScale;

    // Switch between normalized and absolute values
    if (displayNormalized) {
      yScale = d3
        .scaleLinear()
        .domain([0, 1]) // Update yScale domain for normalization
        .range([height - margin.top - margin.bottom, 0]);
    } else {
      const stackedData = d3.stack().offset(d3.stackOffsetNone).keys(objArray)(data);
      yScale = d3
        .scaleLinear()
        .domain([0, d3.max(stackedData, d => d3.max(d, d => d[1]))])
        .range([height - margin.top - margin.bottom, 0]);
    }

    let stack;

    if (displayNormalized) {
      stack = d3
        .stack()
        .keys(objArray)
        .offset(d3.stackOffsetExpand) // Normalize the data using stackOffsetExpand
        (data);
    } else {
      stack = d3.stack().offset(d3.stackOffsetNone).keys(objArray)(data);
    }

    const area = d3
      .area()
      .x((d) => xScale(d.data.year))
      .y0((d) => yScale(d[0]))
      .y1((d) => yScale(d[1]));

    const colors = d3.scaleOrdinal(d3.schemeSet3);

    svg
      .selectAll("path")
      .data(stack)
      .enter()
      .append("path")
      .attr("fill", (d) => colors(d.key))
      .attr("d", area);

    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));

    let yAxis;

    if (displayNormalized) {
      yAxis = d3.axisLeft(yScale).tickFormat(d3.format(".0%"));
    } else {
      yAxis = d3.axisLeft(yScale);
    }

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .style("color", "white")
      .call(xAxis);
      

    svg
      .append("g")
      .attr("class", "y-axis")
      .style("color", "white")
      .call(yAxis)
      .attr("font-size", "clamp(8px, 0.1vw, 10px)");

    // svg
    //   .append("text")
    //   .attr(
    //     "transform",
    //     `translate(${width / 2.2},${height - margin.bottom / 2 - 30})`
    //   )
    //   .style("text-anchor", "middle")
    //   .style("font-size", "0.7em")
    //   .text("Year");

    // LEGENG
    // Position legend
    const legend = svg
      .append("g")
      .attr("class", "legend")
      .attr(
        "transform",
        `translate(${margin.left - 50},${height - margin.bottom + 20})`
      ); // Increased padding between chart and legend

    const legendItems = legend
      .selectAll(".legend-item")
      .data(objArray)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(${i * 45}, 0)`); // Increased spacing between legend items

    legendItems
      .append("rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", (d) => colors(d));

    // Wrap text in legend to accomodate for two words
    legendItems
      .append("text")
      .attr("x", 20)
      .attr("y", 15)
      .style("fill", "white")
      .html((d) => {
        const words = d.split(" ");
        return `<tspan x="-4" dy="1.4em">${words
          .slice(0, words.length / 2)
          .join(" ")}</tspan><tspan x="-6" dy="1.2em">${words
          .slice(words.length / 2)
          .join(" ")}</tspan>`;
      })

  }, [data, displayNormalized]);

  return (
    <div className="stackedarea" style={{ position: "relative", width: "90%", height: "90%", padding: "0.5rem 1rem 0.5rem", borderRadius: "10px", backgroundColor: "grey" }}>
      <select
        value={displayNormalized}
        className="selectCss center"
        onChange={(e) => setDisplayNormalized(e.target.value === "true")}
      >
        <option value={false}>Absolute Values (KL)</option>
        <option value={true}>Normalized Values (%)</option>
      </select>
      <svg ref={svgRef}></svg>
      <p className="chartfooter moveUp">{dataTypeText}</p>
    </div>
  );
};

export default StackedAreaChart;