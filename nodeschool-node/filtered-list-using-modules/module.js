module.exports = filterFileList;

var path = require('path');
var fs = require('fs');

function filterFileList(dirPath, extention, finalCallBack){
	fs.readdir(dirPath, function (err, fileList){
		if(err) finalCallBack(err);
		else {
			filteredFileList = fileList.filter( file => {
				return path.extname(file) === '.' + extention;
			});
			finalCallBack(null, filteredFileList);
		}
		}
	);

	}



