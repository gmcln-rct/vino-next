import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

import classes from "./histogram-chart.module.css"

// DOUBLE HISTOGRAM CHART

const HistogramComparisonChart = ({ data, country1, country2 }) => {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 50, bottom: 20, left: 50 };
    const container = svgRef.current.parentElement;
    const width = container.offsetWidth - margin.left - margin.right;
    const calcHeight = container.offsetHeight - margin.top - margin.bottom;
    const height = calcHeight > 400 ? 400 : calcHeight;

    const yearsArray = data.filter((d) => d.year.toString().slice(3) === "0").map(d => d.year);
    let filteredYears;
    if (width > 768) {
      filteredYears = yearsArray;
    } else if (width > 400) {
      filteredYears = yearsArray.filter((year, index) => (index % 3) === 0 )
    } else {
      filteredYears = [yearsArray[0], yearsArray[Math.ceil(yearsArray.length/2)], yearsArray[yearsArray.length-1]]
    }

    console.log("years array ", filteredYears);

    const svg = d3
      .select(svgRef.current)
      .attr("width", container.offsetWidth)
      .attr("height", container.offsetHeight);

    // Clear the SVG
    svg.selectAll("*").remove();

    // Create new elements
    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Add white background to chart area
    chart
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "white");

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.year))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => Math.max(d[country1], d[country2]))])
      .range([height, 0]);

    const xAxis = d3
      .axisBottom(x)
      .tickFormat((d) => Number(d.toString().slice(0, 3) + "0"))
      .tickValues(filteredYears);

    const yAxis = d3.axisLeft(y).ticks(8).tickSize(-width).tickPadding(10);

    chart
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .style("color", "white")
      .attr("font-size", "clamp(14px, 1.2vw, 18px)");

    chart
      .append("g")
      .call(yAxis)
      .style("color", "white")
      .attr("font-size", "clamp(14px, 1.2vw, 18px)");

    chart
      .selectAll(".tick line")
      .attr("stroke", "lightgray")
      .attr("stroke-width", 0.5);

    // Bars for country 1
    const bars1 = chart
      .selectAll(".bar1")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar1")
      .attr("x", (d) => x(d.year))
      .attr("y", (d) => y(d[country1]))
      .attr("width", x.bandwidth() / 2)
      .attr("height", (d) => height - y(d[country1]))
      .attr("fill", d3.interpolate("#fca5a5", "#B82107")(0.2));

    // Bars for country 2
    const bars2 = chart
      .selectAll(".bar2")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar2")
      .attr("x", (d) => x(d.year) + x.bandwidth() / 2)
      .attr("y", (d) => y(d[country2]))
      .attr("width", x.bandwidth() / 2)
      .attr("height", (d) => height - y(d[country2]))
      .attr("fill", d3.interpolate("#008ac5", "#0b1d78")(0.4));
      // .attr("fill", d3.interpolate("#fde68a", "#e6c612")(0.4));

    // Add legend for country 1
    const legend = chart.append("g").attr("transform", "translate(10, 10)");

    legend
      .append("rect")
      .attr("x", 10)
      .attr("y", 10)
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", d3.interpolate("#fca5a5", "#B82107")(0.2));

    legend.append("text").attr("x", 40).attr("y", 25).text(country1);

    legend
      .append("rect")
      .attr("x", 10)
      .attr("y", 40)
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", d3.interpolate("#008ac5", "#0b1d78")(0.2));

    legend.append("text").attr("x", 40).attr("y", 55).text(country2);

    function resize() {
      const container = svgRef.current.parentElement;
      const width = container.offsetWidth - margin.left - margin.right;
      const height = container.offsetHeight - margin.top - margin.bottom;

      svg
        .attr("width", container.offsetWidth)
        .attr("height", container.offsetHeight);

      x.range([0, width]);
      y.range([height, 0]);

      chart
        .select(".x-axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);

      chart.select(".y-axis").call(yAxis);

      chart
        .selectAll(".bar1")
        .attr("x", (d) => x(d.year))
        .attr("y", (d) => y(d[country1]))
        .attr("width", x.bandwidth() / 2)
        .attr("height", (d) => height - y(d[country1]));

      chart
        .selectAll(".bar2")
        .attr("x", (d) => x(d.year) + x.bandwidth() / 2)
        .attr("y", (d) => y(d[country2]))
        .attr("width", x.bandwidth() / 2)
        .attr("height", (d) => height - y(d[country2]));
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [data, country1, country2]);

  return (
    <section className={classes.chartWrapper}
    >
      <svg ref={svgRef} className={classes.chart}></svg>
    </section>
  );
};

export default HistogramComparisonChart;
