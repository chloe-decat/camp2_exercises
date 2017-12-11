const OAuth = require("OAuth");
const request = require("request");

const myOAuth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);

// Put the express, port and OAuth initialization here...
const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?&count=2&screen_name=";

function fetchTweet (text, callback){
  // Again, replace string by your credentials.
  myOAuth.get(url + text, process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {
    const timeline = JSON.parse(data);
    if (error) {
      console.log(error);
    }
    const text = timeline.map(function (tweet) {
      return tweet.text;
    });
    callback(text);// Do something with data...
  });
}
// Replace string with correct credentials
const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const wurl = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

function getEmotion(text, callback) {
  const uri = encodeURI(wurl + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);
  request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
    callback(body);
  });
}



function watson(text, callback) {
  fetchTweet (text, (texts) => {
    texts.map(text => getEmotion(text, (emotion) => {
      callback(emotion);
    }));
  });
}



watson("realdonaldtrump", console.log);
