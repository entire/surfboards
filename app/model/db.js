var mongoskin = require('mongoskin');
var db;

exports.createDBForProduction = function() {
	// used mongolab.com
	// replace yyyyyyyyy with username and xxxxxxxxx with password
	db = mongoskin.db('mongodb://yyyyyyyy:xxxxxxxxxx@ds053438.mongolab.com:53438/boards', {safe:false});
};

exports.createDBForDevelopment = function() {
	db = mongoskin.db('http://localhost:27017/boards', {safe:false});
};

exports.getCurrentDB = function() {
	return db;
};