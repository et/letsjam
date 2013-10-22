var lastfm = require('../services/lastfm');

function parseLastfmResponse(events) {
  return JSON.parse(events).events.event;
}

/**
 * List of Events
 */
exports.all = function(req, res) {
  lastfm.get('geo.getevents', function(error, response, events) {
    res.jsonp(parseLastfmResponse(events));
  });
};
