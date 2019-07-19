
var http = require('http');
var getTitleAtUrl = require('get-title-at-url');

var server = http.createServer(function(req, resp){

	var url = process.env.MYURL || 'http://www.google.com';

	getTitleAtUrl(url, function(title){
	  	console.log('title', title);

	  	var httpString = `
		<!doctype html>
		<html>
			<head>
		        <title>` + title + `</title>
		    </head>
			<body>
					<img border="0" src="https://jenkins-x.io/images/logo.png" width="300" height="300" />
					<h2>` + title + `</h2>
		</div>
			</body>
		</html>`

		resp.writeHead(200, {'Content-Type': 'text/html'});
		resp.write(httpString);
		resp.end();
	});

});

server.listen(8080);


