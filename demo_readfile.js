var http = require('http');
var fs = require('fs');

http.createServer( function( req, res ) {

	fs.readFile('demo_file1.html', function(err, data){
		res.writeHead(200, {'Content-type' : 'text/html'});
		res.write(data);
		res.end();	
	});

}).listen(8080);