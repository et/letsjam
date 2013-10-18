var rest = require('restler');

exports.get = function(method, callback) {
  var apiKey = process.env.LAST_FM_KEY;
  rest.get('http://ws.audioscrobbler.com/2.0/', {
    query: {
      api_key: apiKey
    , format: 'json'
    , method: method
    , location: 'boulder'
    }
  })
  .on('complete', function(result) {
    callback(result);
  });
};
