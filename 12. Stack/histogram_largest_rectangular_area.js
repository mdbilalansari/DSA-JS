'use strict';

const { Stack } = require('./stack_using_array');

// Time Complexity: O(n)
// Space Complexity: O(n)
function nextSmallerElementIndex(array) {
	const result = [];
	const stack = new Stack();
	for (let i = array.length - 1; i >= 0; i--) {
		while (!stack.isEmpty() && array[stack.top()] >= array[i]) {
			stack.pop();
		}
		result.push(stack.isEmpty() ? array.length : stack.top());
		stack.push(i);
	}
	return result.reverse();
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function previousSmallerElementIndex(array) {
	const result = [];
	const stack = new Stack();
	for (let i = 0; i < array.length; i++) {
		while (!stack.isEmpty() && array[stack.top()] >= array[i]) {
			stack.pop();
		}
		result.push(stack.isEmpty() ? -1 : stack.top());
		stack.push(i);
	}
	return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function largestRectangularArea(array) {
	let prev_smaller_element_index = previousSmallerElementIndex(array);
	let next_smaller_element_index = nextSmallerElementIndex(array);

	let max_area = 0;
	for (let i = 0; i < array.length; i++) {
		let width = next_smaller_element_index[i] - prev_smaller_element_index[i] - 1;
		let area = width * array[i];
		max_area = Math.max(max_area, area);
	}

	return max_area;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
// Efficient Approach
function largestRectangularArea2(array) {
	const stack = new Stack();
	let max_area = 0;
	for (let i = 0; i < array.length; i++) {
		while (!stack.isEmpty() && array[stack.top()] >= array[i]) {
			let height = array[stack.top()];
			stack.pop();
			let width = stack.isEmpty() ? i : i - stack.top() - 1;
			let curr_area = width * height;
			max_area = Math.max(max_area, curr_area);
		}
		stack.push(i);
	}

	while (!stack.isEmpty()) {
		let height = array[stack.top()];
		stack.pop();
		let width = stack.isEmpty() ? array.length : array.length - stack.top() - 1;
		let curr_area = width * height;
		max_area = Math.max(max_area, curr_area);
	}
	return max_area;
}

// Time Complexity: O(n^2)
function largestRectangularArea3(array) {
	let max_area = 0;
	for (let i = 0; i < array.length; i++) {
		let curr_area = array[i];
		for (let j = i - 1; j >= 0; j--) {
			if (array[j] >= array[i]) {
				curr_area += array[i];
			} else {
				break;
			}
		}
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] >= array[i]) {
				curr_area += array[i];
			} else {
				break;
			}
		}
		max_area = Math.max(max_area, curr_area);
	}
	return max_area;
}

const array = [6, 2, 5, 4, 1, 5, 6];
console.log(largestRectangularArea(array));
console.log(largestRectangularArea2(array));
console.log(largestRectangularArea3(array));
