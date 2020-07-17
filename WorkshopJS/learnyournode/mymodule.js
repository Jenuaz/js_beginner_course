module.exports = function(filepath, ext, callback){
	const fs = require('fs');
	const path = require('path');
	fs.readdir(filepath, (error, data) => {
		if (error) return error;
		data = data.filter(function (file) {
			return path.extname(file) === ext;
		});
	callback(null, data);
	});
}
