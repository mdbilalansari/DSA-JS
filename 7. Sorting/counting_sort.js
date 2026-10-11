'use strict';

let arr = [0, 10, 20, 30, 100, 40, 50, 60, 70, 80, 90, 100];

// Time Complexity: O(n+k)
function counting_sort(arr) {
	const k = Math.max(...arr) + 1;
	const count = new Array(k).fill(0);

	// Count the frequency of each element
	arr.forEach((num) => count[num]++);

	// Calculate the cumulative frequency
	for (let i = 1; i < k; i++) {
		count[i] += count[i - 1];
	}

	const output = new Array(arr.length);
	// Store the sorted elements
	for (let i = arr.length - 1; i >= 0; i--) {
		count[arr[i]]--;
		output[count[arr[i]]] = arr[i];
	}

	// Copy the sorted elements back to the original array
	output.forEach((num, index) => (arr[index] = num));
}

function counting_sort_range(arr) {
	const minValue = Math.min(...arr);
	const maxValue = Math.max(...arr);
	const k = maxValue - minValue + 1;
	const count = new Array(k).fill(0);

	// Count the frequency of each element
	arr.forEach((num) => count[num - minValue]++);

	// Calculate the cumulative frequency
	for (let i = 1; i < k; i++) {
		count[i] += count[i - 1];
	}

	const output = new Array(arr.length);
	// Store the sorted elements
	for (let i = arr.length - 1; i >= 0; i--) {
		count[arr[i] - minValue]--;
		output[count[arr[i] - minValue]] = arr[i];
	}

	// Copy the sorted elements back to the original array
	output.forEach((num, index) => (arr[index] = num));
}

counting_sort(arr);
// counting_sort_range(arr);
console.log(arr);
