'use strict';

let array = [2, 4, 1, 3, 5];

// Time Complexity: O(n+m)
// Auxiliary Space: O(n+m)
function countAndMerge(array, low, mid, high) {
	let count = 0;
	const left = array.slice(low, mid + 1);
	const right = array.slice(mid + 1, high + 1);

	let i = 0,
		j = 0,
		k = low;
	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) {
			array[k++] = left[i++];
		} else {
			array[k++] = right[j++];
			count += left.length - i;
		}
	}

	// copy remaining elements
	while (i < left.length) array[k++] = left[i++];
	while (j < right.length) array[k++] = right[j++];

	return count;
}

// Time Complexity: O(nlogn)
function countInversion(array, low = 0, high = array.length - 1) {
	let count = 0;
	if (low < high) {
		let mid = low + (high - low) / 2;
		count = countInversion(array, low, mid);
		count += countInversion(array, mid + 1, high);
		count += countAndMerge(array, low, mid, high);
	}

	return count;
}

let count = countInversion(array);
console.log('arrayay after sorting: ' + array);
console.log('Number of inversions are: ' + count);
