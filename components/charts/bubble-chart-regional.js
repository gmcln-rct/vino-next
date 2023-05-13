import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { WINE_REGION_PRODUCTION_DATA } from './wine-data';

const BubbleChart = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const chartRef = useRef();

  useEffect(() => {
    if (!selectedCountry || !selectedRegion) return;

    const data = WINE_REGION_PRODUCTION_DATA.find(
      (d) => d.countryId === selectedCountry && d.id === selectedRegion
    );

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    const simulation = d3
      .forceSimulation(data.grapeData)
      .force(
        'collision',
        d3.forceCollide().radius((d) => Math.sqrt(d.value))
      )
      .force('x', d3.forceX().strength(0.05))
      .force('y', d3.forceY().strength(0.05))
      .alphaTarget(1)
      .on('tick', () => {
        node
          .attr('cx', (d) => d.x)
          .attr('cy', (d) => d.y)
          .attr('r', (d) => Math.sqrt(d.value));
      });

    const node = svg
      .selectAll('.node')
      .data(data.grapeData)
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('fill', 'steelblue')
      .attr('stroke', 'white')
      .attr('stroke-width', 2)
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .attr('r', (d) => Math.sqrt(d.value))
      .call(
        d3
          .drag()
          .on('start', (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on('end', (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    node
      .append('title')
      .text((d) => `${d.grape}: ${d.value} hectares`);
  }, [selectedCountry, selectedRegion]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedRegion('');
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const countryOptions = Array.from(
    new Set(WINE_REGION_PRODUCTION_DATA.map((d) => d.countryName))
  ).map((countryName
    ) => (
        <option key={countryName} value={countryName}>
        {countryName}
        </option>
        ));
        
        const regionOptions =
        selectedCountry &&
        Array.from(
        new Set(
        WINE_REGION_PRODUCTION_DATA.filter(
        (d) => d.countryName === selectedCountry
        ).map((d) => d.itemName)
        )
        ).map((regionName) => (
        <option key={regionName} value={regionName}>
        {regionName}
        </option>
        ));
        
        return (
        <div>
        <div>
        <label htmlFor="country-select">Select a country:</label>
        <select id="country-select" onChange={handleCountryChange}>
        <option value="">-- Select a country --</option>
        {countryOptions}
        </select>
        </div>
        <div>
        <label htmlFor="region-select">Select a region:</label>
        <select id="region-select" onChange={handleRegionChange}>
        <option value="">-- Select a region --</option>
        {regionOptions}
        </select>
        </div>
        <svg ref={chartRef}></svg>
        </div>
        );
        };
        
        export default BubbleChart;


// In this implementation, we use the `useState` hook to keep track of the currently selected country and region. We use the `useEffect` hook to update the bubble chart whenever the selected country or region changes.

// Inside the `useEffect` hook, we filter the `WINE_REGION_PRODUCTION_DATA` array to get the data for the selected country and region. We then use d3 to create a bubble chart from this data, using the `selectAll`, `enter`, and `append` methods to create and update the `circle` elements representing the bubbles.

// We also use d3 to create a `forceSimulation` that uses collision detection to prevent the bubbles from overlapping, and x and y forces to center the bubbles in the chart. We bind the simulation to the `circle` elements using the `attr` method, and add drag behavior using the `call` method.

// Finally, we render two dropdown menus for selecting the country and region, and an empty `svg` element that will be used to display the chart. The `handleCountryChange` and `handleRegionChange` functions are called when the user selects a new country or region, respectively, and update the state accordingly.
