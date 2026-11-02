'use strict';

const { BinarySearchTree } = require('./binary_search_tree');

// Time Complexity: O(n)
function maxValue(root) {
	if (root === null) return -Infinity;
	return Math.max(root.value, maxValue(root.left), maxValue(root.right));
}

// Time Complexity: O(n)
function minValue(root) {
	if (root === null) return Infinity;
	return Math.min(root.value, minValue(root.left), minValue(root.right));
}

// Time Complexity: O(n^2)
function is_BST(root) {
	if (root === null) return true;
	if (maxValue(root.left) >= root.value || minValue(root.right) <= root.value) return false;
	return is_BST(root.left) && is_BST(root.right);
}

// Time Complexity: O(n)
function is_BST_2(root, minRange = -Infinity, maxRange = Infinity) {
	if (root === null) return true;
	if (root.value <= minRange || root.value >= maxRange) return false;
	return is_BST_2(root.left, minRange, root.value) && is_BST_2(root.right, root.value, maxRange);
}

// Time Complexity: O(n)
// Inorder traversal should be strictly increasing
function is_BST_3(root) {
	let previous = -Infinity;
	function check(node) {
		if (node === null) return true;
		if (!check(node.left)) return false;
		if (node.value <= previous) return false;
		previous = node.value;
		return check(node.right);
	}
	return check(root);
}

const tree = new BinarySearchTree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

// Make Non Binary Search Tree
const node = tree.getRoot().right.left;
node.value = 9;

console.log('Tree:');
tree.print();

console.log('In-Order Traversal:', [...tree.inorder()].join(', '));

console.log('Tree is a Binary Search Tree:', is_BST_3(tree.getRoot()));
