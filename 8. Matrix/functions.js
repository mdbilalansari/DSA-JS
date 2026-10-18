'use strict';

function print(value) {
	process.stdout.write(String(value) + ' ');
}

function printMatrix(matrix) {
	matrix.forEach((row) => {
		row.forEach((cell) => print(cell));
		console.log();
	});
	console.log();
}

// Size of matrix is N X N
// Time Complexity: O(N^2)
function transposeOfMatrix(matrix) {
	const n = matrix.length;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
		}
	}
}

module.exports = {
	print,
	printMatrix,
	transposeOfMatrix,
};
