'use strict';

// Node structure for a singly linked list
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Class to represent a linked list
class LinkedList {
	head = null;
	tail = null;
	length = 0;

	constructor(iterable = []) {
		for (const value of iterable) {
			this.pushBack(value);
		}
	}

	pushFront(value) {
		const newNode = new Node(value);
		if (this.head == null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	pushBack(value) {
		const newNode = new Node(value);
		if (this.head == null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	popFront() {
		if (this.head == null) throw new Error('List is empty');

		const value = this.head.value;
		this.head = this.head.next;
		if (this.head == null) {
			this.tail = null;
		}
		this.length--;
		return value;
	}
	popBack() {
		if (this.head == null) throw new Error('List is empty');

		const value = this.tail.value;
		if (this.head == this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			let current = this.head;
			while (current.next != this.tail) {
				current = current.next;
			}
			current.next = null;
			this.tail = current;
		}
		this.length--;
		return value;
	}
	clear() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	toString() {
		let result = [];
		let current = this.head;

		while (current !== null) {
			result.push(current.value);
			current = current.next;
		}

		return result.join(' -> ');
	}
	[Symbol.iterator]() {
		let current = this.head;

		return {
			next() {
				if (current === null) {
					return { value: undefined, done: true };
				}
				const value = current.value;
				current = current.next;
				return { value, done: false };
			},
		};
	}
}

module.exports = { LinkedList, Node };
