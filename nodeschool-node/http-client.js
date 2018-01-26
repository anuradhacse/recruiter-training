var http = require('http');

var url = process.argv[2];

http.get(url, callback).on('error', function(e){
	console.log('got error: ', e.message);
});

function callback(response){
	response.setEncoding('utf8');
	response.on("data", console.log);
	response.on('error', console.error);
}

/*

var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)


*/