'use strict';

const { Stack } = require('./stack_using_array');

class StackWithMin {
	mainStack = new Stack();
	minStack = new Stack();

	constructor(iterable = []) {
		for (const value of iterable) {
			this.push(value);
		}
	}

	push(value) {
		this.mainStack.push(value);
		if (this.minStack.isEmpty() || value <= this.minStack.top()) {
			this.minStack.push(value);
		}
	}

	pop() {
		if (this.mainStack.isEmpty()) {
			throw new Error('Attempting to pop from an empty stack');
		}
		if (this.mainStack.top() == this.minStack.top()) {
			this.minStack.pop();
		}
		return this.mainStack.pop();
	}

	getMin() {
		if (this.minStack.isEmpty()) {
			throw new Error('No elements in the stack to get minimum');
		}
		return this.minStack.top();
	}

	top() {
		return this.mainStack.top();
	}
	isEmpty() {
		return this.mainStack.isEmpty();
	}
	size() {
		return this.mainStack.size();
	}
	print() {
		this.mainStack.print();
	}
}

// ----------------- StackWithMin (inherits Stack) -----------------
class StackWithMin2 extends Stack {
	minStack = new Stack(); // extra stack to track min values

	constructor(iterable = []) {
		super();
		for (const value of iterable) {
			this.push(value);
		}
	}

	push(value) {
		super.push(value);
		if (this.minStack.isEmpty() || value <= this.minStack.top()) {
			this.minStack.push(value);
		}
	}

	pop() {
		let value = super.pop();
		if (value === this.minStack.top()) {
			this.minStack.pop();
		}
		return value;
	}

	getMin() {
		if (this.minStack.isEmpty()) {
			throw new Error('No elements in stack to get minimum');
		}
		return this.minStack.top();
	}
}

// const stack = new StackWithMin();
const stack = new StackWithMin2();
stack.push(5);
console.log('Minimum value:', stack.getMin());
stack.push(10);
console.log('Minimum value:', stack.getMin());
stack.push(20);
console.log('Minimum value:', stack.getMin());
stack.push(4);
console.log('Minimum value:', stack.getMin());
stack.push(6);
console.log('Minimum value:', stack.getMin());
stack.push(12);
console.log('Minimum value:', stack.getMin());
stack.push(1);
console.log('Minimum value:', stack.getMin());
stack.push(18);
console.log('Minimum value:', stack.getMin());
stack.print();

stack.pop();
console.log('Minimum value:', stack.getMin());
stack.pop();
console.log('Minimum value:', stack.getMin());
stack.pop();
console.log('Minimum value:', stack.getMin());
stack.pop();
console.log('Minimum value:', stack.getMin());
stack.pop();
console.log('Minimum value:', stack.getMin());
stack.pop();
console.log('Minimum value:', stack.getMin());
stack.print();
