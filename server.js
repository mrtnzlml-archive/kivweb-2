module.exports = function() {

	var http = require('http');
	var PORT = 8000;

	var server = http.createServer(function(request, response) {
		//console.log(request.url)
		//debugger;
		response.writeHead(200, {'content-type': 'text/html'}); //text/plain
		response.write("<h1>hello</h1>\n");
		setTimeout(function() {
			response.end("<p>world</p>\n");
		}, 2000);
	});

	server.listen(PORT, function() {
		console.log('Server is listening on port ' + PORT);
	});

}