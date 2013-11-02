var db = require('./db').getCurrentDB();

module.exports = {
  all: function(callback) {
  	console.log('GET request for /boards');
		db.collection('boards').find().toArray(function(err, result) {
			//db.collection('boards').remove({"_id":"52745bc8f40f7eb893000001"}, function(err, result) {callback(err, result)});
			callback(err, result);
		});
				


  },
  
  find: function(callback) {
		db.collection('boards').find().toArray(function(err, result) {
			callback(err, result);
		});
  },

  count: function(callback) {
		var boards = db.collection('boards');
		boards.count(function(err, result) {
			callback(err, result);
		});
  },

  create: function(newBoard, callback) {
		db.collection('boards').insert(newBoard, function(err, result) {
			callback(err, result);
		});
  },

  update: function(id, updatedBoard, callback) {
  	db.collection('boards').find().toArray(function(err, result) {
			if (err) {
				console.log('there was an error with get request for boards!');
				throw err;
			} else {
				var update_name = {name:result[id]["name"]};
				console.log(updatedBoard);
				console.log(update_name);

				var boards = db.collection('boards');
				boards.update(update_name, {$set:updatedBoard}, function(err, result) {
					callback(err, result);
				});
			}
		});
  },

  remove: function(id, callback) {
		db.collection('boards').find().toArray(function(err, result) {
			if (err) {
				console.log('there was an error with get request for boards!');
				throw err;
			} else {

				// var delete_name = {name:result[id]["name"]};
				/*db.collection('boards').remove(delete_name, function(err, result) {
					callback(err, result);	    	
				});*/
			}
		});
  }
}