'use strict';

// Node structure for a doubly circular linked list
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

// Class to represent a doubly circular linked list
class LinkedList {
	#head = null;
	#tail = null;
	#length = 0;

	constructor(iterable = []) {
		for (const value of iterable) {
			this.pushBack(value);
		}
	}

	// Time Complexity: O(1)
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
		this.#tail.next = this.#head;
		this.#head.prev = this.#tail;
		this.#length++;
		return this;
	}
	// Time Complexity: O(1)
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
		this.#tail.next = this.#head;
		this.#head.prev = this.#tail;
		this.#length++;
		return this;
	}
	// Time Complexity: O(1)
	popFront() {
		if (this.#head == null) throw new Error('List is empty');

		const value = this.#head.value;
		if (this.#head == this.#tail) {
			this.#head = null;
			this.#tail = null;
		} else {
			this.#head = this.#head.next;
			this.#head.prev = this.#tail;
			this.#tail.next = this.#head;
		}
		this.#length--;
		return value;
	}
	// Time Complexity: O(1)
	popBack() {
		if (this.#head == null) throw new Error('List is empty');

		const value = this.#tail.value;
		if (this.#head == this.#tail) {
			this.#head = null;
			this.#tail = null;
		} else {
			this.#tail = this.#tail.prev;
			this.#tail.next = this.#head;
			this.#head.prev = this.#tail;
		}
		this.#length--;
		return value;
	}
	clear() {
		this.#head = null;
		this.#tail = null;
		this.#length = 0;
	}
	get length() {
		return this.#length;
	}
	toString() {
		return [...this].join(' <-> ');
	}
	*[Symbol.iterator]() {
		if (this.#head == null) return;
		let current = this.#head;

		do {
			yield current.value;
			current = current.next;
		} while (current !== this.#head);
	}
}

module.exports = LinkedList;
