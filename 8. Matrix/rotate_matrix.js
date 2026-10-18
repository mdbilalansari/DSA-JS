'use strict';

const { transposeOfMatrix, printMatrix } = require('./functions');

function reverseRows(matrix) {
	matrix.forEach((row) => row.reverse());
}

function rotateAntiClockwise(matrix) {
	transposeOfMatrix(matrix);
	reverseRows(matrix);
}

function rotateClockwise(matrix) {
	reverseRows(matrix);
	transposeOfMatrix(matrix);
}

const matrix = [
	['a', 'b', 'c', 'd'],
	['e', 'f', 'g', 'h'],
	['i', 'j', 'k', 'l'],
	['m', 'n', 'o', 'p'],
];
printMatrix(matrix);
console.log('--------LEFT ROTATION--------');
rotateAntiClockwise(matrix);
printMatrix(matrix);

console.log('--------RIGHT ROTATION--------');
rotateClockwise(matrix);
printMatrix(matrix);
