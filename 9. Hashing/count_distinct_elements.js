'use strict';

const arr = [10, 20, 20, 10, 10, 20, 5, 20];

// Time Complexity: O(n)
// Auxiliary Space: O(n)
function count_distinct(arr) {
	const set = new Set(arr);
	return set.size;
}

console.log('Count of distinct elements:', count_distinct(arr));
