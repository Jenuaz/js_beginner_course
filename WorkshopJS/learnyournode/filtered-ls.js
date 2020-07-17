const fs = require('fs');
const path = require('path');
const ext = '.' + process.argv[3];

if (process.argv.length > 3){
fs.readdir(process.argv[2], (err, files) => {
	//if (err) return console.error(err);
	if (err) throw err;
	//files.forEach(funcion(file) {
	//if (path.extname(file) == ext) {
	//	console.log(file);
	//}
	//}))
	for (let i = 0; i < files.length; i++) {
	 	if (path.extname(files[i]) == ext)
			console.log(files[i]);
	}
});
} else {
	console.log('To run the program you need follow next order:');
	console.error('	node fileForExecution arg1 arg2 \n' + 
			'Where: \n' + 
		'	arg1 is path where direction located; \n' +
		'	arg2 is extension type "txt ...";');
}
