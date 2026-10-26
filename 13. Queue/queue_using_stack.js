'use strict';

const Stack = require('../Containers/stack');

// Queue1: enqueue: O(1), dequeue/front/back: Amortized: O(1) | Worst Case: O(n)
class Queue1 {
	mainStack = new Stack();
	helperStack = new Stack();

	constructor(iterable = []) {
		for (const value of iterable) {
			this.enqueue(value);
		}
	}

	transferToHelper() {
		while (!this.mainStack.empty()) {
			this.helperStack.push(this.mainStack.pop());
		}
	}

	transferToMain() {
		while (!this.helperStack.empty()) {
			this.mainStack.push(this.helperStack.pop());
		}
	}

	enqueue(value) {
		this.mainStack.push(value);
	}

	dequeue() {
		if (this.empty()) throw new Error('Attempting to pop from an empty queue');

		// Transfer elements to this.helperStack only if it's empty
		if (this.helperStack.empty()) this.transferToHelper();
		return this.helperStack.pop();
	}

	front() {
		if (this.empty()) throw new Error('Attempting to access an empty queue');

		// Transfer elements to this.helperStack only if it's empty
		if (this.helperStack.empty()) this.transferToHelper();
		return this.helperStack.top();
	}

	back() {
		if (this.empty()) throw new Error('Attempting to access an empty queue');

		if (this.mainStack.empty()) this.transferToMain();
		return this.mainStack.top();
	}

	empty() {
		return this.mainStack.empty() && this.helperStack.empty();
	}

	size() {
		return this.mainStack.size() + this.helperStack.size();
	}

	print() {
		console.log([...this].join(' <- '));
	}

	*[Symbol.iterator]() {
		yield* [...this.helperStack];
		yield* [...this.mainStack].reverse();
	}
}

// Queue2: enqueue/back: O(1), front/dequeue: O(n)
class Queue2 {
	mainStack = new Stack();
	helperStack = new Stack();

	constructor(iterable = []) {
		for (const value of iterable) {
			this.enqueue(value);
		}
	}

	transferToHelper() {
		while (!this.mainStack.empty()) {
			this.helperStack.push(this.mainStack.pop());
		}
	}

	transferToMain() {
		while (!this.helperStack.empty()) {
			this.mainStack.push(this.helperStack.pop());
		}
	}

	enqueue(value) {
		this.mainStack.push(value);
	}

	back() {
		if (this.empty()) {
			throw new Error('Attempting to access an empty queue');
		}

		return this.mainStack.top();
	}

	dequeue() {
		if (this.empty()) {
			throw new Error('Attempting to dequeue from an empty queue');
		}

		this.transferToHelper();
		const value = this.helperStack.pop();
		this.transferToMain();

		return value;
	}

	front() {
		if (this.empty()) {
			throw new Error('Attempting to access an empty queue');
		}

		this.transferToHelper();
		const value = this.helperStack.top();
		this.transferToMain();

		return value;
	}

	empty() {
		return this.mainStack.empty();
	}

	size() {
		return this.mainStack.size();
	}

	print() {
		console.log([...this].join(' <- '));
	}

	*[Symbol.iterator]() {
		yield* [...this.mainStack].reverse();
	}
}

// Queue3: enqueue/back: O(n), dequeue/front: O(1)
class Queue3 {
	mainStack = new Stack();
	helperStack = new Stack();

	constructor(iterable = []) {
		for (const value of iterable) {
			this.enqueue(value);
		}
	}

	transferToHelper() {
		while (!this.mainStack.empty()) {
			this.helperStack.push(this.mainStack.pop());
		}
	}

	transferToMain() {
		while (!this.helperStack.empty()) {
			this.mainStack.push(this.helperStack.pop());
		}
	}

	// O(n)
	enqueue(value) {
		this.transferToHelper();
		this.helperStack.push(value);
		this.transferToMain();
	}

	// O(n)
	back() {
		if (this.empty()) {
			throw new Error('Attempting to access an empty queue');
		}

		this.transferToHelper();
		const value = this.helperStack.top();
		this.transferToMain();

		return value;
	}

	// O(1)
	dequeue() {
		if (this.empty()) {
			throw new Error('Attempting to dequeue from an empty queue');
		}

		return this.mainStack.pop();
	}

	// O(1)
	front() {
		if (this.empty()) {
			throw new Error('Attempting to access an empty queue');
		}

		return this.mainStack.top();
	}

	// O(1)
	empty() {
		return this.mainStack.empty();
	}

	// O(1)
	size() {
		return this.mainStack.size();
	}

	print() {
		console.log([...this].join(' <- '));
	}

	*[Symbol.iterator]() {
		yield* this.mainStack;
	}
}

// Queue4: Using one stack and recursion call stack
// enqueue/back: O(1), dequeue/front: O(n)
// auxiliary recursion space for dequeue/front: O(n)
class Queue4 {
	stack = new Stack();

