'use strict';

const { LinkedList } = require('./linked_list');

class List extends LinkedList {
	// Time Complexity: O(n)
	nth_node_from_end(n) {
		if (this.head == null) return;
		let first = this.head;
		for (let i = 0; i < n; i++) {
			if (first == null) return;
			first = first.next;
		}
		let second = this.head;
		while (first != null) {
			second = second.next;
			first = first.next;
		}
		return second.value;
	}
	// Time Complexity: O(n)
	nth_node_from_end_2(n) {
		if (this.head == null || this.length < n) return;
		let current = this.head;
		for (let i = 0; i < this.length - n; i++) {
			current = current.next;
		}

		return current.value;
	}
}

const list = new List();
const n = 4;
for (let i = 1; i <= 10; i++) {
	list.pushBack(i);
}

console.log(String(list));
console.log(`The ${n}"th node from the end is: ${list.nth_node_from_end(n)}`);
console.log(`The ${n}"th node from the end is: ${list.nth_node_from_end_2(n)}`);
