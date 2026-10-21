'use strict';

// Node structure for a doubly linked list
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

// Class to represent a doubly linked list
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
		this.#length++;
		return this;
	}
	// Time Complexity: O(1)
	popFront() {
		if (this.#head == null) throw new Error('List is empty');

		const value = this.#head.value;
		this.#head = this.#head.next;
		if (this.#head == null) {
			this.#tail = null;
		} else {
			this.#head.prev = null;
		}
		this.#length--;
		return value;
	}
	// Time Complexity: O(1)
	popBack() {
		if (this.#head == null) throw new Error('List is empty');

		const value = this.#tail.value;
		this.#tail = this.#tail.prev;
		if (this.#tail == null) {
			this.#head = null;
		} else {
			this.#tail.next = null;
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
		let result = [];
		let current = this.#head;

		while (current !== null) {
			result.push(current.value);
			current = current.next;
		}

		return result.join(' <-> ');
	}
	*[Symbol.iterator]() {
		let current = this.#head;

		while (current !== null) {
			yield current.value;
			current = current.next;
		}
	}
}

module.exports = LinkedList;
