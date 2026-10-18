'use strict';

const arr = [10, 20, 20, 10, 10, 20, 5, 20];
const sum = 40;

// Time Complexity: O(n)
// Auxiliary Space Complexity: O(n)
function isPairExists(arr, sum) {
	const set = new Set();
	for (let num of arr) {
		if (set.has(sum - num)) return true;
		set.add(num);
	}
	return false;
}

console.log(isPairExists(arr, sum));
