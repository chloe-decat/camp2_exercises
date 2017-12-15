const fetch = require("node-fetch");
const APIKEY = process.env.GOOGLEPLACE_API_KEY;
const API_KEY = process.env.OPENWEATHER_API_KEY;

function temperatureAt(input){
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${input}&key=${APIKEY}`)
    .then(response => response.json())
    .then(localisation => localisation.results[0].geometry.location)
    .then(coordinates => fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lng}&units=metric&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(function (temperature) {
        return temperature.list[0].main.temp;
      })
      .catch((error) => {
        console.warn(error);
      }));
}

temperatureAt("Decathlon Campus")
  .then((temperature) => {
    console.log(temperature);
  });







// Displays 17 ˚C.


// Let's mix what we learned today. We want to make a function that will give us the temperature from a vague string.
// Something like that: temperatureAt("Decathlon Campus"); // Displays 17 ˚C.
// The goal is to use only one chain of Promise to first get the coordinates from Google Places Web Service
// and then pass the coordinates to the previous function weatherByLatitudeAndLongitude and then display the temperature.
