var http = require('http');

const regexDoubleSlash = /\/\//g;
const regexSingleSlash = /\//g;

function substractHostName(url){
//	const regexDoubleSlash = /\/\//g;
//	const regexSingleSlash = /\//g;
	
	let index;
	let path;
	let host;
	let hostAndPath = url.substring(url.search(regexDoubleSlash) + 2);
	console.log('---------->' + hostAndPath);
	index = hostAndPath.search(regexSingleSlash);
	console.log('---------->' + index);
	if (index != -1){
		path = hostAndPath.substring(index);
		host = hostAndPath.substring(0, index);
		console.log('\n');
		console.log('PATH: ' + path);
		console.log('HOST: ' + host);
	} else {
		host = 'www.' + hostAndPath;
		console.log('HOST: ' + host);
	}
	console.log(host);
	return host;
}

function substractPath(url){
//	const regexDoubleSlash = /\/\//g;
//	const regexSingleSlash = /\//g;
	
	let index;
	let path;
	let host;
	let hostAndPath = url.substring(url.search(regexDoubleSlash) + 2);
	console.log('---------->' + hostAndPath);
	index = hostAndPath.search(regexSingleSlash);
	console.log('---------->' + index);
	if (index != -1){
		path = hostAndPath.substring(index);
		console.log('\n');
		console.log('PATH: ' + path);
	} else {
		path = '/';
	}
	return path;
}

function getOptions(url){
	let optioner = new Object();
	optioner.host = substractHostName(url);
	optioner.path = substractPath(url);
	console.log('DEBUG: ' + optioner.host);
	console.log('DEBUG: ' + optioner.path);
}

var options = {
  host: 'www.google.com',
  path: '/index.html'
};

var req = http.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  getOptions('http://google.com');
  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    console.log('BODY: ' + body);
    // ...and/or process the entire body here.
  })
});

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
