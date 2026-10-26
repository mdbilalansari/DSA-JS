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

	top() {
		if (this.#head === null) {
			throw new Error('Attempting to peek at an empty stack');
		}
		return this.#head.value;
	}

	clear() {
		this.#head = null;
		this.#size = 0;
	}

	empty() {
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

module.exports = Stack;
