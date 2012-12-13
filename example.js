var trueName = require('./rumplestiltskin').trueName;

var myMap = {};

function addToMap(key, val) {
	myMap[trueName(key)] = val;
}

function getFromMap(key) {
	return myMap[trueName(key)];
}

addToMap({ a: 1, b: '1' }, 'hello');
addToMap({ a: '1', b: 1 }, 'world');

console.log(getFromMap({ b: '1', a: 1 }));
console.log(getFromMap({ b: 1, a: '1' }));

var emaNeurt = require('./rumplestiltskin').emaNeurt;

console.log(emaNeurt({ hello: 'world' }));
