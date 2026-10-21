'use strict';

const { LinkedList } = require('./linked_list');

// Time Complexity: O(m + n)
// Space Complexity: O(m)
function getIntersectionNode(list1, list2) {
	const set = new Set();
	for (let curr = list1.head; curr != null; curr = curr.next) {
		set.add(curr);
	}
	for (let curr = list2.head; curr != null; curr = curr.next) {
		if (set.has(curr)) return curr;
	}
	return null;
}

function getIntersectionNode_2(list1, list2) {
	let curr1 = list1.head;
	for (let i = 0; i < Math.abs(getLength(list1) - getLength(list2)); i++) {
		curr1 = curr1.next;
	}

	let curr2 = list2.head;
	while (curr1 != null && curr2 != null) {
		if (curr1 == curr2) {
			return curr1;
		}
		curr1 = curr1.next;
		curr2 = curr2.next;
	}
	return null;
}

function getLength(list) {
	let count = 0;
	for (let curr = list.head; curr != null; curr = curr.next) {
		count++;
	}
	return count;
}

const list1 = new LinkedList([1, 2, 3, 4, 5]);
let intersectionNode = list1.tail;
for (let i = 6; i <= 10; i++) {
	list1.pushBack(i);
}

const list2 = new LinkedList([11, 12, 13]);

list2.tail.next = intersectionNode;

console.log(String(list1));
console.log(String(list2));
if (getIntersectionNode(list1, list2)) {
	console.log('Intersection Node: ', getIntersectionNode(list1, list2).value);
} else {
	console.log('No Intersection');
}
