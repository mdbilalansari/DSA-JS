'use strict';

const arr = [10, 20, 20, 10, 10, 20, 5, -25];

// Time Complexity: O(n)
// Auxiliary Space Complexity: O(n)
// Time Complexity: O(n)
// Auxiliary Space Complexity: O(n)
function isSubArrayExists(arr) {
	const set = new Set();

	let preSum = 0;
	for (let num of arr) {
		preSum += num;
		if (preSum == 0) return true;

		if (set.has(preSum)) return true;
		set.add(preSum);
	}

	return false;
}

console.log(isSubArrayExists(arr));
