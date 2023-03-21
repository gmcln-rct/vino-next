import { useEffect, useState , useRef } from 'react';
import * as d3 from "d3"

const BarGraph = () => {

    //  1] Setup Initial data and settings ------------//
 
    const svgRef= useRef()

         
        useEffect(() => {
          const data = [
            { grape: 'Cabernet Sauvignon', value: 46555 },
            { grape: 'Merlot', value: 108483 },
            { grape: 'Tempranillo', value: 658 },
            { grape: 'Syrah', value: 62211 },
            { grape: 'Garnacha Tinta', value: 78631 },
            { grape: 'Pinot Noir', value: 31602 },
            { grape: 'Sangiovese', value: 1503 },
            { grape: 'Cabernet Franc', value: 32327 },
            { grape: 'Côt', value: 6100 },
            { grape: 'Monastrell', value: 8754 },
            { grape: 'Mazuelo', value: 31760 },
            { grape: 'Alicante Henri Bouschet', value: 2607 },
            { grape: 'Gamay Noir', value: 24095 },
            { grape: 'Cinsaut', value: 15930 },
            { grape: 'Carmenère', value: 28 }
          ];
      
          const margin = { top: 20, right: 20, bottom: 50, left: 50 };
          const width = 600 - margin.left - margin.right;
          const height = 400 - margin.top - margin.bottom;
      
          const svg = d3.select(svgRef.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);
      
          const xScale = d3.scaleBand()
            .range([0, width])
            .domain(data.map(d => d.grape))
            .padding(0.2);
      
          const yScale = d3.scaleLinear()
            .range([height, 0])
            .domain([0, d3.max(data, d => d.value)]);
      
          svg.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale))
            .selectAll('text')
            .attr('transform', 'rotate(-45)')
            .style('text-anchor', 'end');
      
          svg.append('g')
            .call(d3.axisLeft(yScale));
      
          svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(d.grape))
            .attr('y', d => yScale(d.value))
            .attr('width', xScale.bandwidth())
            .attr('height', d => height - yScale(d.value))
            .attr('fill', '#69b3a2');
      
        }, []);   

  return (
    <div className="App">
      <header className="App-header">

        <svg ref={svgRef}></svg>

      </header>
    </div>
  );
}


export default BarGraph;