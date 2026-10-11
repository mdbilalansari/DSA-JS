/* (Optimised Version of Bubble Sort)
How it works
  1. Forward pass → compare adjacent elements left to right, swap if needed (largest element moves to the end).
  2. Backward pass → compare adjacent elements right to left, swap if needed (smallest element moves to the front).
  3. Reduce the range after each pass from both ends.
  4. Repeat until no swaps happen in either direction.
*/

'use strict';

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

// Time Complexity: O(n^2)
// Auxiliary Space: O(1) --Inplace
// STABLE
function cocktailSort(arr) {
	let swapped = true;
	let start = 0;
	let end = arr.length - 1;

	while (swapped) {
		swapped = false;

		// Forward pass
		for (let i = start; i < end; i++) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
				swapped = true;
			}
		}

		// If nothing moved, array is sorted
		if (!swapped) break;

		swapped = false;
		end--; // last element is now in place

		// Backward pass
		for (let i = end - 1; i >= start; i--) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
				swapped = true;
			}
		}

		start++; // first element is now in place
	}
}

let arr = [5, 1, 4, 2, 8, 0, 2];
cocktailSort(arr);
console.log(arr);
