var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))



/*var http = require('http');
var url = require('url');
var moment = require('moment');

var server = http.createServer(function(req, res){
	console.log('client connected....');
	var url = url.parse(req.url, true) ;
	if(url.pathname === '/api/parsetime'){
		var isoTime = url.query;
		var date = moment(str);
		var dateComponent = date.utc().format('YYYY-MM-DD');
		var timeComponent = date.utc().format('HH:mm:ss');
		console.log(dateComponent);
		console.log(timeComponent);
		res.writeHead(200, {'Content-Type' : 'application/json'});

	}
	if(url.pathname === '/api/unixtime'){

	}

});

server.listen(process.argv[2], function(){
	console.log('Server started on port ',process.argv[2]);
});*/