var express = require('express');
var app = express();

// load configuration
require('./config/environment')(app, express);

// load controllers
require('./lib/load')(app);

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('Listening on Port ' + port);	
});

