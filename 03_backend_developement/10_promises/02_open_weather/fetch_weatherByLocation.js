const fetch = require("node-fetch");
const APIKEY = process.env.OPENWEATHER_API_KEY;


function temperatureByLatitudeAndLongitude(lat,lon){
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=${APIKEY}`)
    .then(response => response.json())
    .then(temperature => temperature.list[0].main.temp)
    .catch((error) => {
      console.warn(error);
    });
}

function dateByLatitudeAndLongitude(lat,lon){
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=${APIKEY}`)
    .then(response => response.json())
    .then(date => (date.list[0].dt)*1000)
    .catch((error) => {
      console.warn(error);
    });
}

function weathByLatitudeAndLongitude(lat,lon){
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=${APIKEY}`)
    .then(response => response.json())
    .then(goodweather => ([goodweather.list[0].weather[0].id, goodweather.list[0].weather[0].main, goodweather.list[0].weather[0].description]))
    .catch((error) => {
      console.warn(error);
    });
}

Promise.all([temperatureByLatitudeAndLongitude(32.661343,51.680374), dateByLatitudeAndLongitude(32.661343,51.680374),weathByLatitudeAndLongitude(32.661343,51.680374)])
  .then((results) => {
    console.log({
      date : results[0],
      temperature : results[1],
      weather : results[2]
    });
  });

temperatureByLatitudeAndLongitude(32.661343,51.680374);
dateByLatitudeAndLongitude(32.661343,51.680374);
weathByLatitudeAndLongitude(32.661343,51.680374);
