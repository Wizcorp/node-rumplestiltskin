[![Build Status](https://secure.travis-ci.org/Wizcorp/node-rumplestiltskin.png)](http://travis-ci.org/Wizcorp/node-rumplestiltskin)

node-rumplestiltskin
====================

*Reveals an object's true name.*

----

Have you ever wanted to use an object as a key? If you know an object's true name you can.

You're probably thinking, "Oh great, an object hashing function." But that's not what this does. Rumplestiltskin gives you a consistent string representation for an object so you can use it as a key in a map.

Example
=======

```javascript
var trueName = require('rumplestiltskin').trueName;

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
```

True names are not cheap. The larger, more complicated an object is, the higher the cost. When you want to know if two objects are equal, use a deepEqual function do not compare their true names.

If you want a hash for objects, just feed true names into a hash function.

Salt
====

As a bonus, Rumplestiltskin can also accept a salt to prepend to the true name this can come in handy if you want to differentiate between identical objects.

To see a salt in action try using emaNeurt:
```javascript
var emaNeurt = require('rumplestiltskin').emaNeurt;

console.log(emaNeurt({ hello: 'world' }));
```

Which basically does this:
```trueName(o, '\u202e');```
