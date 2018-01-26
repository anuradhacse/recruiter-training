http = require('http');
const bl = require('bl');

url = process.argv[2];

http.get(url, callback);

function callback(response){
	response.pipe(bl(function(err, data){
		if(err){
			return console.log(err);
		}
		console.log(data.toString().length);
		console.log(data.toString());
	}));
}