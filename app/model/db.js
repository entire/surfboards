var mongoskin = require('mongoskin');
var db;

exports.createDBForProduction = function() {
	db = mongoskin.db('mongodb://kosvke:rashomon1@ds053438.mongolab.com:53438/boards', {safe:false});
};

exports.createDBForDevelopment = function() {
	db = mongoskin.db('http://localhost:27017/boards', {safe:false});
};

exports.getCurrentDB = function() {
	return db;
};