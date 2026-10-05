'use strict';

// Unsorted array
let arr = [5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 11, 12, 13, 14, 15];
const key = 11;

// Time Complexity: O(n)
function search(arr, key) {
	return arr.findIndex((num) => num == key);
}

console.log(search(arr, key));
