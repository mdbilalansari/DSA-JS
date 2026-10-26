'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class Deque {
	#front = null;
	#back = null;
	#size = 0;

	constructor(iterable = []) {
		for (const value of iterable) {
			this.pushBack(value);
		}
	}

	// O(1)
	pushFront(value) {
		const node = new Node(value);

		if (this.empty()) {
			this.#front = node;
			this.#back = node;
		} else {
			node.next = this.#front;
			this.#front.prev = node;
			this.#front = node;
		}

		this.#size++;
		return this;
	}

	// O(1)
	pushBack(value) {
		const node = new Node(value);

		if (this.empty()) {
			this.#front = node;
			this.#back = node;
		} else {
			node.prev = this.#back;
			this.#back.next = node;
			this.#back = node;
		}

		this.#size++;
	}

	// O(1)
	popFront() {
		if (this.empty()) {
			throw new Error('Deque is empty');
		}

		const value = this.#front.value;

		this.#front = this.#front.next;

		if (this.#front === null) {
			this.#back = null;
		} else {
			this.#front.prev = null;
		}

		this.#size--;
		return value;
	}

	// O(1)
	popBack() {
		if (this.empty()) {
			throw new Error('Deque is empty');
		}

		const value = this.#back.value;

		this.#back = this.#back.prev;

		if (this.#back === null) {
			this.#front = null;
		} else {
			this.#back.next = null;
		}

		this.#size--;
		return value;
	}

	// O(1)
	front() {
		if (this.empty()) {
			throw new Error('Deque is empty');
		}

		return this.#front.value;
	}

	// O(1)
	back() {
		if (this.empty()) {
			throw new Error('Deque is empty');
		}

		return this.#back.value;
	}

	// O(1)
	size() {
		return this.#size;
	}

	// O(1)
	empty() {
		return this.#size === 0;
	}

	// O(1)
	clear() {
		this.#front = null;
		this.#back = null;
		this.#size = 0;
	}

	print() {
		return [...this].join(' <-> ');
	}

	*[Symbol.iterator]() {
		for (let curr = this.#front; curr !== null; curr = curr.next) {
			yield curr.value;
		}
	}
}

module.exports = Deque;
