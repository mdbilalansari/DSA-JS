'use strict';

const { BinarySearchTree } = require('./binary_search_tree');
const Queue = require('../Containers/queue');

class BST extends BinarySearchTree {
	topView() {
		if (this.root === null) return;

		const horizontalValues = new Map();
		const queue = new Queue();
		queue.push({ node: this.root, distance: 0 });

		while (!queue.empty()) {
			const { node, distance } = queue.pop();
			if (!horizontalValues.has(distance)) {
				horizontalValues.set(distance, node.value);
			}

			if (node.left !== null) queue.push({ node: node.left, distance: distance - 1 });
			if (node.right !== null) queue.push({ node: node.right, distance: distance + 1 });
		}

		const values = [...horizontalValues.keys()].sort((a, b) => a - b).map((distance) => horizontalValues.get(distance));
		console.log(`${values.join(' ')} `);
	}
}

const tree = new BST([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

console.log('Tree:');
tree.print();

console.log('Top View of tree:');
tree.topView();
