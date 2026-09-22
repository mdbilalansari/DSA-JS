const { printBinary } = require('./functions');

const INPUT = 4; // 0000 0000 0000 0000 0000 0000 0001 0100
const k = 5;

// Using Right Shift operator
function kth_bit(n, k) {
	return (n >> (k - 1)) & 1;
}

// Using Left Shift operator
function kth_bit_2(n, k) {
	if (n & (1 << (k - 1))) return 1;
	else return 0;
}

let n = INPUT;
printBinary(n);

console.log(kth_bit(n, k));
console.log(kth_bit_2(n, k));
