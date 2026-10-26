'use strict';

const Queue = require('../Containers/queue');
const Stack = require('../Containers/stack');

// Reverse a stack using a queue
// Time: O(n)
// Space: O(n)
function reverseStack(stack) {
	const queue = new Queue();

	while (!stack.empty()) queue.push(stack.pop());
	while (!queue.empty()) stack.push(queue.pop());
}

const stack = new Stack([1, 2, 3, 4, 5]);

console.log('Original stack:');
stack.print();

reverseStack(stack);

console.log('After reversing:');
stack.print();
