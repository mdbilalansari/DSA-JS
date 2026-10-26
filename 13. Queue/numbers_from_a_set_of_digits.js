'use strict';

const Queue = require('../Containers/queue');

// Time Complexity: O(n)
// Space Complexity: O(n)
// Generate first n numbers using given digits
function first_n_numbers(digitArray, n) {
	const sorted = digitArray.toSorted((a, b) => a - b);
	const queue = new Queue(sorted.filter((d) => d !== 0));
	const result = [...sorted];

	while (result.length < n) {
		let currNum = queue.pop();
		for (let i = 0; i < sorted.length; i++) {
			let num = currNum * 10 + sorted[i];
			result.push(num);
			queue.push(num);

			if (result.length == n) break;
		}
	}

	return result;
}

const n = 10;
const digitArray = [1, 2, 0];
const result = first_n_numbers(digitArray, n);
console.log(result.join(' -> '));
