import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const data = [
  { year: 2010, France: 500, Italy: 400, Spain: 300 },
  { year: 2011, France: 550, Italy: 450, Spain: 350 },
  { year: 2012, France: 600, Italy: 500, Spain: 400 },
  { year: 2013, France: 650, Italy: 550, Spain: 450 },
  { year: 2014, France: 700, Italy: 600, Spain: 500 },
  { year: 2015, France: 750, Italy: 650, Spain: 550 },
  { year: 2016, France: 800, Italy: 700, Spain: 600 },
  { year: 2017, France: 850, Italy: 750, Spain: 650 },
  { year: 2018, France: 900, Italy: 800, Spain: 700 },
  { year: 2019, France: 950, Italy: 850, Spain: 750 }
];

const StackedAreaChart = () => {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 50, left: 60 };
    const width = 600;
    const height = 400;

    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleLinear()
      .domain([d3.min(data, d => d.year), d3.max(data, d => d.year)])
      .range([0, width - margin.left - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d3.sum(Object.values(d).slice(1)))])
      .range([height - margin.top - margin.bottom, 0]);

    const stack = d3.stack().keys(['France', 'Italy', 'Spain'])(data);

    const area = d3
      .area()
      .x(d => xScale(d.data.year))
      .y0(d => yScale(d[0]))
      .y1(d => yScale(d[1]));

    const colors = d3
      .scaleOrdinal()
      .domain(['France', 'Italy', 'Spain'])
      .range(['#1f77b4', '#ff7f0e', '#2ca02c']);

    svg
      .selectAll('path')
      .data(stack)
      .enter()
      .append('path')
      .attr('fill', d => colors(d.key))
      .attr('d', area)
      .on('mouseover', (event, d) => {
        const country = d.key;
        const values = d.data[country];
        const year = d3.timeFormat('%Y')(d.data.year);
        tooltipRef.current.innerHTML = `${country}: ${values} (${year})`;
        tooltipRef.current.style.display = 'block';
        tooltipRef.current.style.left = `${event.pageX}px`;
        tooltipRef.current.style.top = `${event.pageY}px`;
      })
      .on('mouseout',
      () => {
        tooltipRef.current.style.display = 'none';
        });
        const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));
const yAxis = d3.axisLeft(yScale);

svg
  .append('g')
  .attr('transform', `translate(0,${height - margin.top - margin.bottom})`)
  .call(xAxis);

svg
  .append('g')
  .call(yAxis);

svg
  .append('text')
  .attr('transform', `translate(${width / 2},${height - margin.bottom / 2})`)
  .style('text-anchor', 'middle')
  .text('Year');

svg
  .append('text')
  .attr('transform', 'rotate(-90)')
  .attr('y', 0 - margin.left)
  .attr('x', 0 - height / 2)
  .attr('dy', '1em')
  .style('text-anchor', 'middle')
  .text('Production (thousand liters)');

d3.select(window).on('resize', () => {
  const containerWidth = svgRef.current.getBoundingClientRect().width;
  const containerHeight = svgRef.current.getBoundingClientRect().height;
  svg.attr('width', containerWidth).attr('height', containerHeight);
  xScale.range([0, containerWidth - margin.left - margin.right]);
  yScale.range([containerHeight - margin.top - margin.bottom, 0]);
  svg.select('.x-axis').call(xAxis);
  svg.select('.y-axis').call(yAxis);
  svg.selectAll('path').attr('d', area);
});
}, []);

return (
<div style={{ position: 'relative', width: '100%', height: '100%' }}>
<svg ref={svgRef}></svg>
<div
ref={tooltipRef}
style={{
display: 'none',
position: 'absolute',
padding: '10px',
background: 'white',
boxShadow: '0px 0px 5px rgba(0,0,0,0.3)',
zIndex: 9999
}}
></div>
</div>
);
};

export default StackedAreaChart;
