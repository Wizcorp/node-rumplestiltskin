var trueName = require('../../rumplestiltskin').trueName;
var emaNeurt = require('../../rumplestiltskin').emaNeurt;

exports.testNumber = function (test) {
	test.expect(3);

	var a = 1;
	var b = 1;
	var c = 0;

	test.strictEqual(trueName(a), trueName(b));
	test.notEqual(trueName(a), trueName(c));

	var map = {};

	map[trueName(a)] = 'ok';

	test.strictEqual(map[trueName(a)], map[trueName(b)]);

	test.done();
};

exports.testString = function (test) {
	test.expect(3);

	var a = '1';
	var b = '1';
	var c = '0';

	test.strictEqual(trueName(a), trueName(b));
	test.notEqual(trueName(a), trueName(c));

	var map = {};

	map[trueName(a)] = 'ok';

	test.strictEqual(map[trueName(a)], map[trueName(b)]);

	test.done();
};

exports.testBoolean = function (test) {
	test.expect(3);

	var a = true;
	var b = true;
	var c = false;

	test.strictEqual(trueName(a), trueName(b));
	test.notEqual(trueName(a), trueName(c));

	var map = {};

	map[trueName(a)] = 'ok';

	test.strictEqual(map[trueName(a)], map[trueName(b)]);

	test.done();
};

exports.testNull = function (test) {
	test.expect(3);

	var a = null;
	var b = null;
	var c = false;

	test.strictEqual(trueName(a), trueName(b));
	test.notEqual(trueName(a), trueName(c));

	var map = {};

	map[trueName(a)] = 'ok';

	test.strictEqual(map[trueName(a)], map[trueName(b)]);

	test.done();
};

exports.testUndefined = function (test) {
	test.expect(3);

	var a = undefined;
	var b = undefined;
	var c = false;

	test.strictEqual(trueName(a), trueName(b));
	test.notEqual(trueName(a), trueName(c));

	var map = {};

	map[trueName(a)] = 'ok';

	test.strictEqual(map[trueName(a)], map[trueName(b)]);

	test.done();
};

exports.testNullUndefined = function (test) {
	test.expect(4);

	var a = null;
	var b = undefined;
	var c = false;

	test.notStrictEqual(trueName(a), trueName(b));
	test.notEqual(trueName(a), trueName(c));

	var map = {};

	map[trueName(a)] = 'ok';

	test.strictEqual(map[trueName(a)], 'ok');
	test.notStrictEqual(map[trueName(a)], map[trueName(b)]);

	test.done();
};

exports.testArray = function (test) {
	test.expect(4);

	var a = [ 0, 1, 2, 3 ];
	var b = [ 0, 1, 2, 3 ];
	var c = [ 3, 2, 1, 0 ];

	test.strictEqual(trueName(a), trueName(b));
	test.notEqual(trueName(a), trueName(c));

	var map = {};

	map[trueName(a)] = 'ok';

	test.strictEqual(map[trueName(a)], map[trueName(b)]);
	test.notEqual(map[trueName(a)], map[trueName(c)]);

	test.done();
};

exports.testObject = function (test) {
	test.expect(4);

	var a = { a: 0, b: 1, c: 2, d: 3 };
	var b = { a: 0, c: 2, b: 1, d: 3 };
	var c = { a: 0, b: 1, c: 2 };

	test.strictEqual(trueName(a), trueName(b));
	test.notEqual(trueName(a), trueName(c));

	var map = {};

	map[trueName(a)] = 'ok';

	test.strictEqual(map[trueName(a)], map[trueName(b)]);
	test.notEqual(map[trueName(a)], map[trueName(c)]);

	test.done();
};

exports.testObjectNullUndefined = function (test) {
	test.expect(4);

	var a = { a: null, b: 1, c: 'undefined', d: 3 };
	var b = { a: 'null', c: undefined, b: 1, d: 3 };
	var c = { a: 0, b: 1, c: 2 };

	test.notEqual(trueName(a), trueName(b));
	test.notEqual(trueName(a), trueName(c));

	var map = {};

	map[trueName(a)] = 'ok';

	test.notEqual(map[trueName(a)], map[trueName(b)]);
	test.notEqual(map[trueName(a)], map[trueName(c)]);

	test.done();
};

exports.testDate = function (test) {
	test.expect(4);

	var a = new Date();
	var b = a;
	var c = new Date();
	c.setMinutes(c.getMinutes()+1);

	test.strictEqual(trueName(a), trueName(b));
	test.notEqual(trueName(a), trueName(c));

	var map = {};

	map[trueName(a)] = 'ok';

	test.strictEqual(map[trueName(a)], map[trueName(b)]);
	test.notEqual(map[trueName(a)], map[trueName(c)]);

	test.done();
};

exports.testFunction = function (test) {
	test.expect(1);

	var a = function () { };

	test.throws(trueName(a), TypeError);

	test.done();
};

exports.testRegExp = function (test) {
	test.expect(4);

	var a = /rumplestiltskin/;
	var b = /rumplestiltskin/;
	var c = /ronbledore/;

	test.strictEqual(trueName(a), trueName(b));
	test.notEqual(trueName(a), trueName(c));

	var map = {};

	map[trueName(a)] = 'ok';

	test.strictEqual(map[trueName(a)], map[trueName(b)]);
	test.notEqual(map[trueName(a)], map[trueName(c)]);

	test.done();
};

exports.testemaNeurt = function (test) {
	test.expect(4);

	var a = [ 0, 1, 2, 3 ];
	var b = [ 0, 1, 2, 3 ];
	var c = [ 3, 2, 1, 0 ];

	test.strictEqual(emaNeurt(a), emaNeurt(b));
	test.notEqual(emaNeurt(a), emaNeurt(c));

	var map = {};

	map[emaNeurt(a)] = 'ok';

	test.strictEqual(map[emaNeurt(a)], map[emaNeurt(b)]);
	test.notEqual(map[emaNeurt(a)], map[emaNeurt(c)]);

	test.done();
};

exports.testObjectySalt = function (test) {
	test.expect(1);

	var obj = { a: 5 };

	var a = 'imasalt';
	var b = {
		valueOf: function () { return a; }
	};

	test.strictEqual(trueName(obj, a), trueName(obj, b));

	test.done();
};

