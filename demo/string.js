require("../src/string");

// String.allReplace()
const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const params = {
  "ipsum": "REPLACED-ipsum",
  "amet": "REPLACED-amet"
};
console.log(str.allReplace(params));

// String.toTitleCase()
console.log(str.toTitleCase());