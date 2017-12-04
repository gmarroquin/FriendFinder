//Require Path
var path = require('path');

// ROUTING
module.exports = function(app){

	//Show survey
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	//Default Catch all - Route to homepage 
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}