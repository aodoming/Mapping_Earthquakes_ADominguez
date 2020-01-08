//                   illustrating how lines are mapped by first mapping the airline route from
//               Los Angeles to San Francisco. Mapping airline routes will help us understand how tectonic plate data is added to a map.


// Add console.log to check to see if our code is working.
	console.log("working");

// Map the airline route from Los Angeles to San Francisco.
// Create the map object with a center and zoom level.
	let map = L.map('mapid').setView([[36.1733, -120.1794]], 7);

// Coordinates for each point to be used in the line.
// Coordinates need to be in an array. We can assign the array to the line variable like this:
	let line = [
		[33.9416, -118.4085],
		[37.6213, -122.3790]
	];

// Create a line on a map using the Leaflet polyline() function.
// Create a polyline using the line coordinates and make the line red.
	L.polyline(line, {
		color: "red"
	}).addTo(map);

// Get data from cities.js
//  It's a best practice to have the data in an external file and refer to that file
let cityData = cities;

// change the marker for each city to a circle that has a radius equivalent to the city’s population.
// Assign the “radius” key to the population by using city.population.
// Decrease each city's radius so the circle markers fit on the map; by divide the city.population value by “100000”

cityData.forEach(function(city) {
	console.log(city)
L.circleMarker(city.location, {
	radius:city.population/100000
})
.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
});


// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);