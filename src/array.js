Array.prototype.drop = function(value, index=null) {
	if (index !== null && typeof index === "number") {
		this.splice(index, 1);
	} else {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == value) {         
			  this.splice(i, 1);
			  i--;
			}
		}
	}
	return this;
};