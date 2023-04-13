import { useEffect, useState, useRef } from "react";
import * as d3 from 'd3';
import classes from './bar-chart.module.css';
// import redGrapeData from '../data/RedWineData';
// import WhiteWineData from '../data/WhiteWineData';

const MultiBarChart = (props) => {
    const svgRef = useRef();

    const {
        grapeType,
      redGrapeData,
      whiteGrapeData,

    } = props;
  
    console.log('redGrapeData', redGrapeData);

    const dataType = "country";
    const data = grapeType === "red" ? redGrapeData : whiteGrapeData;
    const fillColor = grapeType === "red" ? "#B03E3E" : "#A19F18";

    console.log('grapeType', grapeType)
    console.log('data', data);
  
  const units = "hectares";
    useEffect(() => {
      d3.select(svgRef.current).selectAll("*").remove();
  
      const margin = { top: 20, right: 20, bottom: 50, left: 10 };
  
      const width = 800 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;
  
      // Set up and position SVG
      const svg = d3
        .select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("viewBox", "0 0 850 500")
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
        .style("visibility", "hidden")
  
      // Add X axis
      const xScale = d3
        .scaleBand()
        .range([0, width + 50])
        .domain(
          data.map((d) => {return d.itemName})
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
  
      // Bars + Tooltip
      svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d) => {
            return xScale(d.grape);
          })
        .attr("width", xScale.bandwidth())
        .attr("y", (d) => {
          let barHeight = yScale(d.value);
          if(barHeight <= 0) {
            return 0;
          } else if ((height - yScale(d.value)) < (height/20)) {
            barHeight = (height - (height/21));
          } else {
            barHeight = yScale(d.value);
          }
          return barHeight;
        })
        .attr("height", (d) => {
          let barHeight = height - yScale(d.value);
          if(barHeight <= 0) {
            return 0;
          } else if (barHeight < (height/20)) {
            return height/20;
          } else {
            return height - yScale(d.value);
          }
        })
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
                " " + units
            );
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
    }, [data, grapeType, redGrapeData, whiteGrapeData]);
  
    // let headerText;
    // let subHeaderText;
  
    // if (dataType === "grape") {
    //   headerText = itemName + ": " + explanationText;
    //   subHeaderText =
    //     "Winegrape land area used for production, Top " +
    //     itemName +
    //     " grape producing countries,  " +
    //     dataYear;
    // } else {
    //   headerText =
    //     "Top " + grapeType + " Grapes of " + itemName;
    //   subHeaderText =
    //     "Winegrape land area used for production, " +
    //     explanationText +
    //     " " +
    //     selectedGrapeType +
    //     " grape varietals, " +
    //     dataYear;
    // }
  
    return (
      <>
        <section className={classes.chart}>
          {/* <h2 className={classes.header}> */}
            {/* {itemName}: {explanationText} {selectedGrapeType} Grapes */}
            {/* {headerText}
          </h2> */}
          {/* <p className={classes.subheader}> */}
            {/* Winegrape area production for {explanationText} {selectedGrapeType}{" "}
          grape varietals, {dataYear} */}
            {/* {subHeaderText}
          </p> */}
 
          <div className={classes.barchart}>
            <svg ref={svgRef}></svg>
          </div>
        </section>
        <p className={classes.units}>Units in hectares</p>
      </>
    );
  };
export default MultiBarChart;
