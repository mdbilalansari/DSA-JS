'use strict';

let arr = [5, 13, 6, 9, 12, 11, 10];

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

// Time Complexity: O(n)
function lomuto_partition(arr, low = 0, high = arr.length - 1) {
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

// Time Complexity: O(n)
function lomuto_partition_2(arr, low = 0, high = arr.length - 1) {
	let pivot = arr[high];
	let i = low; // index of first element greater equal to pivot

	for (let j = low; j < high; j++) {
		if (arr[j] < pivot) {
			swap(arr[i], arr[j]);
			i++;
		}
	}
	swap(arr[i], arr[high]);
	return i;
}

console.log(lomuto_partition(arr));
console.log(arr);
