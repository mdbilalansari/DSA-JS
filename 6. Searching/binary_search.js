'use strict';

// Sorted array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const key = 3;

// Time Complexity: O(log n)
// Auxiliary Space: O(1)
function binarySearch(arr, key, start = 0, end = arr.length - 1) {
	while (start <= end) {
		let mid = start + Math.floor((end - start) / 2); // To escape overflow: (start + end) / 2
		if (arr[mid] == key) {
			return mid;
		} else if (key < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}

// Time Complexity: O(log n)
// Auxiliary Space: O(log n)
function binarySearch_recursive(arr, key, start = 0, end = arr.length - 1) {
	if (start > end) return -1;

	let mid = start + Math.floor((end - start) / 2);
	if (arr[mid] == key) {
		return mid;
	} else if (key < arr[mid]) {
		return binarySearch_recursive(arr, key, start, mid - 1);
	} else {
		return binarySearch_recursive(arr, key, mid + 1, end);
	}
}

if (require.main == module) {
	console.log(binarySearch(arr, key));
	console.log(binarySearch_recursive(arr, key));
}

module.exports = { binarySearch };
