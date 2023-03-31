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
    const margin = { top: 20, right: 30, bottom: 100, left: 60 }; // Updated bottom margin value
    const width = 800;
    const height = 320;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

      svg.append("rect")
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
      .domain([0, d3.max(data, (d) => d3.sum(Object.values(d).slice(1)))])
      .range([height - margin.top - margin.bottom, 0]);

    const stack = d3.stack().keys(objArray)(data);

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
    const yAxis = d3.axisLeft(yScale);

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

    // X-axis label
    // svg
    //   .append("text")
    //   .attr("transform", "rotate(-90)")
    //   .attr("y", 0 - margin.left -10)
    //   .attr("x", 0 - height / 2)
    //   .attr("dy", "1em")
    //   .style("text-anchor", "middle")
    //   .text("Production (KL)");

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

    d3.select(window).on("resize", () => {
      const containerWidth = svgRef.current.getBoundingClientRect().width;
      const containerHeight = svgRef.current.getBoundingClientRect().height;
      svg.attr("width", containerWidth).attr("height", containerHeight);
      xScale.range([0, containerWidth - margin.left - margin.right]);
      yScale.range([containerHeight - margin.top - margin.bottom, 0]);
      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(yAxis);
      svg.selectAll("path").attr("d", area);
    });
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
