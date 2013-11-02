var boards = require('../../model/boards');

// all boards
module.exports = function(app) {
	
	// all boards
	app.get('/boards', function (req, res) {
    boards.all(function (err, results) {
      if (err) {
      	console.log('there was an error with getting all boards');
				throw err;
			} else {
				res.json(results);
				res.statusCode = 200;
			}
    });
  });

	// find board
	app.get('/boards/:id', function (req, res) {
		var id = req.params.id;
		boards.find(function(err, results) {
			if (err) {
				console.log('there was an error with get request for boards');
				throw err;
			} else {
				res.json(results[id-1]);
				res.statusCode = 200;
			}
		});
	});

	// get board count
	app.get('/boards', function(req, res) {
		boards.count(function(err, results) {
			if (err) {
				console.log('there was an error with getting count');
				throw err;
			} else {
				var boardcount = {
				board_type: "surfboard",
				count: count
				};
				
				res.json(boardcount);
			}
		});
	});

	// create board
	app.post('/boards', function(req, res) {
		if (!req.body.hasOwnProperty('name') || 
			!req.body.hasOwnProperty('company') ||
			!req.body.hasOwnProperty('length') ||
			!req.body.hasOwnProperty('width') ||
			!req.body.hasOwnProperty('thickness') ||
			!req.body.hasOwnProperty('volume') ||
			!req.body.hasOwnProperty('type')) {
			res.statusCode = 400;
			return res.send('Error 400: Post syntax incorrect');
		} else {

			var newBoard = {
				name : req.body.name,
				company : req.body.company,
				length: req.body.length,
				width : req.body.width,
				thickness : req.body.thickness,
				volume : req.body.volume,
				type : req.body.type
			};

			boards.create(newBoard, function(err, results) {
				res.statusCode = 200;
				res.send(true);
			});

		}
	});

	// update board
	app.put('/boards', function(req, res) {

		boards.update(function(err, results) {

		});
	});

	// delete board
	app.del('/boards', function(req, res) {
		var id = req.params.id-1;
		boards.remove(id, function(err, results) {
			if (err) {
				console.log('there was an error with deleting board');
				throw err;
			} else {
				res.send(true);
				res.statusCode = 200;
			}
		});
	});


};