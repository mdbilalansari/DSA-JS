'use strict';

const Queue = require('../Containers/queue');
const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	height(node = this.root) {
		if (node == null) return 0;

		return 1 + Math.max(this.height(node.left), this.height(node.right));
	}

	// Time Complexity: O(n)
	// Space Complexity: O(width of tree = O(n))
	height_iterative() {
		if (this.root === null) return 0;

		let height = 0;
		let queue = new Queue();
		queue.push(this.root);

		while (!queue.empty()) {
			height++;
			let size = queue.size();
			for (let i = 0; i < size; i++) {
				let current = queue.pop();
				if (current.left != null) queue.push(current.left);
				if (current.right != null) queue.push(current.right);
			}
		}
		return height;
	}
}

const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

tree.print();
console.log('Height of tree:', tree.height());
console.log('Height of tree using iteration:', tree.height_iterative());
