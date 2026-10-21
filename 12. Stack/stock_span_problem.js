'use strict';

const { Stack } = require('./stack_using_array');

// Time Complexity: O(n^2)
function stockSpan(prices) {
	const result = [];
	for (let i = 0; i < prices.length; i++) {
		let span = 1;
		for (let j = i - 1; j >= 0 && prices[i] >= prices[j]; j--) {
			span++;
		}
		result.push(span);
	}
	return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function stockSpan_2(prices) {
	const result = [];
	let stack = new Stack();
	for (let i = 0; i < prices.length; i++) {
		let span = 1;
		while (!stack.isEmpty() && stack.top()[0] <= prices[i]) {
			span += stack.top()[1];
			stack.pop();
		}
		stack.push([prices[i], span]);
		result.push(span);
	}
	return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function stockSpan_3(prices) {
	const result = [];
	const stack = new Stack();
	stack.push(0);
	for (let i = 0; i < prices.length; i++) {
		while (!stack.isEmpty() && prices[stack.top()] <= prices[i]) {
			stack.pop();
		}
		let span = stack.isEmpty() ? i + 1 : i - stack.top();
		result.push(span);
		stack.push(i);
	}
	return result;
}

const prices = [15, 13, 12, 14, 16, 8, 6, 4, 10, 30];
console.log(stockSpan(prices));
console.log(stockSpan_2(prices));
console.log(stockSpan_3(prices));
