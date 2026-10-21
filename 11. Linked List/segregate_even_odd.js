'use strict';

const { LinkedList } = require('./linked_list');

class List extends LinkedList {
	segregateEvenOdd() {
		let evenHead = null,
			evenTail = null;
		let oddHead = null,
			oddTail = null;

		for (let current = this.head; current != null; current = current.next) {
			if (current.value % 2 == 0) {
				if (evenHead == null) {
					evenHead = current;
					evenTail = current;
				} else {
					evenTail.next = current;
					evenTail = current;
				}
			} else {
				if (oddHead == null) {
					oddHead = current;
					oddTail = current;
				} else {
					oddTail.next = current;
					oddTail = current;
				}
			}
		}
		if (evenTail) evenTail.next = oddHead;
		if (oddTail) oddTail.next = null;

		this.head = evenHead ? evenHead : oddHead;
		this.tail = oddTail ? oddTail : evenTail;
	}
}

const list = new List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log(String(list));
list.segregateEvenOdd();
console.log(String(list));
list.pushBack(12);
console.log(String(list));
