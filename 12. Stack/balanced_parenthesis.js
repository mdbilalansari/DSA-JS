'use strict';

const { Stack } = require('./stack_using_array');

function isMatching(a, b) {
	const closed = {
		'(': ')',
		'{': '}',
		'[': ']',
	};
	return closed[a] === b;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function isBalanced(str) {
	const stack = new Stack();
	const openBracket = new Set(['(', '{', '[']);
	const closeBracket = new Set([')', '}', ']']);
	for (let char of str) {
		if (openBracket.has(char)) {
			stack.push(char);
		} else if (closeBracket.has(char)) {
			if (stack.isEmpty()) return false;
			if (!isMatching(stack.top(), char)) return false;
			stack.pop();
		}
	}
	return stack.isEmpty();
}

const str = '{([a])}';
console.log(isBalanced(str) ? 'Balanced' : 'Not Balanced');
