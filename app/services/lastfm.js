var request = require('request');

exports.get = function(method, callback) {
  var apiKey = process.env.LAST_FM_KEY;
  request.get('http://ws.audioscrobbler.com/2.0/', {
    qs: {
      api_key: apiKey
    , format: 'json'
    , method: method
    , location: 'boulder'
    }
  }, callback);
};
