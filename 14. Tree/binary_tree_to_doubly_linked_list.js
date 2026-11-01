'use strict';

const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
	_get_tail(head) {
		if (head === null) return null;

		let tail = head;
		while (tail.right != null) tail = tail.right;
		return tail;
	}

	// Time Complexity: O(1)
	_push_front(head, node) {
		if (head == null) {
			node.left = node.right = null;
			return node;
		}
		node.right = head;
		node.left = null;
		head.left = node;
		return node;
	}

	// Time Complexity: O(n)
	// Space Complexity: O(hieght of tree = O(logn))
	to_list(root = this.root, head = null) {
		// Build list in reverse order
		if (root == null) return head;

		let left = root.left;
		let right = root.right;
		head = this.to_list(right, head);
		head = this._push_front(head, root);
		return this.to_list(left, head);
	}

	// Time Complexity: O(n^2)
	// Space Complexity: O(hieght of tree = O(logn))
	to_list_2(root = this.root) {
		if (root == null) return null;

		let left_head = this.to_list_2(root.left);
		let right_head = this.to_list_2(root.right);

		let left_tail = this._get_tail(left_head);

		root.left = left_tail;
		root.right = right_head;

		if (left_tail) left_tail.right = root;
		if (right_head) right_head.left = root;

		return left_head || root;
	}

	// Returns head and tail of list
	// Time Complexity: O(n)
	// Space Complexity: O(hieght of tree = O(logn))
	to_list_3(root = this.root) {
		if (root == null) return { head: null, tail: null };

		let { head: left_head, tail: left_tail } = this.to_list_3(root.left);
		let { head: right_head, tail: right_tail } = this.to_list_3(root.right);

		root.left = left_tail;
		root.right = right_head;

		if (left_tail) left_tail.right = root;
		if (right_head) right_head.left = root;

		return { head: left_head || root, tail: right_tail || root };
	}
}

function printList(head) {
	const result = [];
	for (let curr = head; curr != null; curr = curr.right) {
		result.push(curr.value);
	}
	console.log(result.join(' ⇄ '));
}

const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4, 12, 16, 20, 2, 9, 11, 14, 17, 19, 21]);
tree.print();

console.log('Doubly Linked List: ');
// const head = tree.to_list();
// const head = tree.to_list_2();
const { head } = tree.to_list_3();
printList(head);
