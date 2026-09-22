const { printBinary } = require('./functions');

// Non-negative input
const INPUT = 0;

// Time Complexity: θ(log n)
function isPowerOfTwo(n) {
	if (n == 0) return false;

	while (n > 1) {
		if (n % 2 != 0) return false;
		n = n / 2;
	}
	return true;
}

// Time Complexity: θ(log n)
function isPowerOfTwo2(n) {
	if (n == 0) return false;
	if (n == 1) return true;
	if (n % 2 == 1) return false;
	return isPowerOfTwo2(n / 2);
}

// Time Complexity: θ(1)
function isPowerOfTwo3(n) {
	if (n == 0) return false;
	return (n & (n - 1)) == 0;
}

// Time Complexity: θ(1)
function isPowerOfTwo4(n) {
	return Number.isInteger(Math.log2(n));
}

let n = INPUT;
printBinary(n);

console.log(isPowerOfTwo(n));
console.log(isPowerOfTwo2(n));
console.log(isPowerOfTwo3(n));
console.log(isPowerOfTwo4(n));
