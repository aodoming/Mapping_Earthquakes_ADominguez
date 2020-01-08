// Note: When handling large datasets, it's a best practice to have the data in an external file and
// refer to that file and dataset in the logic.js file. Even though our cities array is not that large,
// let’s create a new file in the "js" folder called cities.js. Cut & paste the cities array data from
// the logic.js to the cities.js file (as a way of practicing the best practice)

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