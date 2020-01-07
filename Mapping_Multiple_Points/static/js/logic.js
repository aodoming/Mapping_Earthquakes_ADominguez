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
	// let marker = L.marker([34.0522, -118.2437]).addTo(map);

	//OR 

// Change the marker to a circle by using the circle() function . 
	L.circle([34.0522, -118.2437], {
		radius: 100
	}).addTo(map);

	 // OR - Skill Drill 13.4.1

// Create a light-yellow circle with black lines indicating a 300-meter radius of
// Central Los Angeles on a dark map.
	// L.circle([34.0522, -118.2437], {
	// 	radius: 300,
	// 	color:"light-yellow",
	// 	fillcolor: "ffffa1"
	// }).addTo(map);

//	OR using a circlemarker() function instead
// Create a circle using the circleMarker() function. CircleMarker() function measures the radius of the circle in pixels
	L.circleMarker([34.0522, -118.2437],{
		radius:300,
		color:"black",
		fillcolor: "ffffa1"
	}).addTo(map);


// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);