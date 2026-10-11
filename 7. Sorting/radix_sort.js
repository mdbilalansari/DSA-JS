'use strict';

let arr = [123, 432, 543, 23, 45, 653, 234, 645, 78, 965, 345, 768, 90, 253];

const digit = (n, exp) => Math.floor(n / exp) % 10;

// Time Complexity: O(n+k)
// Should be used only for positive integers
function counting_sort(arr, exp) {
	const count = new Array(10).fill(0);

	// Count the frequency of each element
	arr.forEach((num) => count[digit(num, exp)]++);

	// Calculate the cumulative frequency
	for (let i = 1; i < 10; i++) {
		count[i] += count[i - 1];
	}

	const output = new Array(arr.length);
	// Store the sorted elements
	for (let i = arr.length - 1; i >= 0; i--) {
		count[digit(arr[i], exp)]--;
		output[count[digit(arr[i], exp)]] = arr[i];
	}

	// Copy the sorted elements back to the original array
	output.forEach((num, index) => (arr[index] = num));
}

function radix_sort(arr) {
	let max = Math.max(...arr);
	// For each digit from right to left
	for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
		counting_sort(arr, exp);
	}
}

radix_sort(arr);
console.log(arr);
