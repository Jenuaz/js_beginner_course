const fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], (err, files) => {
	if (err) throw err;
	for (let i = 0; i < files.length; i++) {
	 	if (path.extname(files[i]) == '.'+process.argv[3])
			console.log(files[i]);
	}
});

