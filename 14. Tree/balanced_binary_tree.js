'use strict';

const Queue = require('../Containers/queue');
const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	_isBalanced(node) {
		if (node == null) return 0;

		let left_height = this._isBalanced(node.left);
		if (left_height == -1) return -1;

		let right_height = this._isBalanced(node.right);
		if (right_height == -1) return -1;

		if (Math.abs(left_height - right_height) > 1) return -1;

		return Math.max(left_height, right_height) + 1;
	}

	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	_isBalanced_2(node) {
		if (node == null) return { balanced: true, height: 0 };

		let left = this._isBalanced_2(node.left);
		if (!left.balanced) return { balanced: false, height: 0 };

		let right = this._isBalanced_2(node.right);
		if (!right.balanced) return { balanced: false, height: 0 };

		if (Math.abs(left.height - right.height) > 1) return { balanced: false, height: 0 };

		return { balanced: true, height: Math.max(left.height, right.height) + 1 };
	}

	isBalanced() {
		const height = this._isBalanced(this.root);
		return height != -1;
	}

	isBalanced_2() {
		return this._isBalanced_2(this.root).balanced;
	}
}

const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

tree.print();
console.log('Tree is balanced:', tree.isBalanced());
console.log('Tree is balanced:', tree.isBalanced_2());
