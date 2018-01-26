var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	console.log("client connected.......");
	response.writeHead(200, { 'content-type': 'text/plain' });
	fs.createReadStream(process.argv[3]).pipe(response);

});


server.listen(process.argv[2], function(){
	console.log("server startesd listening on port "
		,process.argv[2]);
});