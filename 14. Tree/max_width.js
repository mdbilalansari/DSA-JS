'use strict';

const Queue = require('../Containers/queue');
const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
	// Time Complexity: O(n)
	// Space Complexity: O(width of tree = O(n))
	max_width() {
		let queue = new Queue();
		if (this.root) queue.push(this.root);

		let max_width = 0;
		while (!queue.empty()) {
			let size = queue.size();
			max_width = Math.max(max_width, size);
			for (let i = 0; i < size; i++) {
				let current = queue.pop();
				if (current.left != null) queue.push(current.left);
				if (current.right != null) queue.push(current.right);
			}
		}

		return max_width;
	}
}

const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4, 19]);

tree.print();
console.log('Max width:', tree.max_width());
