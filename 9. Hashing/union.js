'use strict';

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

// Time Complexity: O(n+m)
// Auxiliary Space Complexity: O(n + m)
function unionArray(arr1, arr2) {
	const set1 = new Set(arr1);
	const set2 = new Set(arr2);
	return set1.union(set2);
}

console.log(unionArray(arr1, arr2));
