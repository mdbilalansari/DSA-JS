'use strict';

let arr_1 = [5, 7, 9, 11, 13, 12];
let arr_2 = [6, 7, 8, 9, 10, 11];

function mergeArray(arr_1, arr_2) {
	let array = Array.from({ length: arr_1.length + arr_2.length });
	let i = 0,
		j = 0;
	while (i < arr_1.length && j < arr_2.length) {
		if (arr_1[i] <= arr_2[j]) {
			array[i + j] = arr_1[i];
			i++;
		} else {
			array[i + j] = arr_2[j];
			j++;
		}
	}
	while (i < arr_1.length) {
		array[i + j] = arr_1[i];
		i++;
	}
	while (j < arr_2.length) {
		array[i + j] = arr_2[j];
		j++;
	}
	return array;
}

// Time Complexity: O(n + m)
function median(arr_1, arr_2) {
	let arr = mergeArray(arr_1, arr_2);
	const mid = Math.floor(arr.length / 2);
	if (arr.length % 2 == 0) {
		return (arr[mid - 1] + arr[mid]) / 2;
	} else {
		return arr[mid];
	}
}

// Time Complexity: O(log(min(n, m)))
function median_2(arr_1, arr_2, n = arr_1.length, m = arr_2.length) {
	if (n > m) return median_2(arr_2, arr_1, m, n);
	let start = 0,
		end = n;
	while (start <= end) {
		let i = Math.floor((start + end) / 2);
		let j = Math.floor((n + m + 1) / 2) - i;

		let max_1 = i == 0 ? -Infinity : arr_1[i - 1];
		let max_2 = j == 0 ? -Infinity : arr_2[j - 1];

		let min_1 = i == n ? Infinity : arr_1[i];
		let min_2 = j == m ? Infinity : arr_2[j];

		if (max_1 <= min_2 && max_2 <= min_1) {
			if ((n + m) % 2 == 0) {
				return (Math.max(max_1, max_2) + Math.min(min_1, min_2)) / 2;
			} else {
				return Math.max(max_1, max_2);
			}
		} else if (max_1 > min_2) {
			end = i - 1;
		} else {
			// max_2 > min_1
			start = i + 1;
		}
	}

	throw new Error('Input arrays must be sorted');
}

console.log(median(arr_1, arr_2));
console.log(median_2(arr_1, arr_2));
