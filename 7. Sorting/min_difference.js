'use strict';

/*
You have n students and m packets of chocolates. Each packet has a certain number of chocolates.
The goal is to distribute these packets among the students such that the difference between the
maximum and minimum number of chocolates received by any student is minimized.
*/
const array = [7, 3, 2, 4, 9, 12, 56];
const n = 3;

function minDifference(array, n) {
	if (array.length < n) return -1;

	array.sort((a, b) => a - b);
	let res = Infinity;

	for (let i = 0, j = n - 1; j < array.length; i++, j++) {
		res = Math.min(res, array[j] - array[i]);
	}

	return res;
}

console.log(minDifference(array, n));
