'use strict';

const { LinkedList, Node } = require('./linked_list');

class List extends LinkedList {
	// Time Complexity: O(n^2)
	detectLoop() {
		let current = this.head;
		let prev = this.head;
		while (current != null) {
			if (current.next == prev) {
				return true;
			}
			if (prev == current) {
				current = current.next;
				prev = this.head;
			} else {
				prev = prev.next;
			}
		}

		return false;
	}

	// Time Complexity: O(n)
	// Change node structure
	detectLoop2() {
		for (let current = this.head; current != null; current = current.next) {
			if (current.visited) return true;
			current.visited = true;
		}
		return false;
	}

	// Time Complexity: O(n)
	// Space Complexity: O(n)
	detectLoop3() {
		const set = new Set();
		for (let current = this.head; current != null; current = current.next) {
			if (set.has(current)) return true;
			set.add(current);
		}
		return false;
	}

	// Time Complexity: O(n)
	// Completely change(damage) the Linked List
	detectLoop4() {
		let temp = new Node(0);
		let current = this.head;
		while (current != null) {
			if (current.next == temp) {
				return true;
			} else {
				let next = current.next;
				current.next = temp;
				current = next;
			}
		}
		return false;
	}
}

function makeListHavingLoop() {
	const list = new List();
	for (let i = 1; i <= 5; i++) {
		list.pushBack(i * i);
	}
	let node = list.tail;
	for (let i = 6; i <= 10; i++) {
		list.pushBack(i * i);
	}
	list.tail.next = node;
	return list;
}

function makeListNotHavingLoop() {
	const list = new List();
	for (let i = 1; i <= 10; i++) {
		list.pushBack(i * i);
	}
	return list;
}

const list = makeListNotHavingLoop();
const listHavingLoop = makeListHavingLoop();

console.log(list.detectLoop() ? 'Loop Detected' : 'No Loop');
console.log(listHavingLoop.detectLoop() ? 'Loop Detected' : 'No Loop');

console.log(list.detectLoop2() ? 'Loop Detected' : 'No Loop');
console.log(listHavingLoop.detectLoop2() ? 'Loop Detected' : 'No Loop');

console.log(list.detectLoop3() ? 'Loop Detected' : 'No Loop');
console.log(listHavingLoop.detectLoop3() ? 'Loop Detected' : 'No Loop');

console.log(list.detectLoop4() ? 'Loop Detected' : 'No Loop');
console.log(listHavingLoop.detectLoop4() ? 'Loop Detected' : 'No Loop');
