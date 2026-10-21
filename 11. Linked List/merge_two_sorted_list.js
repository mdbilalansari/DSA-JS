'use strict';

const { LinkedList } = require('./linked_list');

// Time Complexity: O(n)
// Space Complexity: O(1)
function mergeTwoLists(A, B) {
	if (A == null || B == null) {
		return A ? A : B;
	}
	let head = null,
		tail = null;
	if (A.value < B.value) {
		head = tail = A;
		A = A.next;
	} else {
		head = tail = B;
		B = B.next;
	}
	while (A && B) {
		if (A.value < B.value) {
			tail.next = A;
			tail = A;
			A = A.next;
		} else {
			tail.next = B;
			tail = B;
			B = B.next;
		}
	}
	if (A) {
		tail.next = A;
	}
	if (B) {
		tail.next = B;
	}
	return head;
}

function printList(head) {
	const arr = [];
	for (let curr = head; curr != null; curr = curr.next) arr.push(curr.value);
	console.log(arr.join(' -> '));
}

const list1 = new LinkedList([10, 12, 20, 30, 40, 50]);
const list2 = new LinkedList([5, 25, 26, 41, 45]);
console.log(String(list1));
console.log(String(list2));

const head = mergeTwoLists(list1.head, list2.head);
printList(head);
