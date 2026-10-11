'use strict';

const array = [5, 13, 6, 9, 12, 11, 10];

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

// Time Complexity: O(n)
function hoares_partition(arr, low, high) {
	let piveot = arr[low];
	let i = low - 1,
		j = high + 1;

	while (true) {
		do {
			i++;
		} while (arr[i] < piveot);
		do {
			j--;
		} while (arr[j] > piveot);
		if (i >= j) {
			return j;
		}
		swap(arr, i, j);
	}
}

// Time Complexity: Average: O(nlogn), Worst: O(n^2)
function quick_sort_lomuto(arr, low, high) {
	if (low < high) {
		let p = lomuto_partition(arr, low, high);
		quick_sort_lomuto(arr, low, p - 1);
		quick_sort_lomuto(arr, p + 1, high);
	}
}

// Time Complexity: Average: O(nlogn), Worst: O(n^2)
function quick_sort_hoares(arr, low, high) {
	if (low < high) {
		let p = hoares_partition(arr, low, high);
		quick_sort_hoares(arr, low, p);
		quick_sort_hoares(arr, p + 1, high);
	}
}

let arr = array.slice();
console.log('Before sorting: ' + arr);
quick_sort_lomuto(arr, 0, arr.length - 1);
console.log('After sorting using lomuto partition: ' + arr);

arr = array.slice();
console.log('\nBefore sorting: ' + arr);
quick_sort_hoares(arr, 0, arr.length - 1);
console.log('After sorting using hoares partition: ' + arr);
