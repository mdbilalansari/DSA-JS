'use strict';

const { BinarySearchTree } = require('./binary_search_tree');

function printCeiling(values) {
	const ceilings = [];
  const tree = new BinarySearchTree();

	values.forEach((value) => {
    ceilings.push(tree.ceil(value));
    tree.insert(value);
  });

	console.log(ceilings.join(' '));
	return ceilings;
}

const array = [2, 8, 30, 15, 25, 12];
console.log('Ceiling of each element on left side of it in array:');
printCeiling(array);
