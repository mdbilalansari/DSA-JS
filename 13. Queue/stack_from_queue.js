'use strict';

const Queue = require('../Containers/queue');

// Stack using two queues
// push: O(n), pop: O(1), top: O(1)
class Stack1 {
	mainQueue = new Queue();
	helperQueue = new Queue();

	constructor(iterable = []) {
		for (const value of iterable) {
			this.push(value);
		}
	}

	push(value) {
		this.helperQueue.push(value);

		while (!this.mainQueue.empty()) {
			this.helperQueue.push(this.mainQueue.pop());
		}

		// Swap the queues
		[this.mainQueue, this.helperQueue] = [this.helperQueue, this.mainQueue];
	}

	pop() {
		if (this.empty()) {
			throw new Error('Attempting to pop from an empty stack');
		}

		return this.mainQueue.pop();
	}

	top() {
		if (this.empty()) {
			throw new Error('Attempting to get top from an empty stack');
		}

		return this.mainQueue.front();
	}

	empty() {
		return this.mainQueue.empty();
	}

	size() {
		return this.mainQueue.size();
	}

	print() {
		console.log([...this].join(' -> '));
	}

	*[Symbol.iterator]() {
		yield* this.mainQueue;
	}
}

// Stack using two queues
// push: O(1), pop: O(n), top: O(1)
class Stack2 {
	mainQueue = new Queue();
	helperQueue = new Queue();

	constructor(iterable = []) {
		for (const value of iterable) {
			this.push(value);
		}
	}

	push(value) {
		this.mainQueue.push(value);
	}

	pop() {
		if (this.empty()) {
			throw new Error('Attempting to pop from an empty stack');
		}

		// Move all elements except the last one
		while (this.mainQueue.size() > 1) {
			this.helperQueue.push(this.mainQueue.pop());
		}

		const value = this.mainQueue.pop();

		// Swap the queues
		[this.mainQueue, this.helperQueue] = [this.helperQueue, this.mainQueue];

		return value;
	}

	top() {
		if (this.empty()) {
			throw new Error('Attempting to get top from an empty stack');
		}

		return this.mainQueue.back();
	}

	empty() {
		return this.mainQueue.empty();
	}

	size() {
		return this.mainQueue.size();
	}

	print() {
		console.log([...this].join(' -> '));
	}

	*[Symbol.iterator]() {
		yield* [...this.mainQueue].reverse();
	}
}

// Stack using one queue
// push: O(n), pop: O(1), top: O(1)
class Stack3 {
	queue = new Queue();

	constructor(iterable = []) {
		for (const value of iterable) {
			this.push(value);
		}
	}

	push(value) {
		this.queue.push(value);

		// Move the new element to the front
		for (let i = 0; i < this.queue.size() - 1; i++) {
			this.queue.push(this.queue.pop());
		}
	}

	pop() {
		if (this.empty()) {
			throw new Error('Attempting to pop from an empty stack');
		}

		return this.queue.pop();
	}

	top() {
		if (this.empty()) {
			throw new Error('Attempting to get top from an empty stack');
		}

		return this.queue.front();
	}

	empty() {
		return this.queue.empty();
	}

	size() {
		return this.queue.size();
	}

	print() {
		console.log([...this].join(' -> '));
	}

	*[Symbol.iterator]() {
		yield* this.queue;
	}
}

// Stack using one queue and recursion
// push: O(n), pop: O(1), top: O(1)
class Stack4 {
	queue = new Queue();

	constructor(iterable = []) {
		for (const value of iterable) {
			this.push(value);
		}
	}

	_reverseQueue() {
		if (this.queue.empty()) return;

		// Remove the front element
		const temp = this.queue.pop();

		// Reverse the remaining queue
		this._reverseQueue();

		// Add the element back
		this.queue.push(temp);
	}

	push(value) {
		this._reverseQueue();
		this.queue.push(value);
		this._reverseQueue();
	}

	pop() {
		if (this.queue.empty()) {
			throw new Error('Attempting to pop from an empty stack');
		}

		return this.queue.pop();
	}

	top() {
		if (this.queue.empty()) {
			throw new Error('Attempting to top from an empty stack');
		}

		return this.queue.front();
	}

	empty() {
		return this.queue.empty();
	}

	size() {
		return this.queue.size();
	}

	print() {
		console.log([...this].join(' -> '));
	}

	*[Symbol.iterator]() {
		yield* this.queue;
	}
}

// const stack = new Stack1();
// const stack = new Stack2();
// const stack = new Stack3();
const stack = new Stack4();

console.log('Empty:', stack.empty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log('Stack:');
stack.print();

console.log('Top:', stack.top());
console.log('Size:', stack.size());

console.log('Pop:', stack.pop());
console.log('Pop:', stack.pop());

console.log('After popping:');
stack.print();

console.log('Top:', stack.top());
console.log('Size:', stack.size());

stack.push(40);
stack.push(50);

console.log('After pushing 40 and 50:');
stack.print();

console.log('Elements using iterator:');
for (const value of stack) {
	console.log(value);
}

while (!stack.empty()) {
	console.log('Pop:', stack.pop());
}

console.log('Empty:', stack.empty());
