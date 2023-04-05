import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const HistogramChart = ({ data, country1, country2, year }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Define the chart's dimensions
    const width = svg.node().getBoundingClientRect().width;
    const height = svg.node().getBoundingClientRect().height;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Define the scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.year))
      .range([0, chartWidth])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max([
          data.find((d) => d.year === year)[country1],
          data.find((d) => d.year === year)[country2],
        ]),
      ])
      .range([chartHeight, 0]);

    // Define the axes
    const xAxis = d3.axisBottom(xScale);

    const yAxis = d3.axisLeft(yScale).ticks(5);

    // Render the axes
    svg
      .select(".x-axis")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(xAxis);

    svg.select(".y-axis").call(yAxis);

    // Create the bars
    svg
      .select(".bars")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => yScale(d[country1]))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => chartHeight - yScale(d[country1]))
      .attr("fill", "#69b3a2")
      .on("mouseover", function () {
        d3.select(this).attr("fill", "#ff8c00");
      })
      .on("mouseout", function () {
        d3.select(this).attr("fill", "#69b3a2");
      });

    svg
      .select(".bars")
      .selectAll(".bar2")
      .data(data)
      .join("rect")
      .attr("class", "bar2")
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => yScale(d[country2]))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => chartHeight - yScale(d[country2]))
      .attr("fill", "#404080")
      .on("mouseover", function () {
        d3.select(this).attr("fill", "#ff8c00");
      })
      .on("mouseout", function () {
        d3.select(this).attr("fill", "#404080");
      });
  }, [data, country1, country2, year]);

  return (
    <svg ref={svgRef}>
      <g className="x-axis" />
      <g className="y-axis" />
      <g
        className="
bars"
      />
    </svg>
  );
};

export default HistogramChart;
