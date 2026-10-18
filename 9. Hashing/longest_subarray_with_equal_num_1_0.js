'use strict';

const { maxSubArrayWithSum } = require('./longest_subarray_with_given_sum');

// Binary Array
const arr = [1, 1, 1, 0, 1, 0, 1, 0];

// Find Longest Subarray with equal number of 1's and 0's
function maxSubArrayWithEqaul_1_0(arr) {
	const array = arr.map((num) => (num == 1 ? 1 : -1));
	return maxSubArrayWithSum(array, 0);
}

console.log(maxSubArrayWithEqaul_1_0(arr));
