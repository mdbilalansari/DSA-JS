'use strict';

const array = [5, 13, 6, 9, 12, 11, 10];

// Time Complexity: O(n)
// Auxiliary Space: O(n)
// STABLE
function naive_partition(arr, low = 0, high = arr.length - 1) {
	const pivot = arr[high];
	const temp = [];
	for (let i = low; i <= high; i++) {
		if (arr[i] <= pivot) temp.push(arr[i]);
	}
	let pivotIndex = temp.length - 1;
	for (let i = low; i <= high; i++) {
		if (arr[i] > pivot) temp.push(arr[i]);
	}

	temp.forEach((value, index) => (arr[low + index] = value));
	return pivotIndex;
}

// Time Complexity: O(n)
// Auxiliary Space: O(n)
// UNSTABLE
function naive_partition_2(arr, low = 0, high = arr.length - 1) {
	const pivot = arr[high];
	const temp = new Array(high - low + 1);
	let start = 0,
		end = temp.length - 1;
	for (let i = low; i <= high; i++) {
		if (arr[i] <= pivot) {
			temp[start] = arr[i];
			start++;
		} else {
			temp[end] = arr[i];
			end--;
		}
	}

	temp.forEach((value, index) => (arr[low + index] = value));
	return start - 1;
}

let arr = array.slice();
console.log(naive_partition(arr));
console.log(arr);
arr = array.slice();
console.log(naive_partition_2(arr));
console.log(arr);
