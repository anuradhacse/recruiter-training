var filterModule = require('./module');

directoryPath = process.argv[2];
extension = process.argv[3];//extention sent without (.) dot

filterModule(directoryPath, extension, finalCallback);

function finalCallback(err, fileList){
	if(err) console.log('Something went wrong, err');
	else fileList.forEach( file => console.log(file));
}






