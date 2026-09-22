'use strict';

const INPUT = 20;

/*
Give a rope of length n, you need to find the maximum number of pieces that can be cut from the
rope, such that length of every piece is in the set {a, b, c} for given three values a, b, c. If
rope can't be cut into given lengths, return -1.
*/

// Time Complexity: O(3^n)
function maxPiece(n, a, b, c) {
	if (n == 0) return 0;
	if (n < 0) return -1;

	let res = Math.max(maxPiece(n - a, a, b, c), maxPiece(n - b, a, b, c), maxPiece(n - c, a, b, c));

	return res == -1 ? -1 : res + 1;
}

let n = INPUT;
let a = 7,
	b = 4,
	c = 8;

console.log(maxPiece(n, a, b, c));
