import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const data = [
        { year: 1835, France: 2669460, Italy: 0, Portugal: 0, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, "United States": 0, Argentina: 0, Chile: 0, Algeria: 0, "South Africa": 8997 },
        { year: 1836, France: 3139583, Italy: 0, Portugal: 0, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, "United States": 0, Argentina: 0, Chile: 0, Algeria: 0, "South Africa": 9715 },
        { year: 1837, France: 3834476, Italy: 0, Portugal: 0, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, "United States": 0, Argentina: 0, Chile: 0, Algeria: 0, "South Africa": 10536 },
        { year: 1838, France: 2547320, Italy: 0, Portugal: 308900, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, "United States": 0, Argentina: 0, Chile: 0, Algeria: 0, "South Africa": 10427 },
        { year: 1839, France: 2676487, Italy: 0, Portugal: 295700, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, "United States": 472, Argentina: 0, Chile: 0, Algeria: 0, "South Africa": 10999 },
        { year: 1840, France: 2792689, Italy: 0, Portugal: 386800, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, "United States": 0, Argentina: 0, Chile: 0, Algeria: 0, "South Africa": 9212 },
        { year: 1841, France: 3394148, Italy: 0, Portugal: 295700, Spain: 0, Germany: 0, Australia: 0, NewZealand: 0, "United States": 0, Argentina: 0, Chile: 0, Algeria: 0, "South Africa": 12404 },
        { year: 1842, France: 3460890, Italy: 0, Portugal: 318200, Spain: 0, Germany: 204035, Australia: 0, NewZealand: 0, "United States": 0, Argentina: 0, Chile: 0, Algeria: 0, "South Africa": 10650 },
        { year: 1843, France: 1923134, Italy: 0, Portugal: 333400, Spain: 0, Germany: 0, Australia: 131, NewZealand: 0, "United States": 0, Argentina: 0, Chile: 0, Algeria: 0, "South Africa": 7814 },

];

const StackedAreaChart = () => {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);

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


    const stack = d3.stack().keys(["France", "Italy", "Portugal","Spain", "Germany", "Australia", "NewZealand" ])(data);

    const area = d3
      .area()
      .x((d) => xScale(d.data.year))
      .y0((d) => yScale(d[0]))
      .y1((d) => yScale(d[1]));

    const colors = d3
      .scaleOrdinal()
      .domain(["France", "Italy", "Portugal","Spain", "Germany", "Australia", "NewZealand"])
      .range(["#1f77b4", "#ff7f0e", "#2ca02c","#d62728", "#9467bd", "#8c564b", "#e377c2"]);

    svg
      .selectAll("path")
      .data(stack)
      .enter()
      .append("path")
      .attr("fill", (d) => colors(d.key))
      .attr("d", area)
    //   .on("mouseover", (event, d) => {
    //     const country = d.key;
    //     const values = d.data[country];
    //     const year = d3.timeFormat("%Y")(d.data.year);
    //     tooltipRef.current.innerHTML = `${country}: ${values} (${year})`;
    //     tooltipRef.current.style.display = "block";
    //     tooltipRef.current.style.left = `${event.pageX}px`;
    //     tooltipRef.current.style.top = `${event.pageY}px`;
    //   })
    //   .on("mouseout", () => {
    //     tooltipRef.current.style.display = "none";
    //   });
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
      .text("Production (thousand liters)");

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
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
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
