var lastfm = require('../services/lastfm');

/**
 * List of Events
 */
exports.all = function(req, res) {
  res.json("{[]}");
  //lastfm.get('geo.getevents', function(events) {
  //  res.json(events);
  //});
};
