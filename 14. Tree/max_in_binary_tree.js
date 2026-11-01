'use strict';

const Queue = require('../Containers/queue');
const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	maximum(node = this.root) {
		if (node == null) return -Infinity;

		return Math.max(node.value, this.maximum(node.left), this.maximum(node.right));
	}

	// Time Complexity: O(n)
	// Space Complexity: O(width of tree = O(n))
	maximum_iterative() {
		if (this.root === null) return -Infinity;

		let max = this.root.value;
		let queue = new Queue();
		queue.push(this.root);

		while (!queue.empty()) {
			let current = queue.pop();
			max = Math.max(max, current.value);

			if (current.left != null) queue.push(current.left);
			if (current.right != null) queue.push(current.right);
		}
		return max;
	}
}

const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

tree.print();
console.log('Max value in tree:', tree.maximum());
console.log('Max value in tree using iteration:', tree.maximum_iterative());
