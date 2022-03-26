// GLOBALS - NO WINDOW

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// ma-print sa console ang file path ani na file
console.log(__dirname);

// mag-print siya ug hello world sa console every 1 second (Press Ctrl+C to terminate)
setInterval(() =>{
	console.log("Hello World");
}, 1000);