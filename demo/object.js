require("../src/object");

// Object.isEmpty()
const a = {};
const b = {a: 1, b:3};
console.log(a.isEmpty()); // true
console.log(b.isEmpty()); // false