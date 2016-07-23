var express = require('express');
var pg = require('pg');
var app = express();
var fs = require('fs');


var indexTemplate = fs.readFileSync('index.html', 'utf8');



//sets the port the port set by heroku, if not sets to 8080.
var port=process.env.PORT || 8080;

app.get('/', function (req, res) {
	res.send(indexTemplate);
});

app.use('/app', express.static('app'));

//Postgres
app.get('/items', function (request, res) {
  pg.connect( 'postgres://uffenisozqdsxl:vhQncKyzPtSGZj78ygXve9M_NJ@ec2-54-225-89-110.compute-1.amazonaws.com:5432/dfq5t551ivghpb?ssl=true', function(err, client, done) {
   console.log(err);
    client.query('SELECT * FROM items', function(err, result) {
      console.log(result.rows);
		res.send(result.rows);
      // done();
     //  if (err)
     //   { console.error(err); response.send("Error " + err); }
     //  else
     //   { response.render('pages/db', {results: result.rows} ); }
   		// res.send('testitem');
    });
  });
});

app.listen(port, function () {
	console.log('Example app listening on port!' + port );
});