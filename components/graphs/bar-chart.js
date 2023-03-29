import { useEffect, useState, useRef } from "react";
import classes from "./bar-chart.module.css";

import * as d3 from "d3";

const BarChart = (props) => {
  const svgRef = useRef();

  const {
    itemName,
    dataYear,
    dataType,
    grapeType,
    units,
    redGrapeData,
    whiteGrapeData,
    explanationText,
  } = props;

  const [selectedGrapeType, setSelectedGrapeType] = useState(grapeType ? grapeType : "Red");
  // const [wineData, setWineData] = useState(grapeType === "Red" ? redGrapeData : whiteGrapeData);

  // if (grapeType === "W") {
  //   setSelectedGrapeType("White");
  //   setWineData(whiteGrapeData);
  // }

  // const data = wineData;
  const data = selectedGrapeType === "Red" ? redGrapeData : whiteGrapeData;
  const fillColor = selectedGrapeType === "Red" ? "#B03E3E" : "#A19F18";
  
  console.log("in bar chart - grapeType", grapeType);
  console.log("in bar chart - redGrapeData", redGrapeData);
  console.log("in bar chart - selectedGrapeType", selectedGrapeType);
  console.log("in bar chart - data", data);
  console.log("in bat chart - dataType", dataType);


  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 20, right: 20, bottom: 50, left: 10 };

    // let widthCalc = 400;
    // if (!svgRef.current) {
    //   widthCalc = svgRef.current.clientWidth + 300;
    // }
    // const width = widthCalc < 320 ? 400 : widthCalc;
    // const height = 350 - margin.top - margin.bottom;

    // let widthCalc = svgRef.current.clientWidth;
    // console.log("widthCalc", widthCalc);
    // console.log("svgRef.current Parebt", svgRef.current);

      // const width = svgRef.current.clientWidth - margin.left - margin.right;
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;


    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      // .attr("width", "800px")
      // .attr("height", "500px")
      // .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 850 500")
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Set up tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("className", "tooltip");

    const xScale = d3
      .scaleBand()
      .range([0, width+50])
      .domain(data.map((d) => {
        if(dataType === "grape") {
          return d.country 
        } else {
          return d.grape
        }
      }))
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

    // Bars + Tooltip
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => {
        if(dataType === "grape") {
          return xScale(d.country)
        } else {
          return xScale(d.grape)
        }
      })
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("fill", fillColor)
      .on("mouseover", function (event, d) {
        d3.select(this).transition().duration(300).attr("fill", "#F9D90A");
        tooltip
          .style("top", event.pageY - 40 + "px")
          .style("left", event.pageX - 40 + "px")
          .style("visibility", "visible")
          .style("position", "absolute")
          .style("z-index", "10")
          .style("color", "#fff")
          .style("background", "#555")
          .style("padding", "10px")
          .style("border-radius", "5px")
          .style("text-align", "center")
          .style("transition", "0.5s")
          .style("font-family", "sans-serif")
          .html((dataType==="grape" ? d.country : d.grape) + "<br />" + d3.format(",")(d.value) + " " + units);
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(300).attr("fill", fillColor);
        tooltip.style("visibility", "hidden");
      })
      .exit()
      .remove();

    return () => {
      tooltip.remove();
    };
  }, [data, dataType, fillColor, units, selectedGrapeType]);

  let headerText;
  let subHeaderText;

  if (dataType === "grape") {
    headerText =itemName + ": " + explanationText;
    subHeaderText = "Winegrape area production in top " + itemName + " grape producing countries, " + dataYear;
  } else {
    headerText = itemName + ": " + explanationText + " " + selectedGrapeType + " Grapes";
    subHeaderText = "Winegrape area production for " + explanationText + " " + selectedGrapeType + " grape varietals, " + dataYear;
  }


  return (
    <>
    <section className={classes.chart}>
      <h2 className={classes.header}>
        {/* {itemName}: {explanationText} {selectedGrapeType} Grapes */}
        {headerText}
      </h2>
      <p className={classes.subheader}>
        {/* Winegrape area production for {explanationText} {selectedGrapeType}{" "}
        grape varietals, {dataYear} */}
        {subHeaderText}
      </p>
      {dataType === "country" && (<select
        className={classes.selectCss}
        value={selectedGrapeType}
        onChange={(event) => setSelectedGrapeType(event.target.value)}
      >
        <option value="Red">Red Grapes</option>
        <option value="White">White Grapes</option>
      </select>)}

      <div className={classes.barchart}>
        <svg ref={svgRef}></svg>
      </div>
    </section>
    <p className={classes.units}>Units in hectares</p>

    </>
  );
};

export default BarChart;
