require("../src/");

// Array.drop()
const arr = [1, 2, 3, 4, 5, 6];
arr.drop(2);
console.log(arr); // [1, 3, 4, 5, 6]

// Object.isEmpty()
const a = {};
const b = {a: 1, b:3};
console.log(a.isEmpty()); // true
console.log(b.isEmpty()); // false

// String.allReplace()
const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const params = {
  "ipsum": "REPLACED-ipsum",
  "amet": "REPLACED-amet"
};
console.log(str.allReplace(params));

// String.toTitleCase()
console.log(str.toTitleCase());