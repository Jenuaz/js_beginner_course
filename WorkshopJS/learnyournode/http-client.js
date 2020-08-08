var http = require('http')
var https = require('https')

var url = process.argv[2]
var prefix = url.substring(0,8)

if (prefix === 'https://'){
  https.get(url, function (response) {
    response.on('data', function (data) {
      console.log(data.toString());
    })
  })
} else {
  http.get(url, function (response) {
    response.on('data', function (data) {
      console.log(data.toString());
    })
  })
}

/*
var http = require('http');

const regexDoubleSlash = /\/\//g;
const regexSingleSlash = /\//g;
const regexThreeW = /www\./g;

function substractHostName(url){
	let index;
	let path;
	let host;
	let hostAndPath;
	if (url.search(regexDoubleSlash) != -1){
		hostAndPath = url.substring(url.search(regexDoubleSlash) + 2);
	} else {
		hostAndPath = url;
	}
	index = hostAndPath.search(regexSingleSlash);
	if (index != -1){
		path = hostAndPath.substring(index);
		host = hostAndPath.substring(0, index);
	} else {
		if (hostAndPath.search(regexThreeW) == -1){
			host = 'www.' + hostAndPath;
		} else {
			host = hostAndPath;
		}
	}
	//console.log('DEBUG: ' + host);
	return host;
}

function substractPath(url){
	let index;
	let path;
	let hostAndPath = url.substring(url.search(regexDoubleSlash) + 2);
	index = hostAndPath.search(regexSingleSlash);
	if (index != -1){
		path = hostAndPath.substring(index);
	} else {
		path = '/';
	}
	//console.log('DEBUG: ' + path);
	return path;
}

function getOptions(url){
	let optioner = new Object();
	optioner.host = substractHostName(url);
	optioner.path = substractPath(url);
	return optioner;
}

var options = getOptions(process.argv[2]);

var req = http.get(process.argv[2], function(res) {
  //console.log('STATUS: ' + res.statusCode);
  //console.log('HEADERS: ' + JSON.stringify(res.headers)); 
  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.setEncoding('utf8');
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
*/
