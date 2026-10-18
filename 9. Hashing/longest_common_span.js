'use strict';

const { maxSubArrayWithSum } = require('./longest_subarray_with_given_sum');

// Two Binary Array with same size
const arr1 = [0, 1, 0, 0, 0, 0];
const arr2 = [1, 0, 1, 0, 0, 1];

// Find Longest common span with same sum in two binary array
function longestCommonSpan(arr1, arr2) {
	const array = arr1.map((num, i) => num - arr2[i]);
	return maxSubArrayWithSum(array, 0);
}

console.log(longestCommonSpan(arr1, arr2));
