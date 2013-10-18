var lastfm = require('../services/lastfm');

exports.render = function(req, res) {
  lastfm.get('geo.getevents', function(result) {
    res.render('index', result);
  });
};
