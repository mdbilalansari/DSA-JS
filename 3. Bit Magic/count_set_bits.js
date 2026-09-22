const { printBinary } = require('./functions');

// Non-negative input
const INPUT = 12423;

// Time Complexity: θ(total bits in n)
function countSetBits(n) {
	let count = 0;
	while (n) {
		count = count + (n & 1); // n & 1 == n % 2
		n = n >> 1;
	}
	return count;
}

// Time Complexity: θ(total bits in n)
function countSetBits2(n) {
	let count = 0;
	for (let i = 0; i < n.toString(2).length; i++) {
		if (n & (1 << i)) {
			count++;
		}
	}
	return count;
}

// Time Complexity: θ(total bits in n)
function countSetBits3(n) {
	let count = 0;
	let k = 1;
	while (k <= n) {
		if (n & k) {
			count++;
		}
		k = k << 1;
	}
	return count;
}

// Brian Kernighan's Algorithm
// Time Complexity: θ(set bits in n)
function countSetBits4(n) {
	let count = 0;
	while (n) {
		n = n & (n - 1); // set the last bit to 0
		count++;
	}
	return count;
}

// Lookup Table method for 32 bits
let lookupTable = [0];
for (let i = 0; i < 256; i++) {
	lookupTable[i] = (i & 1) + lookupTable[Math.floor(i / 2)]; // i / 2 == i >> 1
}

// Time Complexity: θ(1)
function countSetBits5(n) {
	let count = 0;
	while (n) {
		count += lookupTable[n & 0xff]; // 0xFF == 256 - 1 == 1111 1111
		n = n >> 8;
	}
	return count;
}

let n = INPUT;
printBinary(n);

console.log(countSetBits(n));
console.log(countSetBits2(n));
console.log(countSetBits3(n));
console.log(countSetBits4(n));
console.log(countSetBits5(n));
