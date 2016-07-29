var server = require("./server");
var socketServer = require("./socket-server");

var config = {};

if (process.env.NODE_ENV === 'development') {
  config.port = 3000;
  config.host = 'localhost';
  //server.locals.assetPath = 'http://localhost:8080/';
  //server.locals.isDevelopment = true;
}

if (process.env.NODE_ENV === 'production') {
  config.port = 443;
  config.host = 'mattmessage.herokuapp.com';
  //server.locals.assetPath = 'http://localhost:8080/';
  //server.locals.isDevelopment = false;
}

const webServer = server.listen(config.port, config.host, function (err) {
  if (err) throw err;
  console.log('Web server listening at http://%s:%d', config.host, config.port);
});

socketServer(webServer);
