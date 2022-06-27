# is-buffer-like

Checks if the given src is buffer-like object.

# Example

```js
const isBufferLike = require("is-buffer-like");

// Buffer like src
// these can be constructed into nodejs Buffer object using Buffer.from(x)
const ns = [
    Uint8ClampedArray,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    Int16Array,
    Int32Array,
    Int8Array,
    ArrayBuffer,
    Array,
    SharedArrayBuffer,
    BigInt64Array,
    BigUint64Array,
    Array
];

console.log(ns.map(m => isBufferLike(new m)));
/*
[
  true, true, true, true,
  true, true, true, true,
  true, true, true, true,
  true, true, true
]
*/
console.log(isBufferLike(Buffer.from("test"))); // true
console.log(isBufferLike(null)); // false
console.log(isBufferLike(true)); // false
console.log(isBufferLike(0)); // false
console.log(isBufferLike("test")); // false
console.log(isBufferLike({})); // false
console.log(isBufferLike(undefined)); // false
console.log(isBufferLike(null)); // false
console.log(isBufferLike(function(){})); // false
```