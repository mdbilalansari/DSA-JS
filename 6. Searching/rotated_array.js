'use strict';

const { binarySearch } = require('./binary_search.js');

// Rotated array of unique elements
let arr = [10, 20, 30, 40, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const key = 7;

// Time Complexity: O(log n)
// Pivot: index of the largest element
function findPivot(arr, start = 0, end = arr.length - 1) {
	if (start == end) return start;

	let mid = Math.floor((start + end) / 2);
	if (mid != end && arr[mid] > arr[mid + 1]) {
		return mid;
	} else if (mid != 0 && arr[mid - 1] > arr[mid]) {
		return mid - 1;
	}

	if (arr[start] > arr[mid]) {
		return findPivot(arr, start, mid - 1);
	} else {
		return findPivot(arr, mid + 1, end);
	}
}

function search(arr, key) {
	let pivot = findPivot(arr);
	let n = arr.length;

	let result = binarySearch(arr, key, 0, pivot);
	if (result != -1 || pivot == n - 1) return result;

	return binarySearch(arr, key, pivot, n - 1);
}

console.log(findPivot(arr));
console.log(search(arr, key));
