var express = require('express');
var app = express();

// load configuration
require('./config/config')(app, express);

// load controllers
require('./lib/load')(app);


app.listen(app.port, function() {
	console.log('Listening on Port ' + app.port);
});
