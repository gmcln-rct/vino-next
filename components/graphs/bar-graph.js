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


  return (
    <div className="App">
      <header className="App-header">

        <svg ref={svgRef}></svg>

      </header>
    </div>
  );
}


export default BarGraph;