function chemical_images() {
	d3.json("data/chemical_links.json", function(error, json) {
		if (error) return console.warn(error);

		data = json;
		console.log(data[2][1])
		// get sidenavigation element
		// var body = document.getElementsByTagName("body").
		var body = document.getElementById("chemicals");
		// var sidenav = body.getElementById("chemicals")
		console.log(body)

		// create the images for chemicals
		for (var i = 1; i < data[0].length; i++) {
			  // creates a <table> element and a <tbody> element
			link = data[2][i]

			// create image element
			var img = document.createElement("IMG");
			img.setAttribute("alt", "Chemical button")
			img.setAttribute("height", "100") 
			img.setAttribute("width", "100") 
			img.setAttribute("class", "img-rounded") 
			img.setAttribute("src", link) 

			// create input element
			var input = document.createElement("INPUT")
			input.setAttribute("type", "button")
			input.setAttribute("onclick", "InitChart(data[0][i])")
			input.setAttribute("value", data[0][i])
			body.appendChild(img)
			body.appendChild(input)
		} 
	});
}

chemical_images()

