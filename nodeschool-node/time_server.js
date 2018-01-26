/*var net = require('net');
var strftime = require('strftime')

var server = net.createServer(function(socket){
	console.log("client connected.......");
	
	var reply = strftime('%F %H:%M', new Date());

	socket.write(reply ); // => 2011-06-07 18:51:45
	socket.end();

});

server.listen(process.argv[2], function(){
	console.log("server started listening on port "
		,process.argv[2]);
});*/

var net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))