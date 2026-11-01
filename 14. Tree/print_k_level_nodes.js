'use strict';

const Queue = require('../Containers/queue');
const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	kth_level_nodes(k, node = this.root) {
		if (node == null || k < 0) return [];
		if (k == 0) {
			return [node.value];
		} else {
			return [...this.kth_level_nodes(k - 1, node.left), ...this.kth_level_nodes(k - 1, node.right)];
		}
	}

	// Time Complexity: O(n)
	// Space Complexity: O(width of tree = O(n))
	kth_level_nodes_iterative(k) {
		if (this.root === null || k < 0) return [];

		let queue = new Queue();
		queue.push(this.root);

		let curLevel = 0;
		while (!queue.empty()) {
			if (curLevel == k) return [...queue].map((n) => n.value);
			curLevel++;

			let size = queue.size();
			for (let i = 0; i < size; i++) {
				let current = queue.pop();
				if (current.left != null) queue.push(current.left);
				if (current.right != null) queue.push(current.right);
			}
		}
		return [];
	}
}

const k = 2;
const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

tree.print();
console.log(`Level ${k} nodes:`, tree.kth_level_nodes(k));
console.log(`Level ${k} nodes:`, tree.kth_level_nodes_iterative(k));