	constructor(iterable = []) {
		for (const value of iterable) {
			this.enqueue(value);
		}
	}

	enqueue(value) {
		this.stack.push(value);
	}

	back() {
		if (this.empty()) {
			throw new Error('Attempting to access an empty queue');
		}

		return this.stack.top();
	}

	dequeue() {
		if (this.empty()) {
			throw new Error('Attempting to dequeue from an empty queue');
		}

		if (this.stack.size() === 1) {
			return this.stack.pop();
		}

		const temp = this.stack.pop();
		const value = this.dequeue();

		this.stack.push(temp);

		return value;
	}

	front() {
		if (this.empty()) {
			throw new Error('Attempting to access an empty queue');
		}

		if (this.stack.size() === 1) {
			return this.stack.top();
		}

		const temp = this.stack.pop();
		const value = this.front();

		this.stack.push(temp);

		return value;
	}

	empty() {
		return this.stack.empty();
	}

	size() {
		return this.stack.size();
	}

	print() {
		console.log([...this].join(' <- '));
	}

	*[Symbol.iterator]() {
		yield* [...this.stack].reverse();
	}
}

// Queue5: enqueue/back: O(1), dequeue/front: Amortized O(1) | Worst Case O(n)
class Queue5 {
	mainStack = new Stack();
	helperStack = new Stack();
	lastEnqueued;

	constructor(iterable = []) {
		for (const value of iterable) {
			this.enqueue(value);
		}
	}

	transferToHelper() {
		while (!this.mainStack.empty()) {
			this.helperStack.push(this.mainStack.pop());
		}
	}

	// O(1)
	enqueue(value) {
		this.mainStack.push(value);
		this.lastEnqueued = value;
	}

	// O(1)
	back() {
		if (this.empty()) {
			throw new Error('Attempting to access an empty queue');
		}

		return this.lastEnqueued;
	}

	// Amortized O(1), Worst O(n)
	dequeue() {
		if (this.empty()) {
			throw new Error('Attempting to dequeue from an empty queue');
		}

		if (this.helperStack.empty()) {
			this.transferToHelper();
		}

		const value = this.helperStack.pop();

		if (this.empty()) {
			this.lastEnqueued = undefined;
		}

		return value;
	}

	// Amortized O(1), Worst O(n)
	front() {
		if (this.empty()) {
			throw new Error('Attempting to access an empty queue');
		}

		if (this.helperStack.empty()) {
			this.transferToHelper();
		}

		return this.helperStack.top();
	}

	empty() {
		return this.mainStack.empty() && this.helperStack.empty();
	}

	size() {
		return this.mainStack.size() + this.helperStack.size();
	}

	print() {
		console.log([...this].join(' <- '));
	}

	*[Symbol.iterator]() {
		yield* [...this.helperStack];
		yield* [...this.mainStack].reverse();
	}
}

// Queue6: enqueue O(n), dequeue/front/back O(1)
class Queue6 {
	mainStack = new Stack();
	helperStack = new Stack();
	lastEnqueued;

	constructor(iterable = []) {
		for (const value of iterable) {
			this.enqueue(value);
		}
	}

	transferToHelper() {
		while (!this.mainStack.empty()) {
			this.helperStack.push(this.mainStack.pop());
		}
	}

	transferToMain() {
		while (!this.helperStack.empty()) {
			this.mainStack.push(this.helperStack.pop());
		}
	}

	// O(n)
	enqueue(value) {
		this.transferToHelper();
		this.helperStack.push(value);
		this.transferToMain();

		this.lastEnqueued = value;
	}

	// O(1)
	back() {
		if (this.empty()) {
			throw new Error('Attempting to access an empty queue');
		}

		return this.lastEnqueued;
	}

	// O(1)
	dequeue() {
		if (this.empty()) {
			throw new Error('Attempting to dequeue from an empty queue');
		}

		const value = this.mainStack.pop();

		if (this.empty()) {
			this.lastEnqueued = undefined;
		}

		return value;
	}

	// O(1)
	front() {
		if (this.empty()) {
			throw new Error('Attempting to access an empty queue');
		}

		return this.mainStack.top();
	}

	// O(1)
	empty() {
		return this.mainStack.empty();
	}

	// O(1)
	size() {
		return this.mainStack.size();
	}

	print() {
		console.log([...this].join(' <- '));
	}

	*[Symbol.iterator]() {
		yield* this.mainStack;
	}
}

const queue = new Queue1();
// const queue = new Queue2();
// const queue = new Queue3();
// const queue = new Queue4();
// const queue = new Queue5();
// const queue = new Queue6();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log('Initial queue:');
queue.print(); // 10 <- 20 <- 30

console.log('\nDequeue:', queue.dequeue()); // 10
console.log('Front:', queue.front()); // 20
console.log('Back:', queue.back()); // 30
console.log('Size:', queue.size()); // 2

console.log('\nQueue after operations:');
queue.print(); // 20 <- 30

console.log('\nIs empty?', queue.empty()); // false
