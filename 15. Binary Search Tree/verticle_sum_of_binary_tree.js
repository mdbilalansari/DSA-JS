'use strict';

const { BinarySearchTree } = require('./binary_search_tree');

function verticalSum(root, sumMap = new Map(), horizontalDistance = 0) {
	if (root === null) return sumMap;

	verticalSum(root.left, sumMap, horizontalDistance - 1);
	sumMap.set(horizontalDistance, (sumMap.get(horizontalDistance) || 0) + root.value);
	verticalSum(root.right, sumMap, horizontalDistance + 1);
	return sumMap;
}

function printVerticalSum(root) {
	const sums = verticalSum(root);
	const result = [...sums.keys()].sort((a, b) => a - b).map((distance) => sums.get(distance));
	console.log(result.join(' '));
	return result;
}

const values = [10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4];
const tree = new BinarySearchTree();
values.forEach((value) => tree.insert(value));

console.log('Tree:');
tree.print();

printVerticalSum(tree.root);

