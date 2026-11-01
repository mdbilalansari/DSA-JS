'use strict';

const Queue = require('../Containers/queue');
const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	size(node = this.root) {
		if (node === null) return 0;

		return 1 + this.size(node.left) + this.size(node.right);
	}

	// Time Complexity: O(n)
	// Space Complexity: O(width of tree = O(n))
	size_iterative() {
		if (this.root === null) return 0;

		let count = 0;
		let queue = new Queue();
		queue.push(this.root);

		while (!queue.empty()) {
			count++;
			let current = queue.pop();
			if (current.left != null) queue.push(current.left);
			if (current.right != null) queue.push(current.right);
		}
		return count;
	}
}

const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

tree.print();
console.log('Size of tree:', tree.size());
console.log('Size of tree using iteration:', tree.size_iterative());
