'use strict';

// Time Complexity: O(m + n)
// All the elements in the matrix are sorted in row-wise and column-wise
function searchMatrix(matrix, target) {
	let row = matrix.length;
	let column = matrix[0].length;

	let i = 0,
		j = column - 1;

	while (i < row && j >= 0) {
		if (matrix[i][j] == target) {
			console.log(`Found at (${i}, ${j})`);
			return true;
		} else if (matrix[i][j] > target) {
			j--;
		} else {
			i++;
		}
	}
	return false;
}

const matrix = [
	[10, 20, 30, 40],
	[15, 25, 35, 45],
	[27, 29, 37, 48],
	[32, 33, 39, 50],
];
let target = 25;
console.log(searchMatrix(matrix, target));
