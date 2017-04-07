var express = require('express');
var app = express();

/*		HEROKU LESSON
 ---> Heroku establishes its own port, you can ask for this port thorugh the process.env.PORT 
*/
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js');

// app.get('/', function (req, resp) {
// 	resp.send('Hello Express!');
// });


// var middleware = {
// 	requireAuthentication: function (req, resp, next){
// 		console.log('private route hit!');
// 		next();
// 	},
// 	logger: function(req, resp, next){
// 		var date = new Date()
// 		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' on -' + date.toString());
// 		next();
// 	}
// }

/* Lesson #3: Middleware
			
			1-  It allows you to run your own functions, and your functions defined in middleware that
			    you use get called with every request! 
			2- You must always run your middleware before anything else

*/
// --> Lesson 3b, if you want to require this middleware for all your functions then just define it here
//     otherwise just pass is as an argument to the app.get or app.use that you want to use it on. For
//     now, let's comment it out and then just add it to about us.

//  --  app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get('/aboutus',middleware.requireAuthentication, function (req, resp) {
	resp.send('About us :-)! ');
});

// --> The class had the index.html inside a public directory 
//     so you might do  __dirname +'/public'
app.use(express.static(__dirname));
// console.log(__dirname);


// At the end, you tell it to listen to specific port. 
app.listen(PORT, function () {
	console.log('Server listering on port ' + PORT + ' ...');
});