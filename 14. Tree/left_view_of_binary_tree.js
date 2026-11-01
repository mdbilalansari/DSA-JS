'use strict';

const Queue = require('../Containers/queue');
const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	left_view() {
		let level_to_print = 0;
		const result = [];

		function getView(node, current_level) {
			if (node == null) return result;
			if (current_level == level_to_print) {
				level_to_print++;
				result.push(node.value);
			}
			getView(node.left, current_level + 1);
			getView(node.right, current_level + 1);
		}

		getView(this.root, 0);
		return result;
	}

	// Time Complexity: O(n)
	// Space Complexity: O(width of tree = O(n))
	left_view_iterative() {
		if (this.root === null) return [];

		const result = [];
		let queue = new Queue();
		queue.push(this.root);

		while (!queue.empty()) {
			result.push(queue.front().value);

			let size = queue.size();
			for (let i = 0; i < size; i++) {
				let current = queue.pop();
				if (current.left != null) queue.push(current.left);
				if (current.right != null) queue.push(current.right);
			}
		}

		return result;
	}
}

const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8]);

tree.print();
console.log('Left view of binary tree (recursive):', tree.left_view());
console.log('Left view of binary tree (iterative):', tree.left_view_iterative());
