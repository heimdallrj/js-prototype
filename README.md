# js-prototype

Modified prototype methods for JS

## Installation

```
npm i -S js-prototype
```

## Usage

### String

#### String.allReplace()

```js
import 'js-prototype'; // or import 'js-prototype/string';

var str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

var list = {
    'ipsum': 'REPLACED-ipsum',
    'amet': 'REPLACED-amet'
};
var newStr = str.allReplace(list);
console.log(newStr); // Lorem REPLACED-ipsum dolor sit REPLACED-amet, consectetur adipiscing elit.
```

#### String.toTitleCase()

```js
import 'js-prototype'; // or import 'js-prototype/string';

var str = 'Lorem ipsum dolor';
var result = str.toTitleCase();
console.log(result); // Lorem Ipsum Dolor

```

### Object

#### Object.isEmpty()

```js
import 'js-prototype'; // or import 'js-prototype/object';

const a = {};
const b = {a: 1, b:3};
console.log(a.isEmpty()); // true
console.log(b.isEmpty()); // false
```

### Array

#### Array.drop()

```js
import 'js-prototype'; // or import 'js-prototype/array';

const arr = [1, 2, 3, 4, 5, 6];
arr.drop(2);
console.log(arr); // [1, 3, 4, 5, 6]
```

## License

MIT