'use strict';

const array = [
	[7, 9],
	[6, 10],
	[4, 5],
	[1, 3],
	[2, 4],
];

// Time Complexity: O(nlogn)
function merge_intervals(array) {
	array.sort((a, b) => a[0] - b[0]);
	let result = array.length ? [array[0]] : [];
	for (let i = 1; i < array.length; i++) {
		if (array[i][0] <= result.at(-1)[1]) {
			result.at(-1)[1] = Math.max(array[i][1], result.at(-1)[1]);
		} else {
			result.push(array[i]);
		}
	}
	return result;
}

console.log(merge_intervals(array));
console.log(array);
