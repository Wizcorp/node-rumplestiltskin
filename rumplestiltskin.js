var isArray = Array.isArray;

exports.emaNeurt = function emaNeurt(o) {
	return exports.trueName(o, '\u202e');
};

exports.trueName = function trueName(o, salt) {
	var t = (typeof o)[0];

	var out = salt ? salt : '';

	if (t !== 'o' || o === null) {
		return out.concat(t, o);
	}

	if (o instanceof Date) {
		return out.concat('d', o.toJSON());
	}

	if (o instanceof RegExp) {
		return out.concat('r', o.toString());
	}

	if (t === 'f') {
		throw new TypeError('Invalid type: function');
	}

	var len, i;

	if (isArray(o)) {
		len = o.length;
		for (i = 0; i < len; i += 1) {
			out = out.concat('a', i, trueName(o[i]));
		}
		return out;
	}

	var keys, key;
	keys = Object.keys(o);
	len = keys.length;
	keys.sort();
	for (i = 0; i < len; i += 1) {
		key = keys[i];
		out = out.concat('o', key, trueName(o[key]));
	}

	return out;
};
