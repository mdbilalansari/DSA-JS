/*
How it works
  1. Find the minimum element in the unsorted part of the array.
  2. Swap it with the first unsorted element.
  3. Move the boundary between sorted and unsorted parts forward by one.
  4. Repeat until the array is sorted.
 */

'use strict';

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

// Time Complexity: O(n^2)
// Auxiliary Space: O(1) --Inplace
// UNSTABLE
function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i; // Assume i is min
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		swap(arr, i, minIndex) // Swap min with current position
	}
}

const arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log(arr);
