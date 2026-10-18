/*
If the matrix is sorted as a whole in row-major order
i.e., last element of a row ≤ first element of next row:
    1   3   5
    7   9  11
    13 15  17
*/
'use strict';

function binarySearchMatrix(matrix, target) {
	let row = matrix.length;
	let column = matrix[0].length;

	let low = 0,
		high = row * column - 1;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let rowIndex = Math.floor(mid / column);
		let colIndex = mid % column;
		let midElement = matrix[rowIndex][colIndex];
		if (midElement == target) {
			return [rowIndex, colIndex];
		} else if (midElement < target) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return 'Not Found';
}

const matrix = [
	[1, 3, 5, 7],
	[10, 11, 16, 20],
	[23, 30, 34, 60],
];
let target = 16;
console.log(binarySearchMatrix(matrix, target));
