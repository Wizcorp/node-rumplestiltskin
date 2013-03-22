var trueName = require('../../rumplestiltskin').trueName;
var Tome = require('tomes').Tome;

exports.tomeNumber = function (test) {
	test.expect(1);

	var a = 1;
	var b = Tome.conjure(a);

	test.strictEqual(trueName(a), trueName(b));

	test.done();
};

exports.tomeString = function (test) {
	test.expect(1);

	var a = 'the unTome.';
	var b = Tome.conjure(a);

	test.strictEqual(trueName(a), trueName(b));

	test.done();
};

exports.tomeNull = function (test) {
	test.expect(1);

	var a = null;
	var b = Tome.conjure(a);

	test.strictEqual(trueName(a), trueName(b));

	test.done();
};

exports.tomeBoolean = function (test) {
	test.expect(1);

	var a = false;
	var b = Tome.conjure(a);

	test.strictEqual(trueName(a), trueName(b));

	test.done();
};

exports.tomeArray = function (test) {
	test.expect(1);

	var a = [ 0, 1, 2, 'hi', null, undefined, { a: 'nope' } ];
	var b = Tome.conjure(a);

	test.strictEqual(trueName(a), trueName(b));

	test.done();
};

exports.tomeComplex = function (test) {
	test.expect(1);

	var a = { a: { b: true, c: undefined, d: null, e: [ 0, 1, 'hi', 'cat' ], f: { g: false } } };
	var b = Tome.conjure(a);

	test.strictEqual(trueName(a), trueName(b));

	test.done();
};
