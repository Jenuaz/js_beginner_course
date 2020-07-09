let i = 2;
let commulate = 0;
while (i < process.argv.length) {
	commulate += +process.argv[i];
	i++;
}
console.log(commulate);
