'use strict';

const n = 144;

// Time Complexity: O(log n)
function squareRoot(n) {
	let i = 1;
	while (i * i <= n) {
		i *= 2;
	}
	let start = i / 2;
	let end = i;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (mid * mid <= n) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return end;
}

// Time Complexity: O(1)
function squareRoot_2(n) {
	return Math.floor(Math.sqrt(n));
}

console.log(squareRoot(n));
console.log(squareRoot_2(n));
