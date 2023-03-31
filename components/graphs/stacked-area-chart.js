import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

import { HISTORIC_PRODUCTION_STACKED_DATA } from "@/data/historic-production-stacked-data";

const data = HISTORIC_PRODUCTION_STACKED_DATA;

const StackedAreaChart = () => {
  const svgRef = useRef();
  const objArray = Object.keys(data[0]).slice(1);
  const [startYear, setStartYear] = useState(d3.min(data, (d) => d.year));
  const [endYear, setEndYear] = useState(d3.max(data, (d) => d.year));
  

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 100, left: 60 };
    const width = 800;
    const height = 400;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create background for chart
    svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width - margin.left - margin.right)
      .attr("height", height - margin.top - margin.bottom)
      .style("fill", "#f9f9f9")
      .style("opacity", 0.8);

    const filteredData = data.filter(d => d.year >= startYear && d.year <= endYear);

    const xScale = d3
      .scaleLinear()
      .domain([d3.min(filteredData, (d) => d.year), d3.max(filteredData, (d) => d.year)])
      .range([0, width - margin.left - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(filteredData, (d) => d3.sum(Object.values(d).slice(1)))])
      .range([height - margin.top - margin.bottom, 0]);

    const stack = d3.stack().keys(objArray)(filteredData);

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
      .text("Production (thousand liters)");

    // Add legend
    const legend = svg.append("g")
      .attr("class", "legend")
      .attr("transform", `translate(${width - margin.right - 80}, ${height - margin.bottom + 20})`);

    const legendItemHeight = 20;

    legend.selectAll("rect")
      .data(objArray)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * legendItemHeight)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", (d) => colors(d));

    legend.selectAll("text")
      .data(objArray)
      .enter()
      .append("text")
      .attr("x", 15)
      .attr("y", (d, i) => i * legendItemHeight + 9)
      .attr("dy", ".35em")
      .text((d) => d);

    // Add select dropdowns and submit button
    const rangeSelector = d3.select(svgRef.current.parentNode)
      .append("div")
      .style("display", "flex")
      .style("align-items", "center")
      .style("margin-top", "10px");

    const startYearSelector = rangeSelector
      .append("select")
      .style("margin-right", "10px")
      .on("change", (event) => {
        const selectedYear = +event.target.value;
        setStartYear(selectedYear);
      });

    const endYearSelector = rangeSelector
      .append("select")
      .style("margin-right", "10px")
      .on("change", (event) => {
        const selectedYear = +event.target.value;
        setEndYear(selectedYear);
      });

    const startYearOptions = startYearSelector
      .selectAll("option")
      .data(d3.range(d3.min(data, (d) => d.year), d3.max(data, (d) => d.year) + 1))
      .join("option")
      .attr("value", (d) => d)
      .text((d) => d)
      .property("selected", (d) => d === startYear);

    const endYearOptions = endYearSelector
      .selectAll("option")
      .data(d3.range(d3.min(data, (d) => d.year), d3.max(data, (d) => d.year) + 1))
      .join("option")
      .attr("value", (d) => d)
      .text((d) => d)
      .property("selected", (d) => d === endYear);

    const submitButton = rangeSelector
      .append("button")
      .text("Update")
      .on("click", () => {
        const startYear = +startYearSelector.property("value");
        const endYear = +endYearSelector.property("value");
        setStartYear(startYear);
        setEndYear(endYear);
      });


  }, [startYear, endYear]);

  return (
    <div style={{ position: "relative", width: "90%", height: "90%" }}>
      <svg ref={svgRef}></svg>
      {/* <div ref={tooltipRef} className="tooltip">
        Production in KL
      </div> */}
      <br />
      <p className="center">Wine production in Kiloliters(KL)</p>
    </div>
  );
};

export default StackedAreaChart;
