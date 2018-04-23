Object.prototype.isEmpty = function() {
  const obj = this;
  return Object.keys(obj).length === 0;
}

Object.prototype.getNestedValueByStringKey = function(strKey) {
	let obj = this;
	let str = strKey.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
	str = str.replace(/^\./, ""); // strip a leading dot
	const keys = str.split(".");
	for (let i = 0, n = keys.length; i < n; i += 1) {
		const k = keys[i];
		if (k in obj) {
			obj = obj[k]; // eslint-disable-line no-param-reassign
		} else {
			return false;
		}
	}
	return obj;
}
