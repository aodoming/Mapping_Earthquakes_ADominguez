// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 14);

// An alternative to using the setView() method is to modify each attribute in the map object using the curly braces notation
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

//  Add a marker to the map for Los Angeles, California.
	//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// OR
//Change the marker on our map to a point or dot, we’ll use the circle() function. 
// The circle() function will place a circle on the map at the given coordinates
	// L.circle([34.0522, -118.2437], {
	// 	radius: 100
	// }).addTo(map);

// OR
// Alternatively, we can create a circle using the circleMarker() function. 
// The circleMarker() function measures the radius of the circle in pixels, with the default radius set at 10 pixels

	L.circleMarker([34.0522, -118.2437], {
		radius: 300,
		color: "black",
		fillColor: "#ffffa1"
	}).addTo(map);

// Create the tile layer that will be the background of our map.
//You may replace the “streets-v11” in our tileLayer() code with “dark-v10” for a dark background
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);