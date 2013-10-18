var expect = require('expect.js');
var lastfm = require('../../app/services/lastfm');
var getEvents = require('../fixtures/geo-getevents');

describe("Lastfm Service", function() {
  describe('geo.getevents', function() {
    it('should print the results', function(done) {
      lastfm.get('geo.getevents', function(result) {
        // TODO - mock this with sinon
        expect(result).to.eql(getEvents);
        done();
      });
    });
  });
});
