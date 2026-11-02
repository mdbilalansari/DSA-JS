'use strict';

const { BinarySearchTree } = require('./binary_search_tree');
const Queue = require('../Containers/queue');

class BST extends BinarySearchTree {
	verticleTraversal() {
		if (this.root === null) return [];

		const columns = new Map();
		const queue = new Queue();
		queue.push([this.root, 0]);

		while (!queue.empty()) {
			const [node, horizontalDistance] = queue.pop();

			if (!columns.has(horizontalDistance)) columns.set(horizontalDistance, []);
			columns.get(horizontalDistance).push(node.value);

			if (node.left !== null) queue.push([node.left, horizontalDistance - 1]);
			if (node.right !== null) queue.push([node.right, horizontalDistance + 1]);
		}

		const traversal = [];
		[...columns.keys()]
			.sort((a, b) => a - b)
			.forEach((distance) => {
				const values = columns.get(distance);
				console.log(values.join(' '));
				traversal.push(values);
			});

		return traversal;
	}
}

const tree = new BST([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

console.log('Tree:');
tree.print();

console.log('Verticle Traversal:');
tree.verticleTraversal();
