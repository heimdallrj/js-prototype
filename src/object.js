Object.prototype.isEmpty = function() {
  const obj = this;
  return Object.keys(obj).length === 0;
}