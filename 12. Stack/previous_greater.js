'use strict';

const { Stack } = require('./stack_using_array');

// Time Complexity: O(n)
// Space Complexity: O(n)
function previousGreater(array) {
	const result = [];
	const stack = new Stack();
	for (let i = 0; i < array.length; i++) {
		while (!stack.isEmpty() && stack.top() <= array[i]) {
			stack.pop();
		}
		result.push(stack.isEmpty() ? null : stack.top());
		stack.push(array[i]);
	}
	return result;
}

// Time Complexity: O(n^2)
function previousGreater2(array) {
	const result = [];
	for (let i = 0; i < array.length; i++) {
		let j = i - 1;
		while (j >= 0 && array[j] <= array[i]) {
			j--;
		}
		result.push(j < 0 ? null : array[j]);
	}
	return result;
}

const array = [5, 15, 10, 8, 6, 12, 9, 18];

console.log(previousGreater(array));
console.log(previousGreater2(array));
