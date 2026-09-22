'use strict';

const arr = [1, 2, 3, 4, 5];
const sum = 10;

// Time Complexity: O(2^n)
function numberOfSubset(arr, sum, i = 0) {
	if (i == arr.length) {
		return sum == 0 ? 1 : 0;
	}

	return numberOfSubset(arr, sum, i + 1) + numberOfSubset(arr, sum - arr[i], i + 1);
}

console.log(numberOfSubset(arr, sum));
