const request = require('request');
const mydate = new Date();
const fullYearDate = `${mydate.getFullYear()}-${mydate.getMonth()+1}-${mydate.getDate()}`;

function simpleGet(callback){
  request(
    {
      url : 'https://postman-echo.com/get',
      method : 'GET'
    },
    function(error, response, result) {
      callback(result)
    }
  )
}


function simpleGetWithParams(callback){
  request(
    {
      url : 'https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis',
      method : 'GET'
    },
    function(error, response, result) {
      callback(JSON.parse(result).args)
    }
  )
}


function validateTimestamp(callback){
  request(
    {
      url : `https://postman-echo.com/time/valid?timestamp=${fullYearDate}`,
      method : 'GET'
    },
    function(error, response, results){
      callback(results);
    }
  )
}
module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp : validateTimestamp
};
