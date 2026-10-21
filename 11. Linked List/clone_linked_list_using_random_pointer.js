'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.random = null;
	}
}

function printList(head) {
	const arr = [];
	for (let curr = head; curr != null; curr = curr.next) {
		arr.push([curr.value, curr.random?.value]);
	}
	console.log(arr);
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function cloneList(head) {
	const map = new Map();
	// create a copy of the original list Nodes
	for (let curr = head; curr != null; curr = curr.next) {
		map.set(curr, new Node(curr.value));
	}

	// copy the next and random pointers
	for (let curr = head; curr != null; curr = curr.next) {
		let cloneNode = map.get(curr);
		cloneNode.next = map.get(curr.next);
		cloneNode.random = map.get(curr.random);
	}

	return map.get(head);
}

// Time Complexity: O(n)
// Space Complexity: O(1)
function cloneList_2(head) {
	if (head == null) return null;

	// Step 1: Clone each node and insert it after the original node
	let curr = head;
	while (curr != null) {
		let next = curr.next;
		curr.next = new Node(curr.value);
		curr.next.next = next;
		curr = next;
	}

	// Step 2: Assign the random pointers
	for (curr = head; curr != null; curr = curr.next.next) {
		curr.next.random = curr.random ? curr.random.next : null;
	}

	// Step 3: Separate the original list and the clone list
	let cloneHead = head.next;
	let currClone = cloneHead;
	curr = head;
	while (curr != null) {
		curr.next = currClone.next;
		curr = curr.next;
		if (curr != null) {
			currClone.next = curr.next;
			currClone = currClone.next;
		}
	}

	return cloneHead;
}

const nodes = [new Node(10), new Node(5), new Node(20), new Node(15), new Node(25)];
const head = nodes[0];
for (let i = 0; i < nodes.length - 1; i++) {
	nodes[i].next = nodes[i + 1];
}

nodes[0].random = nodes[2];
nodes[1].random = nodes[0];
nodes[2].random = nodes[1];
nodes[3].random = nodes[2];
printList(head);

// const clone = cloneList(head);
const clone = cloneList_2(head);
printList(head);
printList(clone);
