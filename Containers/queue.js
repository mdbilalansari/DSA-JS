'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	#head = null;
	#tail = null;
	#size = 0;

	constructor(iterable = []) {
		for (const value of iterable) {
			this.push(value);
		}
	}

	push(value) {
		const newNode = new Node(value);

		if (this.#head === null) {
			this.#head = newNode;
			this.#tail = newNode;
		} else {
			this.#tail.next = newNode;
			this.#tail = newNode;
		}

		this.#size++;
		return this;
	}

	pop() {
		if (this.empty()) {
			throw new Error('Queue is empty');
		}

		const value = this.#head.value;
		this.#head = this.#head.next;

		if (this.#head === null) {
			this.#tail = null;
		}

		this.#size--;
		return value;
	}

	front() {
		if (this.empty()) {
			throw new Error('Queue is empty');
		}

		return this.#head.value;
	}

	back() {
		if (this.empty()) {
			throw new Error('Queue is empty');
		}

		return this.#tail.value;
	}

	clear() {
		this.#head = null;
		this.#tail = null;
		this.#size = 0;
	}

	size() {
		return this.#size;
	}

	empty() {
		return this.#size === 0;
	}

	print() {
		console.log([...this].join(' <- '));
	}

	*[Symbol.iterator]() {
		for (let curr = this.#head; curr !== null; curr = curr.next) {
			yield curr.value;
		}
	}
}

module.exports = Queue;
