import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

const BubbleMap = ({ data, worldData }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // Set dimensions and margins for the graph
        const width = 800;
        const height = 400;
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };

        svg.attr("width", width).attr("height", height);

        // Use a Mercator projection for our map
        const projection = d3.geoMercator().fitSize([width, height], feature(worldData, worldData.objects.countries));

        const path = d3.geoPath().projection(projection);

        // Draw the map
        svg.selectAll(".country")
            .data(feature(worldData, worldData.objects.countries).features)
            .enter()
            .append("path")
            .attr("class", "country")
            .attr("d", path);

        // Use a square root scale for the size of the bubbles
        const radiusScale = d3.scaleSqrt()
            .domain([0, d3.max(data, d => d.production)])
            .range([0, 30]);

        svg.selectAll(".bubble")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "bubble")
            .attr("cx", d => projection([d.longitude, d.latitude])[0])
            .attr("cy", d => projection([d.longitude, d.latitude])[1])
            .attr("r", d => radiusScale(d.production))
            .attr("fill", "#69b3a2")  // You can choose another color
            .attr("opacity", "0.8");

    }, [data, worldData]);

    return <svg ref={svgRef}></svg>;
};

export default BubbleMap;