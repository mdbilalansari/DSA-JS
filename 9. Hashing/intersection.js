'use strict';

const arr_1 = [1, 2, 3, 4, 5, 5, 7, 8, 9, 10];
const arr_2 = [1, 2, 3, 4, 5, 6, 5, 8, 9, 10];

// Time Complexity: O(n+m)
// Auxiliary Space Complexity: O(n)
function intersection(arr_1, arr_2) {
	const set_1 = new Set(arr_1);
	const set_2 = new Set(arr_2);
	return set_1.intersection(set_2);
}

console.log(intersection(arr_1, arr_2));
