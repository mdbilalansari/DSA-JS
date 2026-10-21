'use strict';

// Node structure for a singly circular linked list
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Class to represent a singly circular linked list
class LinkedList {
	#head = null;
	#tail = null;
	#length = 0;

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
			this.#head = newNode;
		}
		this.#tail.next = this.#head;
		this.#length++;
		return this;
	}
	pushBack(value) {
		const newNode = new Node(value);
		if (this.#head == null) {
			this.#head = newNode;
			this.#tail = newNode;
		} else {
			this.#tail.next = newNode;
			this.#tail = newNode;
		}
		this.#tail.next = this.#head;
		this.#length++;
		return this;
	}
	popFront() {
		if (this.#head == null) throw new Error('List is empty');

		const value = this.#head.value;
		if (this.#head == this.#tail) {
			this.#head = null;
			this.#tail = null;
		} else {
			this.#head = this.#head.next;
			this.#tail.next = this.#head;
		}
		this.#length--;
		return value;
	}
	popBack() {
		if (this.#head == null) throw new Error('List is empty');

		const value = this.#tail.value;
		if (this.#head == this.#tail) {
			this.#head = null;
			this.#tail = null;
		} else {
			let current = this.#head;
			while (current.next != this.#tail) {
				current = current.next;
			}
			current.next = this.#head;
			this.#tail = current;
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
		return [...this].join(' -> ');
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
