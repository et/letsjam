module.exports = function(app) {
  //Home route
  var index = require('../app/controllers/index');
  app.get('/', index.render);

  var events = require('../app/controllers/events');
  app.get('/events', events.all);
};
