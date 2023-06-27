import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import classes from "./bubble-chart.module.css";

const BubbleMultiChart = (props) => {
  const svgRef = useRef();

  const { country, grapeData, units } = props;

  const [selectedCountry, setSelectedCountry] = useState(country);
  const [selectedData, setSelectedData] = useState(grapeData);

  const dataTypeText = "Units in hectares";

  // Adjust text color based on background color
  function getContrastYIQ(hexcolor) {
    const red = parseInt(hexcolor.substring(1, 3), 16);
    const green = parseInt(hexcolor.substring(3, 5), 16);
    const blue = parseInt(hexcolor.substring(5, 7), 16);
    const brightness = red * 0.299 + green * 0.587 + blue * 0.114;
    return brightness < 180 ? "white" : "black";
  }

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();
    const svg = d3.select(svgRef.current);

    const width = 580;
    const height = 580;

    const data = selectedData;

    // Create a color scale with unique colors for each grape type
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.grape))
      .range(d3.schemeYlOrRd[9]);

    const pack = (data) =>
      d3.pack().size([width, height]).padding(1.5)(
        d3
          .hierarchy({ children: data })
          .sum((d) => Math.max(d.value, (100 * 100) / Math.PI))
          .sort((a, b) => b.value - a.value)
      );

    const root = pack(data);

    const node = svg
      .selectAll("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", (d) => `translate(${d.x + 1},${d.y + 1})`);

    node
      .append("circle")
      .attr("r", (d) => d.r)
      .attr("fill", (d) => color(d.data.grape))
      .style("padding", "5px");

    node
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.3em")
      .text((d) => d.data.grape)
      .attr("font-size", (d) => `${Math.max(8, d.r / 5)}px`)
      .attr("fill", (d) => {
        let textColor = getContrastYIQ(color(d.data.grape));
        return textColor;
      })
      .style("text-wrap", "wrap");

    // Tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "white")
      .style("border", "1px solid black")
      .style("padding", "5px")
      .style("border-radius", "5px")
      .style("font-family", "Open Sans")
      .style("visibility", "hidden");

    node
      .on("mouseover", function (event, d) {
        tooltip
          .style("visibility", "visible")
          .text(`${d.data.grape}: ${(d.data.value).toLocaleString("en-US")} ${units}`);
      })
      .on("mousemove", (event) => {
        tooltip
          .style("top", `${event.pageY - 10}px`)
          .style("left", `${event.pageX + 10}px`);
      })
      .on("mouseout", () => {
        tooltip.style("visibility", "hidden");
      });
  }, [selectedCountry, selectedData]);

  return (
    <>
      <svg
        ref={svgRef}
        width={600}
        height={600}
        className={classes.chartMain}
        style={{ display: "block" }}
      />
      <p className="chartfooter moveUp">{dataTypeText}</p>
    </>
  );
};

export default BubbleMultiChart;
