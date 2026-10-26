'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class List {
	#head = null;
	#tail = null;
	#size = 0;

	constructor(iterable = []) {
		for (const value of iterable) {
			this.pushBack(value);
		}
	}

	pushFront(value) {
		const newNode = new Node(value);
		if (this.#head == null) {
			this.#head = newNode;
			this.#tail = newNode;
		} else {
			newNode.next = this.#head;
			this.#head.prev = newNode;
			this.#head = newNode;
		}
		this.#size++;
		return this;
	}

	pushBack(value) {
		const newNode = new Node(value);
		if (this.#head == null) {
			this.#head = newNode;
			this.#tail = newNode;
		} else {
			this.#tail.next = newNode;
			newNode.prev = this.#tail;
			this.#tail = newNode;
		}
		this.#size++;
		return this;
	}

	popFront() {
		if (this.empty()) throw new Error('List is empty');

		const value = this.#head.value;
		this.#head = this.#head.next;
		if (this.#head == null) {
			this.#tail = null;
		} else {
			this.#head.prev = null;
		}
		this.#size--;
		return value;
	}

	popBack() {
		if (this.empty()) throw new Error('List is empty');

		const value = this.#tail.value;
		this.#tail = this.#tail.prev;
		if (this.#tail == null) {
			this.#head = null;
		} else {
			this.#tail.next = null;
		}
		this.#size--;
		return value;
	}

	front() {
		if (this.empty()) throw new Error('List is empty');

		return this.#head.value;
	}

	back() {
		if (this.empty()) throw new Error('List is empty');
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
		return [...this].join(' <-> ');
	}

	*[Symbol.iterator]() {
		for (let curr = this.#head; curr !== null; curr = curr.next) {
			yield curr.value;
		}
	}
}

module.exports = List;
