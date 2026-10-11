'use strict';

const array = [10, 9, 81, 7, 63, 52, 4, 3, 2, 11];

// Time Complexity: O(n^2)
function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let key = array[i];
		let j = i - 1;
		while (j >= 0 && array[j] > key) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = key;
	}
}

insertionSort(array);
console.log(array);
