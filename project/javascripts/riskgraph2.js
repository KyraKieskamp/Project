// chemical = "bpa"
function InitChart(chemical) {
// margins
var chemical = chemical
console.log("hello")
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 560 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

  // scaling x values
  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  // scaling y values
  var y = d3.scale.linear()
      .range([height, 0]);

  // implementing x-axis
  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  // implementing y-axis
  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10);

  // adding svg 
  var svg = d3.select("body").selectAll("#risk_assessment").append("svg")
      .attr("class", "svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate("+ margin.left + "," + margin.top + ")");

  // initiating data
  d3.tsv("data/chemicals2.tsv", type, function(error, data){
    if (error) throw error;
    console.log(data[0].chemicals)

    x.domain(data.map(function(d) { return d.Chemicals; }));
    y.domain([0, d3.max(data, function(d) {return d[chemical]; })]);

    // appending x-axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // appending y-axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("ug/kg bw/day");

    // append bar
    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) {return x(d.Chemicals); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d[chemical]); })
        .attr("height", function(d) {return height - y(d[chemical]); })
        .attr("fill", "steelblue");

    // brown colour on hover
    svg.selectAll(".bar")
      .on("mouseover", function() {
      d3.select(this)
        .attr("fill", "brown");
      })
      .on("mouseout", function() {
      d3.select(this)
        .attr("fill", "steelblue");
      });


    // var dis = svg.append('g');

    // var txt = dis.append('text')
    //     .attr({ transform: 'translate(5,20)', fill:'red'})
    //     .text("hello");
    //     .on("mousemove", function(d) { 
    //       var mousePos = d3.mouse(this);
    //       txt.attr({transform: 'translate(' + function(d) { 
    //     return yRange(d.y)} + ')'});
  });        
}

// var chemical = "bpa"
function type(d, chemical) {
    d[chemical] = +d[chemical];
    return d;
  }


// var svg2 = d3.select("body").append("svg")
//     .attr("width, 200")
//     .attr("height", 100)
//     .style("border", 1px solid black);

// InitChart("bpa")