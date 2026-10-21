'use strict';

const { Stack } = require('./stack_using_array');

// Time Complexity: O(n^2)
function nextGreater(array) {
	const result = [];
	for (let i = 0; i < array.length; i++) {
		let j = i + 1;
		while (j < array.length && array[j] <= array[i]) {
			j++;
		}
		result.push(j < array.length ? array[j] : null);
	}
	return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function nextGreater2(array) {
	const result = [];
	const stack = new Stack();
	for (let i = array.length - 1; i >= 0; i--) {
		while (!stack.isEmpty() && stack.top() <= array[i]) {
			stack.pop();
		}
		result.push(stack.isEmpty() ? null : stack.top());
		stack.push(array[i]);
	}
	return result.reverse();
}

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

// Time Complexity: O(n)
// Space Complexity: O(n)
function nextGreater3(array) {
	return previousGreater(array.toReversed()).reverse();
}

const array = [5, 15, 10, 8, 6, 12, 9, 18];
console.log(nextGreater(array));
console.log(nextGreater2(array));
console.log(nextGreater3(array));
