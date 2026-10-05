'use strict';

let arr = [5, 2, 11, 4, 5, 34, 7, 8, 9, 10];
const key = 7;

// Search in an unsorted array
// Time Complexity: O(n)
function search(array, key) {
	return array.some((num) => num == key);
}

console.log(search(arr, key));
