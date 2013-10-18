var rest = require('restler')

exports.render = function(req, res) {
  var api_key = process.env.LAST_FM_KEY;

  rest.get('http://ws.audioscrobbler.com/2.0/', {
      query: {
        api_key: api_key
    , format: 'json'
    , method: 'geo.getevents'
    , location: 'boulder'
      }
      })
  .on('complete', function(result) {
    console.log(result);
    res.render('index', result);
  });
};
