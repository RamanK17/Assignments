var margin = {top:20,right:10,bottom:100,left:100},
  width =1200-margin.right-margin.left,
   height=800-margin.top-margin.bottom;

//  svg element

var svg=d3.select('body')
   .append('svg')
   .attr({"width": width+margin.right+margin.left,
           "height": height+margin.top+margin.bottom})

   .append('g')
       .attr("transform","translate("+margin.left+','+margin.right+')');

//  define x and y scale

var xScale = d3.scale.ordinal()
   .rangeRoundBands([0,width],0.2,0.2);

var yScale = d3.scale.linear()
   .range([height,0]);        //so that bar grows up

//define xaxis

   var xAxis=d3.svg.axis()
       .scale(xScale)
       .orient("bottom");

//define yaxis

   var yAxis=d3.svg.axis()
       .scale(yScale)
       .orient("left");

//import json data

d3.json('aggregate.json',function(error,data)
   {
       if (error)
       console.log("Error found");
       data.forEach(function(d)
       {
           d["Population"]= +d["Population"];
           d["Continent"]= d["Continent"];
           console.log(d["Continent"]+'::'+d["Population"]);
       });
// Sorting data
       data.sort(function(a,b)
       {
           return b["Population"]-a["Population"];
       });

// specify the domains of x and y scales.
       xScale.domain(data.map(function(d){return d["Continent"]}));
       yScale.domain([0,d3.max(data,function(d){return d["Population"];})])

//draw bars
           svg.selectAll('rect')
           .data(data)
           .enter()
           .append('rect')
           .attr("height",0)
           .attr("y",height)
           .transition().duration(3000)
           .delay(function(d,i) { return i * 200;})
           .attr({
               'x': function(d){return xScale(d["Continent"]);},
               'y': function(d){return yScale(d["Population"]);},
               'width' : xScale.rangeBand(),
               'height' : function(d) {return height-yScale(d["Population"]);}
           })
           .style("fill", function(d,i) { return 'rgb(20,20, ' + ((i * 30) + 100) + ')' });
//label the bars
             svg.selectAll('text')
             .data(data)
             .enter()
             .append('text')
             // .text(funct)
         .text(function(d) { return d["Population"];})
         .attr('x',function(d) { return xScale(d["Continent"]) + xScale.rangeBand()/2})
         .attr('y',function(d) { return yScale(d["Population"]) + 12; })
         .style("fill", "red")
         .style("text-anchor","middle");

//draw the X axis
               svg.append('g')
               .attr("class","x axis")
               .attr("transform","translate(0,"+height+")")
               .call(xAxis)
               .selectAll('text')
               .attr("transform","rotate(-60)")
               .attr("dx","-.8em")
               .attr("dy","-.25em")
               .style("text-anchor","end")
               .style("font-size","14px");

//draw the y Axis
               svg.append('g')
               .attr("class","y axis")
               .call(yAxis)
               // .selectAll('text')
               // .style("font-size","14px")
               .append("text")
               .attr("transform","rotate(-90)")
               .attr("x",-height/2)
               .attr("dy","-3.71em")
               .style("text-anchor","middle")
               .text("(in millions)") ;            

   });
