'use strict';

const { binarySearch } = require('./binary_search');

// Infinite sorted array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const key = 10;

// Time Complexity: O(log n)
function binarySearch_infinite(arr, key) {
	let start = 0,
		end = 1;
	while (key > arr[end]) {
		start = end;
		end = end * 2;
	}
	return binarySearch(arr, key, start, end);
}

// Time Complexity: O(log n)
function search_infinite(arr, key, start = 0, end = 1) {
	if (start > end) return -1;
	if (key > arr[end]) return search_infinite(arr, key, end + 1, end * 2);

	let mid = start + Math.floor((end - start) / 2);
	if (key == arr[mid]) {
		return mid;
	} else if (key < arr[mid]) {
		return search_infinite(arr, key, start, mid - 1);
	} else {
		return search_infinite(arr, key, mid + 1, end);
	}
}

console.log(binarySearch_infinite(arr, key));
console.log(search_infinite(arr, key));
