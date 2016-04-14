# pick-key

> Randomly sampling a key from an object.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/pick-key/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/pick-key/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/pick-key)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/pick-key/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/pick-key)



## Install

```
$ npm install --save pick-key 
```



## Usage

> For more use-cases see the [tests](https://github.com/bubkoo/pick-key/blob/master/test/spec/index.js)

```js
var pickKey = require('pick-key');

// pickKey(object);

pickKey({ a: 1, b: 1, c: 1 }); // => 'c'
pickKey([2]);                  // => '0'

pickKey(1);    // => 1
pickKey('a');  // => 'a'
pickKey([]);   // => undefined
pickKey();     // => undefined
pickKey(null); // => null
```

## Related

- [pick-prop](https://github.com/bubkoo/pick-prop) - Randomly sampling a property from an object.
- [pick-props](https://github.com/bubkoo/pick-props) - Randomly sampling some properties from an object.
- [pick-keys](https://github.com/bubkoo/pick-keys) - Randomly sampling some keys from an object.
- [object-at](https://github.com/bubkoo/object-at) - Get object's property according to the path.
- [object-has](https://github.com/bubkoo/object-has) - Checks if path is a direct property of object.
- [object-set](https://github.com/bubkoo/object-set) - Sets the value at path of object.
- [object-unset](https://github.com/bubkoo/object-unset) - Removes the property at path of object.
- [to-path](https://github.com/bubkoo/to-path) - Converts string to a property path array. 



## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/pick-key/issues/new).
