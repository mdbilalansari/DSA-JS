/*
How it works
  1. Repeatedly pass through the array.
  2. Compare adjacent elements.
  3. Swap them if they are in the wrong order.
  4. After each pass, the largest element “bubbles up” to its correct position at the end.
  5. Stop early if no swaps happen in a pass (array is already sorted).
*/

'use strict';

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

// Time Complexity: O(n^2)
// Auxiliary Space: O(1) --Inplace
// STABLE
function bubbleSort(arr) {
	let swapped;
	for (let i = 0; i < arr.length - 1; i++) {
		swapped = false;
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				swapped = true;
			}
		}
		// If no swaps, array is already sorted
		if (!swapped) break;
	}
}

let arr = [64, 25, 12, 22, 11];

bubbleSort(arr);
console.log(arr);
