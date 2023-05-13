import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { feature } from 'topojson-client';
import worldMapData from 'world-atlas/world/50m.json';

const WineProductionMap = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Merge wine production data with GeoJSON data
    const mergedData = mergeData(worldMapData, data);

    // Create d3 projection for rendering the world map
    const projection = d3.geoMercator().fitSize([width, height], feature(mergedData, mergedData.objects.countries));

    // Create a color scale for wine production data
    const colorScale = d3.scaleSequential(d3.interpolateYlGnBu).domain([0, d3.max(data, d => d.totalProduction)]);

    // Create the SVG element
    const svg = d3.select(svgRef.current);

    // Render the world map
    svg
      .append('g')
      .selectAll('path')
      .data(feature(mergedData, mergedData.objects.countries).features)
      .enter()
      .append('path')
      .attr('d', d3.geoPath().projection(projection))
      .attr('fill', d => colorScale(getCountryProduction(d.properties.name)))
      .attr('stroke', '#fff')
      .on('mouseover', function (event, d) {
        // Display tooltip on mouse hover
        const [x, y] = d3.pointer(event);
        d3.select('.tooltip')
          .style('display', 'block')
          .style('left', `${x}px`)
          .style('top', `${y}px`)
          .text(`Country: ${d.properties.name}, Production: ${getCountryProduction(d.properties.name)}`);
      })
      .on('mouseout', function () {
        // Hide tooltip on mouseout
        d3.select('.tooltip')
          .style('display', 'none');
      });

    // Create tooltip element
    svg
      .append('text')
      .attr('class', 'tooltip')
      .style('display', 'none');

  }, []);

  // Helper function to get total production for a country
  const getCountryProduction = (country) => {
    const countryData = data.find(d => d.id === country.toLowerCase());
    return countryData ? countryData.totalProduction : 0;
  }

  return (
    <div className="map-container">
      <svg ref={svgRef} width={width} height={height} />
    </div>
  );
}

// Helper function to merge GeoJSON data with wine production data
const mergeData = (worldMapData, wineProductionData) => {
  const mergedData = topojson.feature(worldMapData, worldMapData.objects.countries);
  mergedData.features.forEach(feature => {
    const countryData = wineProductionData.find(d => d.id === feature.id);
    feature.properties = {
      ...countryData,
      production: countryData ? countryData.totalProduction : 0
    };
  });
  return mergedData;
}
