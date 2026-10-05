'use strict';

let arr = [1, 2, 3, 3, 4, 9, 4];

// Find any one peak element index
// Time Complexity: O(log n)
function findPeak(arr, start = 0, end = arr.length - 1) {
	let mid = Math.floor((start + end) / 2);

	if (mid != 0 && mid != end && arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
		return mid;
	} else if (mid == 0 && arr[mid] > arr[mid + 1]) {
		return mid;
	} else if (mid == end && arr[mid] > arr[mid - 1]) {
		return mid;
	} else if (arr[mid] < arr[mid - 1]) {
		return findPeak(arr, start, mid - 1);
	} else {
		return findPeak(arr, mid + 1, end);
	}
}

console.log(findPeak(arr));
