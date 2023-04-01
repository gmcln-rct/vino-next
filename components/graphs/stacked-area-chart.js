import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

import { HISTORIC_PRODUCTION_STACKED_DATA } from "@/data/historic-production-stacked-data";

const StackedAreaChart = () => {
  const svgRef = useRef();
  const tooltipRef = useRef();

  const data = HISTORIC_PRODUCTION_STACKED_DATA;

  console.log("data from json: ", data);

  if (!data) {
    return <div>Loading...</div>;
  }
  const objArray = Object.keys(data[0]).slice(1);

  console.log("array of objects: ", objArray);

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();
    const margin = { top: 20, right: 30, bottom: 100, left: 60 };
    const width = 800;
    const height = 320;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    svg
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width - margin.left - margin.right)
      .attr("height", height - margin.top - margin.bottom)
      .style("fill", "#a9a9a9")
      .style("opacity", 0.8);

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.year), d3.max(data, (d) => d.year)])
      .range([0, width - margin.left - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 1]) // Update yScale domain for normalization
      .range([height - margin.top - margin.bottom, 0]);

    const stack = d3
      .stack()
      .keys(objArray)
      .offset(d3.stackOffsetExpand) // Normalize the data using stackOffsetExpand
      (data);

    const area = d3
      .area()
      .x((d) => xScale(d.data.year))
      .y0((d) => yScale(d[0]))
      .y1((d) => yScale(d[1]));

    const colors = d3.scaleOrdinal(d3.schemeSet3);

    // Create country area paths
    const countryAreas = svg
      .selectAll("path")
      .data(stack)
      .enter()
      .append("path")
      .attr("fill", (d) => colors(d.key))
      .attr("d", area);

    // Create country labels
    const midYear = (d3.min(data, (d) => d.year) + d3.max(data, (d) => d.year)) / 2;
  
    countryAreas.each(function (d) {
      const path = d3.select(this);
      const pathBounds = path.node().getBBox();
      const countryName = d.key;
      const fontSize = Math.sqrt(pathBounds.height) * 0.5; // Adjust font size based on area height
    
      // Find the index of the middle data point
      const middleIndex = Math.floor(data.length / 2);
    
      // Calculate the y-coordinate for the label
      const labelY = yScale((d[middleIndex][1] + d[middleIndex][0]) / 2);
    
      svg
        .append("text")
        .attr("class", "country-label")
        .attr("x", xScale(data[middleIndex].year))
        .attr("y", labelY)
        .attr("dy", "0.35em") // Adjust vertical alignment
        .style("text-anchor", "middle")
        .style("font-size", `${fontSize}px`)
        .text(countryName);
    });
    
    // const colors = d3.scaleOrdinal(d3.schemeSet3);

    svg
      .selectAll("path")
      .data(stack)
      .enter()
      .append("path")
      .attr("fill", (d) => colors(d.key))
      .attr("d", area);

    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
    const yAxis = d3.axisLeft(yScale).tickFormat(d3.format(".0%"));

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .call(xAxis);

    svg.append("g").attr("class", "y-axis").call(yAxis);

    svg
      .append("text")
      .attr(
        "transform",
        `translate(${width / 2.2},${height - margin.bottom / 2 - 30})`
      )
      .style("text-anchor", "middle")
      .style("font-size", "0.8em")
      .text("Year");

 
    // Create a legend
    const legend = svg
      .append("g")
      .attr("class", "legend")
      .attr(
        "transform",
        `translate(${margin.left},${height - margin.bottom + 30})`
      ); // Increased padding between chart and legend

    const legendItems = legend
      .selectAll(".legend-item")
      .data(objArray)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(${i * 50}, 0)`); // Increased spacing between legend items

    legendItems
      .append("rect")
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", (d) => colors(d));

    legendItems
      .append("text")
      .attr("x", 20)
      .attr("y", 20)
      .html((d) => {
        const words = d.split(" ");
        return `<tspan x="0" dy="1.4em">${words
          .slice(0, words.length / 2)
          .join(" ")}</tspan><tspan x="0" dy="1.4em">${words
          .slice(words.length / 2)
          .join(" ")}</tspan>`;
      })
      .attr("margin-top", 10);

  }, []);

  return (
    <div style={{ position: "relative", width: "90%", height: "90%" }}>
      <svg ref={svgRef}></svg>
      <div ref={tooltipRef} className="tooltip">
        Production in KL
      </div>
      <br />
      <p className="center">Wine production in Kiloliters(KL)</p>
    </div>
  );
};

export default StackedAreaChart;
