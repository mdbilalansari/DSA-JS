'use strict';

const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
	// Time Complexity: O(logn * logn)
	// Space Complexity: O(logn)
	countNodes(root = this.root) {
		let left_height = 0;
		for (let current = root; current != null; current = current.left) {
			left_height++;
		}

		let right_height = 0;
		for (let current = root; current != null; current = current.right) {
			right_height++;
		}

		if (left_height == right_height) {
			return Math.pow(2, left_height) - 1;
		} else {
			return 1 + this.countNodes(root.left) + this.countNodes(root.right);
		}
	}
}

// Tree must be complete i.e. all levels must be full except last
// and last level must be filled from left to right
const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

tree.print();
console.log('Number of nodes in complete tree:', tree.countNodes());
