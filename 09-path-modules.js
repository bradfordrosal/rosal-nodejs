const path = require('path');

// prints the file separator
console.log(path.sep);

// joins the indicated folders and file into a single path
const filePath = path.join('\content', 'subfolder', 'test.txt');
console.log(filePath);

// returns the base file of the joined path in the method above
const base = path.basename(filePath);
console.log(base);

// returns the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);