
/*
 * GET home page.
 */

var rest = require('restler')
  , fs = require('fs');

var api_key = process.env.LAST_FM_KEY;

exports.index = function(req, res) {
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
