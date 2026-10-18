'use strict';

const { print } = require('./functions');

// Time Complexity: O(row + col)
function printBoundaryTraversal(matrix) {
	let row = matrix.length;
	let col = matrix[0].length;

	if (row == 1) {
		for (let i = 0; i < col; i++) {
			print(matrix[0][i]);
		}
	} else if (col == 1) {
		for (let i = 0; i < row; i++) {
			print(matrix[i][0]);
		}
	} else {
		for (let i = 0; i < col; i++) {
			print(matrix[0][i]);
		}
		for (let i = 1; i < row; i++) {
			print(matrix[i][col - 1]);
		}
		for (let i = col - 2; i >= 0; i--) {
			print(matrix[row - 1][i]);
		}
		for (let i = row - 2; i > 0; i--) {
			print(matrix[i][0]);
		}
	}
	console.log();
}

const matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];
printBoundaryTraversal(matrix);
