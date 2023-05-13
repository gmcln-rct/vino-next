import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
// import { HISTORIC_PRODUCTION_DATA } from "@/data/historic-production-data";

// const StreamGraph = () => {
//   const svgRef = useRef();

  const productionData = [
        { year: 2010, country1: 1000, country2: 1500 },
        { year: 2011, country1: 1200, country2: 1700 },
        { year: 2012, country1: 1400, country2: 1900 },
        { year: 2013, country1: 1600, country2: 2100 },
        { year: 2014, country1: 1800, country2: 2300 },
        { year: 2015, country1: 2000, country2: 2500 },
        { year: 2016, country1: 2200, country2: 2700 },
        { year: 2017, country1: 2400, country2: 2900 },
        { year: 2018, country1: 2600, country2: 3100 },
        { year: 2019, country1: 2800, country2: 3300 },
      ];

  const StreamGraph = () => {
    const ref = useRef();
  
    useEffect(() => {

        const data = "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered_wide.csv";
// const data = productionData
// set the dimensions and margins of the graph
const margin = {top: 20, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          `translate(${margin.left}, ${margin.top})`);

// Parse the Data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered_wide.csv").then( function(data) {

  // List of groups = header of the csv files
  const keys = data.columns.slice(1)

  // Add X axis
  const x = d3.scaleLinear()
    .domain(d3.extent(data, function(d) { return d.year; }))
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).ticks(5));

  // Add Y axis
  const y = d3.scaleLinear()
    .domain([-100000, 100000])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // color palette
  const color = d3.scaleOrdinal()
    .domain(keys)
    .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf'])

  //stack the data?
  const stackedData = d3.stack()
    .offset(d3.stackOffsetSilhouette)
    .keys(keys)
    (data)

  // Show the areas
  svg
    .selectAll("mylayers")
    .data(stackedData)
    .join("path")
      .style("fill", function(d) { return color(d.key); })
      .attr("d", d3.area()
        .x(function(d, i) { return x(d.data.year); })
        .y0(function(d) { return y(d[0]); })
        .y1(function(d) { return y(d[1]); })
    );
}, []);
    //   const data = Object.entries(productionData[0])
    //     .filter(([key]) => key !== "year")
    //     .map(([key]) =>
    //       productionData.map(({ year, [key]: value }) => ({
    //         key,
    //         date: new Date(year, 0),
    //         value,
    //       }))
    //     );
  
    //   const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    //   const width = window.innerWidth - margin.left - margin.right;
    //   const height = window.innerHeight - margin.top - margin.bottom;
  
    //   const x = d3
    //     .scaleTime()
    //     .domain(d3.extent(data[0], (d) => d.date))
    //     .range([0, width]);
  
    //   const y = d3
    //     .scaleLinear()
    //     .domain([0, d3.max(data, (d) => d3.max(d, (d) => d.value))])
    //     .range([height, 0]);
  
    //   const area = d3
    //     .area()
    //     .x((d) => x(d.date))
    //     .y0((d) => y(d[0]))
    //     .y1((d) => y(d[1]))
    //     .curve(d3.curveBasis);
  
    //     const stack = d3
    //     .stack()
    //     .keys(data.map((d) => d[0].key))
    //     .value((d, key, i) => {
    //       const entry = d.find((entry) => entry.key === key);
    //       return entry ? entry.value : 0;
    //     })
    //     .order(d3.stackOrderNone)
    //     .offset(d3.stackOffsetWiggle);
      
  
    //   const series = stack(d3.rollup(data.flat(), ([d]) => d.value, (d) => d.key, (d) => d.date));
  
    //   const svg = d3
    //     .select(ref.current)
    //     .attr("width", width + margin.left + margin.right)
    //     .attr("height", height + margin.top + margin.bottom)
    //     .append("g")
    //     .attr("transform", `translate(${margin.left},${margin.top})`);
  
    //   svg
    //     .selectAll("path")
    //     .data(series)
    //     .join("path")
    //     .attr("fill", ({ key }) => d3.interpolateViridis(key))
    //     .attr("d", area)
    //     .append("title")
    //     .text(({ key }) => key);
  
    //     const xAxis = d3.axisBottom(x).ticks(d3.timeYear.every(1));
    //     const yAxis = d3.axisLeft(y).ticks(5);
    
    //     svg.append("g").attr("transform", `translate(0,${height})`).call(xAxis);
    //     svg.append("g").call(yAxis);
    //   }, []);
}, []);
      return <svg ref={ref}></svg>;

    }

    
    export default StreamGraph;