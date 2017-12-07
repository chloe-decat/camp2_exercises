const request = require("request");
const APIKEY = process.env.OPENWEATHER_API_KEY;

function weatherByLatitudeAndLongitude(lat,lon){
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=${APIKEY}`,
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    },
    function(error, response, result) {
      const weatherObject = JSON.parse(result);
      //console.log(weatherObject);
      //console.log(weatherObject.list[2]);
      //console.log(weatherObject.list[0].dt);
      //console.log(weatherObject.list[0].main.temp);
      //console.log([weatherObject.list[0].weather[0].id, weatherObject.list[0].weather[0].main, weatherObject.list[0].weather[0].description]);
      const temp = weatherObject.list[0].main.temp;
      const da = new Date(weatherObject.list[0].dt*1000);
      const weath = [weatherObject.list[0].weather[0].id, weatherObject.list[0].weather[0].main, weatherObject.list[0].weather[0].description];
      const globalObject= {
        date : da.toLocaleDateString(),
        temperature : temp,
        weather : weath
      };
      console.log(globalObject);
      return globalObject;
    }
  );
}
function weatherByZipcode(zipcode,countrycode) {
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countrycode}&units=metric&APPID=${APIKEY}`,
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    },
    function(error, response, result) {
      const weatherObject = JSON.parse(result);
      //console.log(weatherObject);
      //console.log(weatherObject.list[2]);
      //console.log(weatherObject.list[0].dt);
      //console.log(weatherObject.list[0].main.temp);
      //console.log([weatherObject.list[0].weather[0].id, weatherObject.list[0].weather[0].main, weatherObject.list[0].weather[0].description]);
      const temp = weatherObject.list[0].main.temp;
      const da = new Date(weatherObject.list[0].dt*1000);
      const weath = [weatherObject.list[0].weather[0].id, weatherObject.list[0].weather[0].main, weatherObject.list[0].weather[0].description];
      const globalObject= {
        date : da.toLocaleDateString(),
        temperature : temp,
        weather : weath
      };
      console.log(globalObject);
      return globalObject;
    }
  );
}

weatherByZipcode(59800,"fr");
weatherByLatitudeAndLongitude(32.661343,51.680374);

module.exports = weatherByLatitudeAndLongitude;
module.exports = weatherByZipcode;
