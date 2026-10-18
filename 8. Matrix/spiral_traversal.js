'use strict';

const { print } = require('./functions');

// Time Complexity: O(N * M)
function spiralTraversal(matrix) {
	let n = matrix.length;
	let m = matrix[0].length;

	let top = 0,
		bottom = n - 1,
		left = 0,
		right = m - 1;
	while (top <= bottom && left <= right) {
		for (let i = left; i <= right; i++) {
			print(matrix[top][i]);
		}
		top++;
		for (let i = top; i <= bottom; i++) {
			print(matrix[i][right]);
		}
		right--;
		if (top <= bottom) {
			for (let i = right; i >= left; i--) {
				print(matrix[bottom][i]);
			}
			bottom--;
		}
		if (left <= right) {
			for (let i = bottom; i >= top; i--) {
				print(matrix[i][left]);
			}
			left++;
		}
	}
}

const matrix = [
	['a', 'b', 'c', 'd', 'e'],
	['f', 'g', 'h', 'i', 'j'],
	['k', 'l', 'm', 'n', 'o'],
	['p', 'q', 'r', 's', 't'],
	['u', 'v', 'w', 'x', 'y'],
];
spiralTraversal(matrix);
console.log();
