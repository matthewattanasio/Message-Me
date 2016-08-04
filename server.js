var path = require("path");
var express = require("express");

const app = express();

app.use(express.static('app'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

module.exports = app;
