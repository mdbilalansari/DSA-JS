'use strict';

let arr = [5, 13, 6, 9, 12, 11, 10];
let k = 3;

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

// Time Complexity: O(n)
function lomuto_partition(arr, low, high) {
	let pivot = arr[high];
	let i = low - 1; // index of smaller element

	for (let j = low; j < high; j++) {
		if (arr[j] < pivot) {
			i++;
			swap(arr, i, j);
		}
	}
	swap(arr, i + 1, high);
	return i + 1;
}

// Average Time Complexity: O(n)
// AKA Quick Select
function kthSmallest(arr, k) {
	let low = 0,
		high = arr.length - 1;

	while (low <= high) {
		let pivot = lomuto_partition(arr, low, high);
		if (pivot == k - 1) {
			return pivot;
		} else if (pivot > k - 1) {
			high = pivot - 1;
		} else {
			low = pivot + 1;
		}
	}

	return -1;
}

const index = kthSmallest(arr, k);
console.log(`Partially sorted array: ${arr}`);
console.log(`Index of the ${k}th smallest element is:`, index);
console.log(`The ${k}th smallest element is:`, arr[k - 1]);
