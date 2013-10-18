
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development"
  , config = require('./config/config');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.locals.pretty = true;
}

require('./config/routes')(app);

var port = config.port;
http.createServer(app).listen(port, function(){
  console.log('Express server listening on port ' + port);
});
