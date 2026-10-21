'use strict';

const { LinkedList } = require('./linked_list');

class List extends LinkedList {
	// Time Complexity: O(1)
	deleteNode(node) {
		if (node == null || node.next == null) {
			throw new Error('Cannot delete the last node');
		}
		let next = node.next;
		node.value = next.value;
		node.next = next.next;
	}
}

const list = new List();
for (let i = 1; i <= 5; i++) {
	list.pushBack(i);
}

const node = list.tail;
for (let i = 6; i <= 10; i++) {
	list.pushBack(i);
}

console.log(String(list));
console.log('Deleted', node.value);
list.deleteNode(node);
console.log(String(list));
