  function generate_table() {
    // to be done: remove table if the table was there before

    d3.json("data/cohort_trial.json", function(error, json) {
        if (error) return console.warn(error);
        data = json;
        console.log(data)
        // check the checkboxes (numbers)
        // get the reference for the body
        var body = document.getElementById("cohort_table");
       
        // creates a <table> element and a <tbody> element
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");
       
      var characteristics = document.forms[0];
      // console.log(characteristics)
      var i;
      for (i = 0; i < characteristics.length; i++) {
          if (characteristics[i].checked) {
            // creates a table row
          var row = document.createElement("tr");
          // create the cells for each row
             for (var j = 0; j < data[i].length; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            console.log(data[i])
        var cell = document.createElement("td");
        var cellText = document.createTextNode(data[i][j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
        }
          }
          tblBody.appendChild(row);
    }

        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tbl);
        // sets the border attribute of tbl to 2;
        tbl.setAttribute("border", "2");      
    });
  }