/*
Shell sort is an optimized version of insertion sort that works by first comparing and
moving elements that are far apart, then gradually reducing the gap between compared elements.
*/

/*
How It Works
1. Choose an initial gap (often n/2).
2. Compare and swap elements that are gap apart (like doing insertion sort on several interleaved subarrays).
3. Reduce the gap (usually divide by 2, or use another sequence like Knuth’s).
4. Repeat until gap = 1, then perform a regular insertion sort.
*/

'use strict';

function gappedInsertionSort(arr, gap) {
	for (let i = gap; i < arr.length; i++) {
		let temp = arr[i];
		let j = i;
		while (j >= gap && arr[j - gap] > temp) {
			arr[j] = arr[j - gap];
			j -= gap;
		}
		arr[j] = temp;
	}
}

// Time Complexity: O(n^2)
// Best: O(n log n)
// Average: Between O(n^(3/2)) and O(n^(4/3)) for common gaps
// Worst: O(n²)

// Auxiliary Space: O(1) --Inplace
// UNSTABLE
function shellSort(arr) {
	// Start with a big gap, then reduce it
	for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
		// Perform a gapped insertion sort
		gappedInsertionSort(arr, gap);
	}
}

let arr = [12, 34, 54, 2, 3];
shellSort(arr);
console.log(arr);
