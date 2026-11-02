'use strict';

const { BinarySearchTree } = require('./binary_search_tree');

const values = [10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4, 14];
const tree = new BinarySearchTree();

for (const value of values) {
	tree.insert(value);
}

console.log('Tree:');
tree.print();

tree.delete(10);
tree.delete(18);

console.log('Tree:');
tree.print();
