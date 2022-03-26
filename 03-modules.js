// CommonJS - every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const alternative = require('./6-alternative-syntax');

// mag display ang iyang result maski wala nag export sa file 7 kay naa may function na gi-invoke sa file 7
require('./7-mind-grenade');

// logs the exports from file 6
console.log(alternative);

// sayHI and names kay gikan sa na-export sa file 4 and 5 
sayHi('Kirby');
sayHi(names.name1);
sayHi(names.name2);