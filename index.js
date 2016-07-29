var server = require("./server");
var socketServer = require("./socket-server");

var config = {};

console.log( process.env.PORT );

if (process.env.NODE_ENV === 'development') {
  config.port = 3000;
  config.host = 'localhost';
  //server.locals.assetPath = 'http://localhost:8080/';
  //server.locals.isDevelopment = true;
}

if (process.env.NODE_ENV === 'production') {
  config.port = ( process.env.PORT ) ? process.env.PORT : 3000;
  config.host = 'localhost';
  //server.locals.assetPath = 'http://localhost:8080/';
  //server.locals.isDevelopment = false;
}

console.log( process.env.NODE_ENV );

const webServer = server.listen(config.port, function (err) {
  if (err) throw err;
  console.log('Web server listening at http://%s:%d', config.host, config.port);
});

socketServer(webServer);
