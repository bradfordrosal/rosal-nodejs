const { readFileSync, writeFileSync} = require('fs');

console.log('start');
// reads the  text inside the indicated txt files
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// writes to a txt file 
// (creates a file if the indicated file does not exist)
// (overwrites the text inside the txt file if the indicated file already exist)
writeFileSync('./content/result-sync.txt', 
	`The result is "${first}" and "${second}".`,
	// if dili nimo fusto i-overwrite:
	{ flag: 'a'}
	);

console.log('done with this task');
console.log('starting next one');