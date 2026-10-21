'use strict';

const { LinkedList } = require('./linked_list');

class List extends LinkedList {
	_recursively_pairwise_swap(head) {
		if (head == null || head.next == null) {
			if (head != null) this.tail = head;
			return head;
		}

		let current = head;
		let next = head.next;
		this.tail = current;
		current.next = this._recursively_pairwise_swap(next.next);
		next.next = current;
		return next;
	}

	// Time Complexity: O(n)
	// Swap the value of each pair of nodes
	pairwise_swap() {
		let curr = this.head;
		while (curr != null && curr.next != null) {
			[curr.value, curr.next.value] = [curr.next.value, curr.value];
			curr = curr.next.next;
		}
	}

	pairwise_swap_2() {
		if (this.head == null || this.head.next == null) {
			return;
		}
		// Swap the first two nodes
		let curr = this.head.next.next;
		let prev = this.head;
		this.head = this.head.next;
		this.head.next = prev;

		// Swap the rest of the nodes
		while (curr != null && curr.next != null) {
			prev.next = curr.next;
			prev = curr;
			let next = curr.next.next;
			curr.next.next = curr;
			curr = next;
		}

		prev.next = curr;
		this.tail = curr ? curr : prev;
	}

	recursively_pairwise_swap() {
		this.head = this._recursively_pairwise_swap(this.head);
	}
}

const list = new List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log(String(list));
list.pairwise_swap();
// list.pairwise_swap_2();
// list.recursively_pairwise_swap();
console.log(String(list));
list.pushBack(12);
console.log(String(list));
