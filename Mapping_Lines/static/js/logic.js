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


// In the logic.js file, replace the marker variable (which we used to map one location) with the
// cities variable that references the five most populous cities array in the following code block.
// An array containing each city's location, state, and population.
	let cities = [{
		location: [40.7128, -74.0059],
		city: "New York City",
		state: "NY",
		population: 8398748
	},
	{
		location: [41.8781, -87.6298],
		city: "Chicago",
		state: "IL",
		population: 2705994
	},
	{
		location: [29.7604, -95.3698],
		city: "Houston",
		state: "TX",
		population: 2325502
	},
	{
		location: [34.0522, -118.2437],
		city: "Los Angeles",
		state: "CA",
		population: 3990456
	},
	{
		location: [33.4484, -112.0740],
		city: "Phoenix",
		state: "AZ",
		population: 1660272
	}
	];


// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);