// D3 bar graph javascript

// how to append multiple images: http://stackoverflow.com/questions/32652036/how-to-append-multiple-images-in-svg-using-javascript
var chemical = "bpa"

var cwidth = 100;
var cheight = 100;

var svg2 = d3.select("body").append("svg")
    .attr("width", 2000)
    .attr("height", 2000)
    // .style("border", 1px solid black);

// var circle = svg2.append("circle")
//     .attr("cx", 60)
//     .attr("cy", 60)
//     .attr("r", 50)
//     .attr("fill", "steelblue");

// create dictionary of chemical names and corresponding links
var images = []
var chemical_names = ["bpa", "bde47", "dde", "deph", "pcb153", "pfoa", "tcdd"]
var chemical_links = ["../images/bpa_button.png", "../images/bde-47_button.png", "../images/dde_button.png", "../images/beph_button.png", "../images/pcb153_button.png", "../images/pfoa_button.png", "../images/tcdd_button.png"]
for (i = 0; i < chemical_names.length; i++) {
  images.push({
      chemical: chemical_names[i],
      link: chemical_links[i]
  });
} 

var g = svg2.append("g");

  // svg2.selectAll("g.image")
    // .data(images)
    // .enter()
    g.append("image")
    // .attr("class", function(d) {return images.chemical; })
    .attr("xlink:href", function(d) {return images[0].link; })
      .attr("x", 30)
      .attr("y", 30)
      .attr("width", cwidth)
      .attr("height", cheight);

var g = svg2.append("g");

  // svg2.selectAll("g.image")
    // .data(images)
    // .enter()
    g.append("image")
    // .attr("class", function(d) {return images.chemical; })
    .attr("xlink:href", function(d) {return images[1].link; })
      .attr("x", 30)
      .attr("y", 200)
      .attr("width", cwidth)
      .attr("height", cheight);

var g = svg2.append("g");

  // svg2.selectAll("g.image")
    // .data(images)
    // .enter()
    g.append("image")
    // .attr("class", function(d) {return images.chemical; })
    .attr("xlink:href", function(d) {return images[2].link; })
      .attr("x", 30)
      .attr("y", 400)
      .attr("width", cwidth)
      .attr("height", cheight);

var g = svg2.append("g");

  // svg2.selectAll("g.image")
    // .data(images)
    // .enter()
    g.append("image")
    // .attr("class", function(d) {return images.chemical; })
    .attr("xlink:href", function(d) {return images[3].link; })
      .attr("x", 30)
      .attr("y", 600)
      .attr("width", cwidth)
      .attr("height", cheight);


var g = svg2.append("g");

  // svg2.selectAll("g.image")
    // .data(images)
    // .enter()
    g.append("image")
    // .attr("class", function(d) {return images.chemical; })
    .attr("xlink:href", function(d) {return images[4].link; })
      .attr("x", 30)
      .attr("y", 800)
      .attr("width", cwidth)
      .attr("height", cheight);


    // g.selectAll(".circle")
      g.append("circle")
      // svg2.selectAll(".circle")
      // .append("circle")
      .attr("class", "circle")
      .attr("cx", 78)
      .attr("cy", 78)
      .attr("r", 48)
    .style("stroke", "steelblue")
    // .style("fill", "steelblue")
    .style("fill", "rgba(255, 255, 255, 0)")
    .style("stroke-width", 0);

    // brown colour on hover
    d3.selectAll(".circle")
      .on("mouseover", function() {
      d3.select(this)
        .style("stroke-width", 4)
      })
      .on("mouseout", function() {
      d3.select(this)
        .style("stroke-width", 0);
      });

    d3.selectAll(".circle")
      .on("click", function() {
        InitChart("bpa")
      })
    .on("dblclick", function() {
      d3.select(".svg")
        .remove;
      })


  // .on("mouseover", function() {
  // d3.select(this)
  // .attr("stroke", "steelblue");
  // })
  // .on("mouseout", function() {
  // d3.select(this)
  // .attr("stroke", "none");
  // });

// // append the border rect
// var border = g.append('rect')
//     .attr('class', 'image-border')
//     .attr("x", 30)
//     .attr("y", 30)
//     .attr('width', cwidth + 20)
//     .attr('height', cheight + 20)
//     .style("stroke", "steelblue")
//     .style("fill", "none")
//     .style("stroke-width", 4);
console.log("hello")


// var svg = d3.select("body").append("svg")

// var imgs1 = svg.append("g")
// imgs1.append("svg:image")
// .attr("xlink:href", "../images/PCB153_button.png")
// .attr("x", 3)
// .attr("y", 256)
// .attr("width", "10")
// .attr("height", "10");

// var imgs2 = svg.append("g")
// imgs2.append("svg:image")
// .attr("xlink:href", "../images/PCB153_button.png")
// .attr("x", 210)
// .attr("y", 256)
// .attr("width", "10")
// .attr("height", "10");

// InitChart("bpa")


function InitChart(chemical) {
// margins
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

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
  var svg = d3.select("body").append("svg")
      .attr("class", "svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate("+ margin.left + "," + margin.top + ")");

  // initiating data
  d3.tsv("../data/chemicalsRA.tsv", type, function(error, data){
    if (error) throw error;

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

function type(d) {
    d[chemical] = +d[chemical];
    return d;
  }


// var svg2 = d3.select("body").append("svg")
//     .attr("width, 200")
//     .attr("height", 100)
//     .style("border", 1px solid black);



