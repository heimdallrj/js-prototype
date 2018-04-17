require("../src/array");

// Array.drop()
const arr = [1, 2, 3, 4, 5, 6];
arr.drop(2);
console.log(arr); // [1, 3, 4, 5, 6]

arr.drop(null, 0);
console.log(arr); // [3, 4, 5, 6]