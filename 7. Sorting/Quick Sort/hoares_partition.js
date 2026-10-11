'use strict';

let arr = [5, 3, 8, 4, 2, 7, 5, 10];

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

// Time Complexity: O(n)
function hoares_partition(arr, low = 0, high = arr.length - 1) {
	let pivot = arr[low];
	let i = low - 1,
		j = high + 1;

	while (true) {
		do {
			i++;
		} while (arr[i] < pivot);
		do {
			j--;
		} while (arr[j] > pivot);
		if (i >= j) {
			return j;
		}
		swap(arr, i, j);
	}
}

console.log(hoares_partition(arr));
console.log(arr);
