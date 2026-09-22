'use strict';

const INPUT = 12345;

function sumOfDigit(n) {
	if (n == 0) return 0;
	return (n % 10) + sumOfDigit(Math.floor(n / 10));
}

let n = INPUT;
console.log(sumOfDigit(n));
