generate_table2()

function generate_table2() {
    // to be done: remove table if the table was there before

  d3.json("data/effects_explanations.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    // console.log(data)
    console.log(data.length)
      // check the checkboxes (numbers)
      // get the reference for the body
    var body2 = document.getElementById("mouse_model2");
     
      // creates a <table> element and a <tbody> element
    var tbl2     = document.createElement("table");
    tbl2.id = "table2"
    var id2      = document.createElement("id", "table2")
    var tblBody2 = document.createElement("tbody");
     
    // console.log(characteristics)
    var i;
    for (i = 0; i < data.length; i++) {
      console.log(data[i])
      var row2 = document.createElement("tr");
      // create the cells for each row
      for (var j = 0; j < data[i].length; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell2 = document.createElement("td");
        var cellText2 = document.createTextNode(data[i][j]);
        cell2.appendChild(cellText2);
        row2.appendChild(cell2);
      }
      tblBody2.appendChild(row2);
    }

      // put the <tbody> in the <table>
      tbl2.appendChild(tblBody2);
      tbl2.appendChild(id2)
      // appends <table> into <body>
      body2.appendChild(tbl2);
      // sets the border attribute of tbl to 2;
      tbl2.setAttribute("border", "2");      
  });
}