
/*
 * GET home page.
 */

var superagent = require('superagent')
  , fs = require('fs');

var api_key = process.env.LAST_FM_KEY;

exports.index = function(req, res){
  var stream = fs.createWriteStream('./lastfm.json');
  superagent.get('http://ws.audioscrobbler.com/2.0/')
    .query({
      api_key: api_key
    , format: 'json'
    , method: 'geo.getevents'
    , location: 'boulder'
    })
    .end(function(response){
      if(response.ok) {
        res.render('index', response.body);
      }
    });
};
