import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BubbleChart = () => {
  const data = [
    { grape: 'Cabernet Sauvignon', value: 0 },
    { grape: 'Merlot', value: 47451 },
    { grape: 'Tempranillo', value: 28084 },
    { grape: 'Syrah', value: 78842 },
    { grape: 'Garnacha Tinta', value: 4025 },
    { grape: 'Pinot Noir', value: 0 },
    { grape: 'Sangiovese', value: 1657 },
    { grape: 'Cabernet Franc', value: 0 },
    { grape: 'Malbec', value: 7333 },
    { grape: 'Mourvedre', value: 9432 },
  ];

  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = 600;
    const height = 600;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pack = (data) =>
      d3
        .pack()
        .size([width, height])
        .padding(1.5)(
        d3
          .hierarchy({ children: data })
          .sum((d) => d.value)
          .sort((a, b) => b.value - a.value),
      );

    const root = pack(data);

    const node = svg
      .selectAll('g')
      .data(root.leaves())
      .join('g')
      .attr('transform', (d) => `translate(${d.x + 1},${d.y + 1})`);

    node
      .append('circle')
      .attr('r', (d) => d.r)
      .attr('fill', (d) => color(d.data.grape));

    node
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.3em')
      .text((d) => d.data.grape)
      .attr('font-size', (d) => `${Math.max(8, d.r / 3)}px`)
      .attr('fill', 'white');

  }, [data]);

  return (
    <svg
      ref={svgRef}
      width={600}
      height={600}
      style={{ backgroundColor: 'white', display: 'block', margin: 'auto' }}
    />
  );
};

export default BubbleChart;
