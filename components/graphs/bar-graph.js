import { useEffect, useState , useRef } from 'react';
import * as d3 from "d3"

const TestPage3 = () => {

    //  1] Setup Initial data and settings ------------//

    // const initialData = [4,50,43,40, 99,50];

    const dataSource = d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv", d3.autoType)
 
    const [chartData] = useState(dataSource)
 
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
            //xscales
            const xScale = d3.scaleLinear()
              .domain([0, chartData.length - 1])
              .range([0, w])

            //yscales
            const yScale = d3.scaleLinear()
              .domain([0, h] )
              .range([h, 0])

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

          svg.append("g")
            .call(yAxis)

          // draw line
          svg.selectAll('.line')
            .data([chartData])
            .join('path')
            .attr('d', (value) => generateScaledLine(value))
            .attr('fill', 'none')
            .attr('stroke', '#000')
            

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


export default TestPage3;