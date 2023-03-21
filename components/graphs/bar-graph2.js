import { useEffect, useState , useRef } from 'react';
import * as d3 from "d3"

const BarGraph = () => {

    //  1] Setup Initial data and settings ------------//

    // const initialData = [4,50,43,40, 99,50];

    // const dataSource = d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv", d3.autoType)

    const [data, setData] = useState([
    {
      name: "A",
      value: 50,
    },
    {
      name: "B",
      value: 20,
    },
    {
      name: "C",
      value: 40,
    },
    {
      name: "D",
      value: 70,
    },
  ]);
 
    const [chartData] = useState(data)
 
    const svgRef= useRef()

      useEffect(
        ()=>{ 

          // Set up svg
          var margin = {top: 20, right: 30, bottom: 30, left: 60};
          const w = 460 - margin.left - margin.right;
          const h = 200 - margin.top - margin.bottom;

          // const w = 400;
          // const h = 200;

          const svg = d3.select(svgRef.current)
            .attr("width", w)
            .attr("height", h)
            .style('background-color', '#d3d3d3')
            .style('margin-top', '20')
            .style('margin-left', '30%')
            .style('overflow', 'visible')
          
          // Set up scales
            const xScale = d3.scaleBand()
                .range([0, w]).padding(0.2);
            const yScale = d3.scaleLinear()
                .range([h, 0]);


            const generateScaledLine = d3.line()
              .x( (d,i) => xScale(i) )
              .y( (d) => yScale(d) )
              .curve(d3.curveLinear)

          // Set up axis
          const xAxis = d3.axisBottom(xScale)
            .ticks(chartData.length)
            .tickFormat( (i) => i + 1 );

          const yAxis = d3.axisLeft(yScale)
            .ticks(5)
            svg.append("g")
            .call(xAxis)
            // move xaxis to the bottom of the svg
            .attr("transform", `translate(0, ${h})`)


          // draw line
          svg.selectAll('.bar')
            .data([chartData])
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (d,i) => xScale(i) )
            .attr('y', (d) => yScale(d) )
            .attr('width', xScale.bandwidth())
            .attr('height', (d) => h - yScale(d) )
            .attr('fill', 'red');

        svg.append("g")
            .call(yAxis)
            .attr("transform", `translate(0, 0)`)
            .attr("class", "yAxis");

        svg.append('g')
            .attr('class', 'line')
            .append('path')
            .attr('d', generateScaledLine(chartData))
            .attr('fill', 'none')
            .attr('stroke', 'blue')
            .attr('stroke-width', 2)
            
    

        },[chartData]
      )
      import React, { useRef, useEffect } from 'react';
      import * as d3 from 'd3';
      
      const BarChart = () => {
        const chartRef = useRef(null);
      
        useEffect(() => {
          const data = [
            { grape: 'Cabernet Sauvignon', value: 46555 },
            { grape: 'Merlot', value: 108483 },
            { grape: 'Tempranillo', value: 658 },
            { grape: 'Syrah', value: 62211 },
            { grape: 'Garnacha Tinta', value: 78631 },
            { grape: 'Pinot Noir', value: 31602 },
            { grape: 'Sangiovese', value: 1503 },
            { grape: 'Bobal', value: 0 },
            { grape: 'Cabernet Franc', value: 32327 },
            { grape: 'Côt', value: 6100 },
            { grape: 'Monastrell', value: 8754 },
            { grape: 'Mazuelo', value: 31760 },
            { grape: 'Alicante Henri Bouschet', value: 2607 },
            { grape: 'Tribidrag', value: 1 },
            { grape: 'Montepulciano', value: 0 },
            { grape: 'Gamay Noir', value: 24095 },
            { grape: 'Cinsaut', value: 15930 },
            { grape: 'Carmenère', value: 28 },
            { grape: 'Douce Noire', value: 0 },
            { grape: 'Barbera', value: 0 },
            { grape: 'Isabella', value: 0 },
            { grape: 'Blaufränkisch', value: 0 }
          ];
      
          const margin = { top: 20, right: 20, bottom: 50, left: 50 };
          const width = 600 - margin.left - margin.right;
          const height = 400 - margin.top - margin.bottom;
      
          const svg = d3.select(chartRef.current)
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