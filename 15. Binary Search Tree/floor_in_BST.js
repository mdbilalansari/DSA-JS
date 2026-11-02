'use strict';

const { BinarySearchTree } = require('./binary_search_tree');

class BST extends BinarySearchTree {
	_floor(node, value) {
		if (node === null) return -Infinity;
		if (node.value === value) return node.value;
		if (node.value > value) return this._floor(node.left, value);

		return Math.max(this._floor(node.right, value), node.value);
	}

	floor(value) {
		return this._floor(this.root, value);
	}

	floorIterative(value) {
		let current = this.root;
		let floor = -Infinity;

		while (current !== null) {
			if (current.value === value) {
				return current.value;
			} else if (current.value > value) {
				current = current.left;
			} else {
				floor = current.value;
				current = current.right;
			}
		}
		return floor;
	}
}

const tree = new BST([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4, 14]);

console.log('Tree:');
tree.print();

[7, 15, 0, 11, 19, 20, 21, 2, 9].forEach((value) => {
	console.log(`Floor of ${value}: ${tree.floorIterative(value)}`);
});
