// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center of the Earth
	//let map = L.map('mapid').setView([30, 30], 2);

// Map a GeoJSON Point. Add GeoJSON data.
	let sanFranAirport =
	{"type":"FeatureCollection","features":[{
		"type":"Feature",
		"properties":{
			"id":"3469",
			"name":"San Francisco International Airport",
			"city":"San Francisco",
			"country":"United States",
			"faa":"SFO",
			"icao":"KSFO",
			"alt":"13",
			"tz-offset":"-8",
			"dst":"A",
			"tz":"America/Los_Angeles"},
			"geometry":{
				"type":"Point",
				"coordinates":[-122.375,37.61899948120117]}}
	]};

// Create the tile layer that will be the background of our map. Map styles
	let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		accessToken: API_KEY
	});

//  Adding multiple Maps
// We create the dark view tile layer that will be an option for our map.
	let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satelliteStreets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		accessToken: API_KEY
	});

// Add both map variables to a new variable, baseMaps.
// Create a base layer that holds both maps.
	let baseMaps = {
		"Streets": streets,
		"Satellite": satelliteStreets
	};

// Create the map object with center, zoom level and default layer.
	let map = L.map('mapid', {
		center: [39.5, -98.5],
		zoom: 3,
		layers: [streets]
	})

// Pass our map layers into our layers control and add the layers control to the map.
	L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
    let torontoHoods = "https://raw.githubusercontent.com/aodoming/Mapping_Earthquakes_ADominguez/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

// Create a style for the lines.
	let myStyle = {
		color: "blue",
        weight: 1,
        fillColor: "yellow"
	}

// Retrieve the earthquake GeoJSON data.
	d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
	// Creating a GeoJSON layer with the retrieved data.
	L.geoJson(data).addTo(map);
	});


//Skill Drill
// Grabbing our GeoJSON data.
	// d3.json(torontoHoods).then(function(data) {
	// 	console.log(data);
	// // Creating a GeoJSON layer with the retrieved data.
    // L.geoJson(data).addTo(map);


    // d3.json(torontoHoods).then(function(data) {
	// 	console.log(data);
	// // Creating a GeoJSON layer with the retrieved data.
    // L.geoJson(data, {
	// 	//color:'#ffffa1',
	// 	//weight:1,
	// 	style: myStyle,
	// 	onEachFeature: function(feature, layer) {
	// 	layer.bindPopup("<h3> Neighborhood:" + feature.properties.AREA_NAME + "</h3>");
	// 	}

	// })
	// .addTo(map);
	// });
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);