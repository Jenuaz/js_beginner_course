let body = [];
let http = require('http');

http.get(url, function(response)){
	response.on('data', function(chunk){
		body += chunk;		
	});
	response.on('end', function() {
		consle.log(body);
	});
});
