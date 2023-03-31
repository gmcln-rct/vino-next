import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

import HISTORIC_PRODUCTION_STACKED_DATA from "@/data/historic-production-stacked-data";


const StackedAreaChart = () => {
  const svgRef = useRef();
  const tooltipRef = useRef();
  
  const data =  HISTORIC_PRODUCTION_STACKED_DATA;

  console.log("data from json: ", data);

  if (!data) {
    return <div>Loading...</div>;
  };
  const objArray = Object.keys(data[0]).slice(1);

  console.log("array of objects: ", objArray);

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 50, left: 60 };
    const width = 800;
    const height = 300;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

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
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .call(xAxis);

    svg.append("g").call(yAxis);

    svg
      .append("text")
      .attr(
        "transform",
        `translate(${width / 2},${height - margin.bottom / 2})`
      )
      .style("text-anchor", "middle")
      .text("Year");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Production (KL)");

    // Create a legend
    const legend = svg
      .append("g")
      .attr("class", "legend")
      .attr(
        "transform",
        `translate(${margin.left},${height - margin.bottom + 20})`
      );

    const legendItems = legend
      .selectAll(".legend-item")
      .data(objArray)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(${i * 80}, 0)`);

    legendItems
      .append("rect")
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", (d) => colors(d));

    legendItems
      .append("text")
      .attr("x", 25)
      .attr("y", 15)
      .text((d) => d);

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
    <div style={{ position: "relative", width: "90%", height: "100%" }}>
      <svg ref={svgRef}></svg>
      <div
        ref={tooltipRef}
        style={{
          display: "none",
          position: "absolute",
          padding: "10px",
          background: "white",
          boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
          zIndex: 9999,
        }}
      ></div>
    </div>
  );
};

export default StackedAreaChart;
