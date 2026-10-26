'use strict';

const Queue = require('../Containers/queue');
const Stack = require('../Containers/stack');

// Reverse a queue using a stack
// Time: O(n)
// Space: O(n)
function reverseQueue(queue) {
	const stack = new Stack();

	while (!queue.empty()) stack.push(queue.pop());
	while (!stack.empty()) queue.push(stack.pop());
}

// Reverse a queue using recursion
// Time: O(n)
// Space: O(n)
function reverseQueue_Recursively(queue) {
	if (queue.empty()) return;

	const temp = queue.pop();
	reverseQueue_Recursively(queue);
	queue.push(temp);
}

const queue = new Queue([1, 2, 3, 4, 5]);

console.log('Original queue:');
queue.print();

reverseQueue(queue);

console.log('After iterative reverse:');
queue.print();

reverseQueue_Recursively(queue);

console.log('After recursive reverse:');
queue.print();
