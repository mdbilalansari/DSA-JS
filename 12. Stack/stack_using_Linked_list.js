'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	#head = null;
	#size = 0;

	constructor(iterable = []) {
		for (let value of iterable) {
			this.push(value);
		}
	}

	push(value) {
		const node = new Node(value);
		node.next = this.#head;
		this.#head = node;
		this.#size++;
	}

	pop() {
		if (this.#head === null) {
			throw new Error('Attempting to pop from an empty stack');
		}
		const node = this.#head;
		this.#head = node.next;
		this.#size--;
		return node.value;
	}
	peek() {
		if (this.#head === null) {
			throw new Error('Attempting to peek at an empty stack');
		}
		return this.#head.value;
	}
	isEmpty() {
		return this.#size === 0;
	}
	size() {
		return this.#size;
	}
	print() {
		console.log([...this].join(' -> '));
	}
	*[Symbol.iterator]() {
		for (let curr = this.#head; curr !== null; curr = curr.next) {
			yield curr.value;
		}
	}
}

const stack = new Stack([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
stack.print();
console.log('Size:', stack.size());
console.log('Peek:', stack.peek());
stack.print();
console.log('Popped:', stack.pop());
stack.print();
console.log('Size:', stack.size());
