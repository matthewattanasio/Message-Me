var express = require('express');
var app = express();

//sets the port the port set by heroku, if not sets to 8080.
var port=process.env.PORT || 8080;



app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(port, function () {
	console.log('Example app listening on port 3000!');
});