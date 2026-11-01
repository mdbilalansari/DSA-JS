'use strict';

const Queue = require('../Containers/queue');
const { BinaryTree, Node } = require('./binary_tree');

class Tree extends BinaryTree {
	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	has_children_sum_property(node = this.root) {
		if (node == null || (!node.left && !node.right)) return true;

		const sum = (node.left?.value || 0) + (node.right?.value || 0);
		return node.value == sum && this.has_children_sum_property(node.left) && this.has_children_sum_property(node.right);
	}

	// Time Complexity: O(n)
	// Space Complexity: O(width of tree = O(n))
	has_children_sum_property_iterative() {
		let queue = new Queue();
		if (this.root != null) queue.push(this.root);

		while (!queue.empty()) {
			let current = queue.pop();

			// If the node is a leaf node
			if (current.left == null && current.right == null) continue;

			let sum = 0;
			if (current.left) {
				sum += current.left.value;
				queue.push(current.left);
			}
			if (current.right) {
				sum += current.right.value;
				queue.push(current.right);
			}

			// If the node's value is not equal to the sum of its children
			if (current.value != sum) return false;
		}

		return true;
	}
}

const tree = new Tree();

tree.root = new Node(10);
tree.root.left = new Node(8);
tree.root.right = new Node(2);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(2);

tree.print();

// Test the function
console.log('Recursive: Has children sum property:', tree.has_children_sum_property());
console.log('Iterative: Has children sum property:', tree.has_children_sum_property_iterative());
