'use strict';

const { LinkedList } = require('./linked_list');

class List extends LinkedList {
	// Time Complexity: O(n)
	// Do not change the Linked List
	detectLoop() {
		let slow = this.head;
		let fast = this.head;

		while (fast != null && fast.next != null) {
			slow = slow.next;
			fast = fast.next.next;
			if (slow == fast) {
				return true;
			}
		}

		return false;
	}

	// Time Complexity: O(n)
	removeLoop() {
		let slow = this.head;
		let fast = this.head;
		while (fast != null && fast.next != null) {
			slow = slow.next;
			fast = fast.next.next;
			if (slow == fast) {
				break;
			}
		}
		if (slow != fast) return;

		slow = this.head;
		while (slow.next != fast.next) {
			slow = slow.next;
			fast = fast.next;
		}
		fast.next = null;
	}

	startOfLoop() {
		let slow = this.head;
		let fast = this.head;
		while (fast != null && fast.next != null) {
			slow = slow.next;
			fast = fast.next.next;
			if (slow == fast) {
				break;
			}
		}
		if (slow != fast) return null;

		slow = this.head;
		while (slow != fast) {
			slow = slow.next;
			fast = fast.next;
		}
		return slow;
	}

	lengthOfLoop() {
		let slow = this.head;
		let fast = this.head;
		while (fast != null && fast.next != null) {
			slow = slow.next;
			fast = fast.next.next;
			if (slow == fast) {
				break;
			}
		}
		if (slow != fast) return 0;

		let count = 0;
		do {
			slow = slow.next;
			count++;
		} while (fast != slow);

		return count;
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

const list = [makeListHavingLoop, makeListNotHavingLoop][Math.floor(Math.random() * 2)]();

if (list.detectLoop()) {
	console.log('Loop detected');
	console.log('Start of loop:', list.startOfLoop().value);
	console.log('Length of loop:', list.lengthOfLoop());
	list.removeLoop();
	console.log(String(list));
} else {
	console.log('No Loop detected');
	console.log(String(list));
}
