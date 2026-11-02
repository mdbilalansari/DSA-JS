'use strict';

const { BinarySearchTree } = require('./binary_search_tree');

class BST extends BinarySearchTree {
	_ceil(node, value) {
		if (node === null) return Infinity;
		if (node.value === value) return node.value;
		if (node.value < value) return this._ceil(node.right, value);

		return Math.min(this._ceil(node.left, value), node.value);
	}

	// Time complexity: O(height); space complexity: O(height)
	ceil(value) {
		return this._ceil(this.root, value);
	}

	// Time complexity: O(height); space complexity: O(1)
	ceilIterative(value) {
		let current = this.root;
		let ceil = Infinity;

		while (current !== null) {
			if (current.value === value) {
				return current.value;
			} else if (current.value < value) {
				current = current.right;
			} else {
				ceil = current.value;
				current = current.left;
			}
		}
		return ceil;
	}
}

const tree = new BST([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4, 14]);

console.log('Tree:');
tree.print();

for (const value of [7, 15, 0, 11, 19, 20, 21, 2, 9]) {
	console.log(`Floor of ${value}: ${tree.ceil(value)}`);
}
