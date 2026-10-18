'use strict';

const { printMatrix, swap } = require('./functions');

// Size of matrix is N X N
// Time Complexity: O(N^2)
function transposeOfMatrix(matrix) {
	let n = matrix.length;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
		}
	}
}

// Size of matrix is N X N
// Time Complexity: O(N^2)
function transposeOfMatrix_2(matrix) {
	let n = matrix.length;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < i; j++) {
			[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
		}
	}
}

// N X N matrix
const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

printMatrix(matrix);
transposeOfMatrix(matrix);
printMatrix(matrix);
transposeOfMatrix_2(matrix);
printMatrix(matrix);

// function transposeAnyMatrix(matrix) {
// 	const nRows = matrix.length;
// 	const nCols = matrix[0].length;
// 	const transposeMatrix = Array.from({ length: nCols }, () => []);
// 	for (let i = 0; i < nRows; i++) {
// 		for (let j = 0; j < nCols; j++) {
// 			transposeMatrix[j][i] = matrix[i][j];
// 		}
// 	}
// 	return transposeMatrix;
// }
