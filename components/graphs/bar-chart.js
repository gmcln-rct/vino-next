import { useEffect, useState, useRef } from "react";

import * as d3 from "d3";

import classes from "./charts.module.css";

const BarChart = (props) => {
  const svgRef = useRef();

  const { dataYear, units, redGrapeData, whiteGrapeData } = props;

  const [selectedGrapeType, setSelectedGrapeType] = useState("red");

  const data = selectedGrapeType === "red" ? redGrapeData : whiteGrapeData;

  // const [data, setData] = useState([
  //     { grape: "Cabernet Sauvignon", value: 46555 },
  //     { grape: "Merlot", value: 108483 },
  //     { grape: "Syrah", value: 62211 },
  //     { grape: "Garnacha Tinta", value: 78631 },
  //     { grape: "Pinot Noir", value: 31602 },
  //     { grape: "Cabernet Franc", value: 32327 },
  //     { grape: "Côt", value: 6100 },
  //     { grape: "Monastrell", value: 8754 },
  //     { grape: "Mazuelo", value: 31760 },
  //     { grape: "Alicante Henri Bouschet", value: 2607 },
  //     { grape: "Gamay Noir", value: 24095 },
  //     { grape: "Cinsaut", value: 15930 }
  //   ]);
  

  useEffect(() => {

    d3.select(svgRef.current).selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 50, left: 10 };
    let widthCalc = 0;
    if (svgRef.current) {
       widthCalc = svgRef.current.clientWidth + 200;
    }
    const width = widthCalc < 320 ? 400 : widthCalc;
    const height = 400 - margin.top - margin.bottom;
  
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

      // Set up tooltip
      const tooltip = d3.select("body").append("div")
      .attr("className", "tooltip")

    const xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.grape))
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
      .attr("font-size","16")
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis
    svg.append("g")
      .call(d3.axisLeft(yScale))
      .attr("font-size","16");

    // Bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.grape))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("fill", "#69b3a2")
      .on("mouseover", function (event, d) {
        d3.select(this).transition().duration(300).attr("fill", "#F9D90A");
        tooltip
        .style("top", event.pageY - 40 + "px")
        .style("left", event.pageX - 40 + "px")
        .style("visibility", "visible")
        .style("position", "absolute")
        .style("z-index", "10")
        // .style("background", "#fff")
        .style("padding", "10px")
        .style("border", "1px solid #000")
        .style("border-radius", "5px")
        .style("text-align", "center")
        .style("transition", "0.3s")
        .html( (d.grape) + '<br />' + " - " + d3.format(",")(d.value) + " " + units);
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(300).attr("fill", "#69b3a2");
        tooltip.style("visibility", "hidden");
      })

  }, [selectedGrapeType]);

  return (
    <div className={classes.chart}>
      <select
      className={classes.selectCss}
        value={selectedGrapeType}
        onChange={(event) => setSelectedGrapeType(event.target.value)}
      >
        <option value="red">Red Grapes</option>
        <option value="white">White Grapes</option>
      </select>
      <svg ref={svgRef}></svg>
      <div>
        <p className={classes.chartTitle}>Data as of {dataYear}</p>
      </div>
    </div>
  );
};

export default BarChart;
