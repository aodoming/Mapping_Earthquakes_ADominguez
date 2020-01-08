// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
	let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add more markers to the map, the latitudes and longitudes are usually nested in an array. 
// To add a marker for each location, we have to iterate through the array and add each latitude and longitude to the map.
// // An array containing each city's location, state, and population.
// 	let cities = [{
// 		location: [40.7128, -74.0059],
// 		city: "New York City",
// 		state: "NY",
// 		population: 8398748
// 	},
// 	{
// 		location: [41.8781, -87.6298],
// 		city: "Chicago",
// 		state: "IL",
// 		population: 2705994
// 	},
// 	{
// 		location: [29.7604, -95.3698],
// 		city: "Houston",
// 		state: "TX",
// 		population: 2325502
// 	},
// 	{
// 		location: [34.0522, -118.2437],
// 		city: "Los Angeles",
// 		state: "CA",
// 		population: 3990456
// 	},
// 	{
// 		location: [33.4484, -112.0740],
// 		city: "Phoenix",
// 		state: "AZ",
// 		population: 1660272
// 	}
// 	];

// Get data from cities.js
//  It's a best practice to have the data in an external file and refer to that file
	let cityData = cities;


//  Iterate through each city object and add each city location to the marker() function
// Use the console.log() function to print each object in the array to the console
// Loop through the cities array and create one marker for each city.
	cityData.forEach(function(city) {
		console.log(city)
	});

// Now, add each city’s location to the map by adding the location to the marker() function.
// Loop through the cities array and create one marker for each city.
	// cityData.forEach(function(city) {
	// 	console.log(city)
	// L.marker(city.location).addTo(map);
	// });

// Bind a Popup to the Marker by adding data from each object in the cities array, 
// use Leaflet’s bindPopup() method on the marker() function above.
// Also, format the population with a thousands separator by using the toLocaleString() method
// on the city.population in the bindPopup() method

	// cityData.forEach(function(city) {
	// 	console.log(city)
	// L.marker(city.location)
	// .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
	// .addTo(map);
	// });

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

// Skill Drill
// Create an orange circle popup marker for each city, with a lineweight of 4, 
// a radius where the population number is decreased by 200,000,  that's on a dark map

	cityData.forEach(function(city) {
		console.log(city)
	L.circleMarker(city.location, {
		radius:city.population/200000,
		color: "black",
		fillColor: '#ffffa1'
	})
	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
	.addTo(map);
	});

// Alternatively, we can create a circle using the circleMarker() function.
	// L.circleMarker([34.0522, -118.2437], {
	// 	radius:300,
	// 	color: "black",
	// 	fillColor: '#ffffa1'
	// }).addTo(map);


// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);