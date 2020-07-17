const dirName = process.argv[2];
const ext = '.' + process.argv[3];
const myModule = require('./mymodule.js');

myModule(dirName, ext, (error, list) => {
	//list returned from the callback will contains the files name
	if (error) throw error;
	list.forEach(function (file) {
		console.log(file);
	})
})


