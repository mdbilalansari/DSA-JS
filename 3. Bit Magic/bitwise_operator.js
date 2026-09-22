const { printBinary } = require('./functions');

const INPUT = 20; // 0000 0000 0000 0000 0000 0000 0001 0100
const x = 1; // 0000 0000 0000 0000 0000 0000 0000 0001

let n = INPUT;
printBinary(n);

console.log(n & x); // 0000 0000 0000 0000 0000 0000 0000 0000 => 0
console.log(n | x); // 0000 0000 0000 0000 0000 0000 0001 0101 => 21
console.log(n ^ x); // 0000 0000 0000 0000 0000 0000 0001 0101 => 21
console.log(~n); // 1111 1111 1111 1111 1111 1111 1110 1011 => -21
