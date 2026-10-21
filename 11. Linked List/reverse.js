'use strict';

const { LinkedList } = require('./linked_list');

class List extends LinkedList {
	_recursively_reverse(head) {
		if (head == null || head.next == null) {
			return head;
		}
		const restHead = this._recursively_reverse(head.next);
		const restTail = head.next;
		restTail.next = head;
		head.next = null;
		return restHead;
	}

	_recursively_reverse_2(current, previous) {
		if (current == null) {
			return previous;
		}
		let next = current.next;
		current.next = previous;
		return this._recursively_reverse_2(next, current);
	}

	_recursively_reverse_in_groups(head, k) {
		if (head == null) {
			return null;
		}
		let prev = null;
		let current = head;
		let count = 0;
		while (current != null && count < k) {
			let next = current.next;
			current.next = prev;
			prev = current;
			current = next;
			count++;
		}
		this.tail = head;
		head.next = this._recursively_reverse_in_groups(current, k);
		return prev;
	}
	reverse() {
		this.tail = this.head;
		let prev = null;
		let current = this.head;

		while (current != null) {
			let next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		this.head = prev;
	}
	reverse_in_groups(k) {
		let isFirstPass = true;
		let current = this.head;
		let prevFirst = null;
		while (current != null) {
			let first = current;
			let prev = null;
			let count = 0;
			while (current != null && count < k) {
				let next = current.next;
				current.next = prev;
				prev = current;
				current = next;
				count++;
			}
			if (isFirstPass) {
				this.head = prev;
				isFirstPass = false;
			} else {
				prevFirst.next = prev;
			}
			prevFirst = first;
			this.tail = first;
		}
	}

	recursively_reverse() {
		this.tail = this.head;
		this.head = this._recursively_reverse(this.head);
	}

	recursively_reverse_2() {
		this.tail = this.head;
		this.head = this._recursively_reverse_2(this.head, null);
	}

	recursively_reverse_in_groups(k) {
		this.head = this._recursively_reverse_in_groups(this.head, k);
	}
}

const list = new List();
const k = 3;
for (let i = 1; i <= 10; i++) {
	list.pushBack(i);
}
console.log(String(list));
list.reverse();
console.log(String(list));
list.pushBack(99);
console.log(String(list));
list.recursively_reverse();
console.log(String(list));
list.pushBack(88);
console.log(String(list));
list.recursively_reverse_2();
console.log(String(list));
list.pushBack(77);
console.log(String(list));
list.reverse_in_groups(k);
console.log(String(list));
list.pushBack(66);
console.log(String(list));
list.recursively_reverse_in_groups(k);
console.log(String(list));
list.pushBack(55);
console.log(String(list));
