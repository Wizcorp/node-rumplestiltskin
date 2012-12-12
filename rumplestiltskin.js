var isArray = Array.isArray;

exports.trueName = function trueName(o) {
	var t = (typeof o)[0];

	if (t !== 'o' || o === null) {
		return t.concat(o);
	}

	if (o instanceof Date) {
		return 'd'.concat(o.toJSON());
	}

	if (o instanceof RegExp) {
		return 'r'.concat(o.toString());
	}

	if (t === 'f') {
		throw new TypeError('Invalid type: function');
	}
	
	var len, i;
	var out = '';

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