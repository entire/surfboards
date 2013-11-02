module.exports = function(app, express) {
		
	app.use(express.logger('tiny'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.set('port', process.env.PORT || 3000);

	app.use(express.logger('dev'));
	app.use(express.json());

	app.use(app.router);

 	app.configure('development', function() {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
  });
  
  app.configure('production', function() {
    app.use(express.errorHandler());
  });
};