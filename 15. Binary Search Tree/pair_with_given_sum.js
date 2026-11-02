'use strict';

const { BinarySearchTree } = require('./binary_search_tree');

// Time Complexity: O(n); Space Complexity: O(n)
function isSumPairPresent(tree, sum) {
	const set = new Set();
	for (const value of tree) {
		if (set.has(sum - value)) return true;
		set.add(value);
	}
}

const sum = 28;
const tree = new BinarySearchTree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

console.log('Tree:');
tree.print();

console.log(isSumPairPresent(tree, sum) ? 'Pair found' : 'Pair not found');
