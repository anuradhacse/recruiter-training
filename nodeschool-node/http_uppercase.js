var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(request, response){
	console.log("client connected.......");

	if(request.method !== 'POST'){
		return response.end('Send me a POST\n')
	}

	request.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(response)

});


server.listen(process.argv[2], function(){
	console.log("server startesd listening on port "
		,process.argv[2]);
});