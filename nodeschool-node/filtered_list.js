var fs = require('fs');
var path = require('path')

directoryPath = process.argv[2];
extension = '.' + process.argv[3];//path.extname returns with .

// console.log(directoryPath);
// console.log(extension);

fs.readdir(directoryPath, callbackMethod);

function callbackMethod(err, filelist){
	if(err){
		console.log('something went wrong!!', err);
	}
	else{
		
		var filteredList = filelist.filter( x => {
			return (path.extname(x) === extension);
		});
		for(var i=0; i<filteredList.length; ++i){
	console.log(filteredList[i]);
}
	}
}

/*
 fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })

*/
