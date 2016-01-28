/* Function to create text elements explaining the various chemicals. */

function InitInfo(chemical2) {
	var chemical2 = chemical2

	// opening data
	d3.json("data/chemical_information.json", function(error, json){
    	if (error) throw error;
	    data_chem = json

	    // create the text element for the specified chemical
	    for (var i = 0; i < data_chem[0].length; i++) {
	    	if (data_chem[0][i] == chemical2) {
				var box = document.createElement("input");
				box.type = "text";
				document.getElementById("chemicals").appendChild(box);
				box.value = data_chem[1][i] + data_chem[2][i]; 
				box.id = "boxID";
			}
		}
	});
}