var fs = require('fs');

content = fs.readFile(process.argv[2], doneReading);

function doneReading(err, fileContent){

	if(err){
		console.log("Something went wrong!!", err);
	}
	else{
		result = fileContent.toString().split('\n')
		console.log(result.length - 1);
	}
}