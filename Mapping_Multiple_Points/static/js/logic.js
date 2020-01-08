// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 14);


// In the logic.js file, replace the marker variable (which we used to map one location) with the
// cities variable that references the five most populous cities array in the following code block.
// An array containing each city's location, state, and population.
// let cities = [{
// 	location: [40.7128, -74.0059],
// 	city: "New York City",
// 	state: "NY",
// 	population: 8398748
//   },
//   {
// 	location: [41.8781, -87.6298],
// 	city: "Chicago",
// 	state: "IL",
// 	population: 2705994
//   },
//   {
// 	location: [29.7604, -95.3698],
// 	city: "Houston",
// 	state: "TX",
// 	population: 2325502
//   },
//   {
// 	location: [34.0522, -118.2437],
// 	city: "Los Angeles",
// 	state: "CA",
// 	population: 3990456
//   },
//   {
// 	location: [33.4484, -112.0740],
// 	city: "Phoenix",
// 	state: "AZ",
// 	population: 1660272
//   }
//   ];

// Add a variable and assign it to the cities array. Get data from cities.js
let cityData = cities;

// Loop (iterate) through the cities array and create one marker for each city.
// Use the console.log() function inside the {} to print each object in the array to the console:
	// cityData.forEach(function(city) {
	// 	console.log(city)
	// });

// Add each city’s location to the map by adding the location to the marker() function.
	// cityData.forEach(function(city) {
	// 	console.log(city)
	// 	L.marker(city.location).addTo(map);
	// });


// 									Bind a Popup to the Marker.
// Use Leaflet’s bindPopup() method on the marker() function to create one marker for each city.
// Edit the forEach function (above code) and add the bindPopup() method. Inside the parentheses of the bindPopup()
// retrieve the name of the city, state, and population.
// Also,format the population with a thousands separator by using the toLocaleString() method on
//  the city.population in the bindPopup() method

	// cityData.forEach(function(city) {
	// 	console.log(city)
	// 	L.marker(city.location)
	// 	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString()+ "</h3>")
	// 	.addTo(map);
	// });

// Next, change the marker for each city to a circle that has a radius equivalent 
// to the city’s population. Use the circleMarker() function. Assign the “radius” key to the population by using city.population.

cityData.forEach(function(city) {
	console.log(city)
	L.circleMarker(city.location, {
		radius: city.population/100000
	})
	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString()+ "</h3>")
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