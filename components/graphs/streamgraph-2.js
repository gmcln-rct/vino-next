year,France,Italy,Portugal,Spain,Germany,Australia,New Zealand,United States,Argentina,Chile,Algeria,South Africa
1835,2669460,0,0,0,0,0,0,0,0,0,0,8997
1836,3139583,0,0,0,0,0,0,0,0,0,0,9715
1837,3834476,0,0,0,0,0,0,0,0,0,0,10536
1838,2547320,0,308900,0,0,0,0,0,0,0,0,10427

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

const StreamGraph = () => {
  const svgRef = useRef(null);
  const width = 800;
  const height = 400;

  const fetchData = async () => {
    const response = await axios.get('/path/to/your/data.csv');
    return response.data;
  };

  useEffect(() => {
    const renderChart = async () => {
      const data = await fetchData();
      const margin = { top: 20, right: 20, bottom: 30, left: 50 };
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      const parseTime = d3.timeParse('%Y');
      const keys = data.columns.slice(1);

      const stack = d3.stack().keys(keys).offset(d3.stackOffsetWiggle);
      const layers = stack(data.map(d => {
        const obj = {};
        keys.forEach(key => obj[key] = +d[key]);
        obj.date = parseTime(d.year);
        return obj;
      }));

      const xScale = d3
        .scaleTime()
        .domain(d3.extent(data, d => parseTime(d.year)))
        .range([0, innerWidth]);

      const yScale = d3
        .scaleLinear()
        .domain([
          d3.min(layers, l => d3.min(l, d => d[0])),
          d3.max(layers, l => d3.max(l, d => d[1]))
        ])
        .range([innerHeight, 0]);

      const colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(keys);

      const area = d3
        .area()
        .x(d => xScale(d.data.date))
        .y0(d => yScale(d[0]))
        .y1(d => yScale(d[1]))
        .curve(d3.curveBasis);

      const svg = d3
        .select(svgRef.current)
        .attr('width', width)
        .attr('height', height);

      svg.selectAll('*').remove();

      const g = svg
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      g.selectAll('path')
        .data(layers)
        .enter()
        .append('path')
        .attr('d', area)
        .attr('fill', d => colorScale(d.key));

      const xAxis = d3.axisBottom(xScale).ticks(d3.timeYear.every(5));

      g.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(xAxis);
    };

    renderChart();
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default StreamGraph;
