'use strict';

let arr = [20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

// Time Complexity: O(n^2)
function cycleSortDistinct(arr) {
	const n = arr.length;
	for (let cycle_start = 0; cycle_start < n; cycle_start++) {
		let item = arr[cycle_start];
		let position = cycle_start; // items left of cs are already sorted
		for (let j = cycle_start + 1; j < n; j++) {
			if (arr[j] < item) {
				position++;
			}
		}
		[arr[position], item] = [item, arr[position]];

		while (position != cycle_start) {
			position = cycle_start;
			for (let j = cycle_start + 1; j < n; j++) {
				if (arr[j] < item) {
					position++;
				}
			}
			[arr[position], item] = [item, arr[position]];
		}
	}
}

// Time Complexity: O(n^2)
function cycleSort(arr) {
	const n = arr.length;
	let writes = 0;
	for (let cycle_start = 0; cycle_start < n; cycle_start++) {
		let item = arr[cycle_start];
		let position = cycle_start;
		for (let j = cycle_start + 1; j < n; j++) {
			if (arr[j] < item) {
				position++;
			}
		}

		// If item is already in correct position
		if (position == cycle_start) continue;

		// ignore all duplicate  elements
		while (item == arr[position]) {
			position++;
		}

		[arr[position], item] = [item, arr[position]];
		writes++;

		while (position != cycle_start) {
			position = cycle_start;
			for (let j = cycle_start + 1; j < n; j++) {
				if (arr[j] < item) {
					position++;
				}
			}
			// ignore all duplicate  elements
			while (item == arr[position]) {
				position++;
			}
			[arr[position], item] = [item, arr[position]];
			writes++;
		}
	}

	// Number of memory writes or swaps
	console.log('Number of memory writes or swaps: ', writes);
}

cycleSort(arr);
console.log(arr);
