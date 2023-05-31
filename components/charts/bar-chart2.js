import { useEffect, useState, useRef, useLayoutEffect } from "react";
import classes from "./bar-chart.module.css";

import * as d3 from "d3";


const BarChart2 = (props) => {
  const svgRef = useRef();
  const yAxisLabelRef = useRef();

  const {
    dataType,
    units,
    redGrapeData,
    whiteGrapeData,
    containerRef,
    containerSize,
    selectedGrapeType,
  } = props;

  const yAxisLabel = units;

  const selectedData =
    selectedGrapeType === "Red" ? redGrapeData : whiteGrapeData;
  const fillColor = selectedGrapeType === "Red" ? "#B03E3E" : "#A19F18";

  const data = selectedData.filter((d) => d.value > 0);

  useEffect(() => {
    if (
      !containerRef.current ||
      containerSize.width === 0 ||
      containerSize.height === 0
    ) {
      return;
    }

    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 20, right: 20, bottom: 50, left: 10 };

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    // Use width and height from the container size
    const width =
      containerSize.width > windowWidth * 0.8
        ? windowWidth * 0.8
        : containerSize.width;
    const height =
      containerSize.height > windowHeight * 0.7
        ? windowHeight * 0.7
        : containerSize.height;
    const labelMargin = (-margin.left)-85;
    const viewBoxWidth = windowWidth > 420 ? width + margin.left + margin.right + 100 : width + margin.left + margin.right;

    // Set up and position SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr(
        "viewBox",
        `0 0 ${viewBoxWidth} ${
          height + margin.top + margin.bottom + 100
        }`
      )
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Set up tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("className", "tooltip")
      .style("z-index", "10")
      .style("color", "#fff")
      .style("background", "#B8075F")
      .style("padding", "10px")
      .style("border-radius", "5px")
      .style("text-align", "center")
      .style("transition", "0.5s")
      .style("font-family", "Open Sans")
      .style("visibility", "hidden");

    // Add X axis
    const xScale = d3
      .scaleBand()
      .range([0, width * 1.2])
      .domain(
        data.map((d) => {
          if (dataType === "grape") {
            return d.country;
          } else {
            return d.grape;
          }
        })
      )
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, (d) => d.value)]);

    // Add X axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale))
      .attr("font-size", "clamp(14px, 1.5vw, 18px)")
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis
    svg
      .append("g")
      .call(d3.axisLeft(yScale))
      .attr("font-size", "clamp(14px, 1.5vw, 18px)");

    // Add y-axis label
    svg
      .append("text")
      .attr("class", classes.yAxisLabel)
      .attr("x", -height / 2)
      .attr("y", labelMargin )
      .attr("transform", "rotate(-90)")
      .style("text-anchor", "middle")
      .text(yAxisLabel);

    // / Bars + Tooltip + Animations
    const bars = svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => {
        if (dataType === "grape") {
          return xScale(d.country);
        } else {
          return xScale(d.grape);
        }
      })
      .attr("width", xScale.bandwidth())
      .attr("y", height) // Start from bottom of chart
      .attr("height", 0) // Start with 0 height
      .attr("fill", fillColor)
      .on("mouseover", function (event, d) {
        d3.select(this).transition().duration(300).attr("fill", "#F9D90A");
        tooltip
          .style("top", event.pageY - 80 + "px")
          .style("left", event.pageX - 40 + "px")
          .style("visibility", "visible")
          .style("position", "absolute")
          .html(
            (dataType === "grape" ? d.country : d.grape) +
              "<br />" +
              d3.format(",")(d.value) +
              " " +
              units
          );
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(300).attr("fill", fillColor);
        tooltip.style("visibility", "hidden");
      });
    // .exit()
    // .remove();

    bars
      .transition() // Add transition for the animation
      .duration(1000)
      .delay((d, i) => i * 50) // Add delay for each bar to animate one by one
      .attr("y", (d) => {
        let barHeight = yScale(d.value);
        if (barHeight <= 0) {
          return 0;
        } else if (height - yScale(d.value) < height / 20) {
          barHeight = height - height / 21;
        } else {
          barHeight = yScale(d.value);
        }
        return barHeight;
      })
      .attr("height", (d) => {
        let barHeight = height - yScale(d.value);
        if (barHeight <= 0) {
          return 0;
        } else if (barHeight < height / 20) {
          return height / 20;
        } else {
          return height - yScale(d.value);
        }
      });

    return () => {
      tooltip.remove();
    };
  }, [
    data,
    dataType,
    fillColor,
    units,
    selectedGrapeType,
    containerSize.width,
    containerSize.height,
  ]);

  return (
    <>
      <div className={classes.barchart}>
        <svg ref={svgRef}></svg>
      </div>
      <p className={classes.units}>Units in hectares</p>
    </>
  );
};

export default BarChart2;
