'use strict';

const arr = [10, 20, 20, 10, 10, 20, 5, 20];
const sum = 35;

// Time Complexity: O(n)
// Auxiliary Space Complexity: O(n)
function isSubArrayExists(arr, sum) {
	const set = new Set();

	let preSum = 0;
	for (let num of arr) {
		preSum += num;
		if (preSum == sum) return true;

		if (set.has(preSum - sum)) return true;
		set.add(preSum);
	}

	return false;
}

console.log(isSubArrayExists(arr, sum));
