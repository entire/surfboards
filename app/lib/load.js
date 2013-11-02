var main = ('../controllers/main/index');

module.exports = function (app) {

	require('../controllers/main/index')(app);
	require('../controllers/boards/index')(app);

}