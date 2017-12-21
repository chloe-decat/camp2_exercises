const request = require("request");
const APIKEY = process.env.OPENWEATHER_API_KEY;

function weatherByCity(city){
  return request(
    {
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APIKEY}`,
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    },
    function(error, response, result) {
      const weatherObject = JSON.parse(result);
      console.log(weatherObject.main.temp + " °C");
      return weatherObject.main.temp + " °C";
    }
  );
}

weatherByCity("london");

module.exports = weatherByCity;
