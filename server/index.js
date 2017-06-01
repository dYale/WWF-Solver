var express = require('express');
var Path = require('path');
var routes = express.Router();

//
//route to your index.html WHERE THE FRONT END WILL GO
//
// var assetFolder = Path.resolve(__dirname, '../client');
// routes.use(express.static(assetFolder));

if(process.env.NODE_ENV !== 'test') {
  //
  // The Catch-all Route
  // This is for supporting browser history pushstate.
  // NOTE: Make sure this route is always LAST.
  //
  //
  // We're in development or production mode;
  // create and run a real server.
  //
  var app = express();

  // Parse incoming request bodies as JSON
  app.use( require('body-parser').json() );

  // Mount our main router
  app.use('/', routes);
  

  // Start the server!
  var port = process.env.PORT || 4000;
  var host = process.env.HOST || 'http://localhost:' + port;
  app.listen(port);

  console.log("Listening on port", port);
} else {
  // We're in test mode; make this file importable instead.
  module.exports = routes;
}
