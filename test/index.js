const isBufferLike = require("../index.js");

// Buffer like src
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

console.log(ns.map(m => isBufferLike(new m)))

console.log(isBufferLike(Buffer.from("hello")));

const data = [0, "1", null, undefined, true, {}, Symbol("test"), new Map, new Set, function(){}];
console.log(data.map(m => isBufferLike(m)))