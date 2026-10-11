'use strict';

let array = [1, 2, 13, 14, 25, 0, 3, 7, 18, 19, 40];

// Time Complexity: O(n+m)
// Auxiliary Space: O(n+m)
function merge(array, low, mid, high) {
	let left = array.slice(low, mid + 1);
	let right = array.slice(mid + 1, high + 1);

	let i = 0,
		j = 0,
		k = low;
	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) array[k++] = left[i++];
		else array[k++] = right[j++];
	}

	// copy remaining elements
	while (i < left.length) array[k++] = left[i++];
	while (j < right.length) array[k++] = right[j++];
}

// Time Complexity: O(nlogn)
function mergeSort(array, low = 0, high = array.length - 1) {
	if (low < high) {
		// if array has more than 1 element
		let mid = Math.floor((low + high) / 2);
		mergeSort(array, low, mid);
		mergeSort(array, mid + 1, high);
		merge(array, low, mid, high);
	}
}

mergeSort(array);
console.log(array);
