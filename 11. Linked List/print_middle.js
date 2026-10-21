'use strict';

const { LinkedList } = require('./linked_list');

class List extends LinkedList {
	// Time Complexity: O(n)
	getMiddle() {
		if (this.head == null) return;
		let slow = this.head;
		let fast = this.head;
		while (fast != null && fast.next != null) {
			slow = slow.next;
			fast = fast.next.next;
		}
		return slow.value;
	}

	// Time Complexity: O(n)
	getMiddle_2() {
		if (this.head == null) return;
		let current = this.head;
		for (let i = 0; i < Math.floor(this.length / 2); i++) {
			current = current.next;
		}
		return current.value;
	}
}

const list = new List();
for (let i = 1; i <= 10; i++) {
	list.pushBack(i);
}
console.log(String(list));
console.log('Middle element:', list.getMiddle());
console.log('Middle element:', list.getMiddle_2());

list.clear();
for (let i = 1; i <= 9; i++) {
	list.pushBack(i);
}
console.log(String(list));
console.log('Middle element:', list.getMiddle());
console.log('Middle element:', list.getMiddle_2());
