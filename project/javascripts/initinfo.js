InitInfo()

function InitInfo() {

	d3.json("data/chemical_information.json", function(error, json){
    	if (error) throw error;
	    data_chem = json

	    for (var i = 2; i < data_chem[0].length; i++) {
			tooltip = document.getElementById(data_chem[0][i])
			console.log(tooltip)
	    	tooltip.title = data_chem[1][i] + "\n" + data_chem[2][i]
	    	console.log(tooltip)
		}
	});
}

