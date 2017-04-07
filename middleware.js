var middleware = {
	requireAuthentication: function (req, resp, next){
		console.log('private route hit!');
		next();
	},
	logger: function(req, resp, next){
		var date = new Date()
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' on -' + date.toString());
		next();
	}
}

module.exports = middleware;