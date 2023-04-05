import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function WineProductionChart({ data, country1, country2 }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(chartRef.current);

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y).ticks(10);

    const keys = Object.keys(data[0]).filter(d => d !== 'year');

    const country1Data = data.map(d => ({ year: d.year, value: d[country1] }));
    const country2Data = data.map(d => ({ year: d.year, value: d[country2] }));

    x.domain(data.map(d => d.year));

    y.domain([0, d3.max([...country1Data, ...country2Data], d => d.value)]);

    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);

    svg
      .append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Wine Production');

    svg
      .selectAll('.bar')
      .data(country1Data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.year))
      .attr('width', x.bandwidth() / 2)
      .attr('y', d => y(d.value))
      .attr('height', d => height - y(d.value))
      .style('fill', 'steelblue');

    svg
      .selectAll('.bar2')
      .data(country2Data)
      .join('rect')
      .attr('class', 'bar2')
      .attr('x', d => x(d.year) + x.bandwidth() / 2)
      .attr('width', x.bandwidth() / 2)
      .attr('y', d => y(d.value))
      .attr('height', d => height - y(d.value))
      .style('fill', 'red');
  }, [data, country1, country2]);

  return (
    <div className="chart-container">
      <svg ref={chartRef}></svg>
    </div>
  );
}

export default WineProductionChart;
