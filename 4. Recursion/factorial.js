'use strict';

const INPUT = 12;

function factorial(n) {
	if (n <= 0) return 1;
	return n * factorial(n - 1);
}

// factorial tail recursive
function factorial2(n, result = 1) {
	if (n <= 0) return result;
	return factorial2(n - 1, n * result);
}

let n = INPUT;
console.log(factorial(n));
console.log(factorial2(n));
