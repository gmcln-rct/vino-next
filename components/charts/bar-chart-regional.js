import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { WINE_REGION_PRODUCTION_DATA } from './wine-data';

const BarChart = () => {
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

    const x = d3
      .scaleBand()
      .range([0, width])
      .padding(0.1)
      .domain(data.grapeData.map((d) => d.grape));

    const y = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data.grapeData, (d) => d.value)]);

    const svg = d3
      .select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    svg
      .selectAll('.bar')
      .data(data.grapeData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.grape))
      .attr('width', x.bandwidth())
      .attr('y', (d) => y(d.value))
      .attr('height', (d) => height - y(d.value));

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y));
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
  ).map((countryName) => (
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
          <option value="">-- Select
      a country --</option>
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



export default BarChart;