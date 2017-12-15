const APIKEY = process.env.OPENWEATHER_API_KEY;
const fetch = require("node-fetch");

function weatherByCity(city){
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APIKEY}`)
    .then(response => response.json())
    .then(temperature => (temperature.main.temp)+ " °C")
    .catch((error) => {
      console.warn(error);
    });
}

weatherByCity("london")
  .then((temperature) => {
    console.log(temperature);
  });

module.exports = weatherByCity;
