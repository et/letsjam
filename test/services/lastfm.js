var expect  = require('expect.js')
  , request = require('request')
  , sinon   = require('sinon')
  , lastfm  = require('../../app/services/lastfm')
  , events  = require('../fixtures/geo-getevents');

describe("Lastfm Service", function() {
  before(function(done) {
    sinon.stub(request, 'get').yields(null, null, JSON.stringify(events));
    done();
  });

  after(function(done) {
    request.get.restore();
    done();
  });

  it('can retreive a list of events', function(done) {
    lastfm.get('geo.getevents', function(err, response, result) {
      if(err) return done(err);
      expect(result).to.not.be.empty;
      done();
    });
  });
});
