'use strict';

const { BinaryTree, Node } = require('./binary_tree');

// ************************************************************************************************

// Time Complexity: O(n)
// Auxiliary Space: O(n)
function buildFromPreorderInorder(preorder, inorder) {
	const inorderIndex = new Map(inorder.map((v, i) => [v, i]));
	let preIndex = 0;

	function build(left, right) {
		if (left > right) return null;

		const value = preorder[preIndex++];
		const root = new Node(value);

		const mid = inorderIndex.get(value);
		if (mid === undefined || mid < left || mid > right) throw new Error('Invalid traversals');

		root.left = build(left, mid - 1);
		root.right = build(mid + 1, right);

		return root;
	}

	return build(0, inorder.length - 1);
}

// Time Complexity: O(n)
// Auxiliary Space: O(n)
function buildFromPostorderInorder(postorder, inorder) {
	const inorderIndex = new Map(inorder.map((v, i) => [v, i]));

	let postIndex = postorder.length - 1;

	function build(left, right) {
		if (left > right) return null;

		const value = postorder[postIndex--];
		const root = new Node(value);

		const mid = inorderIndex.get(value);
		if (mid === undefined || mid < left || mid > right) throw new Error('Invalid traversals');

		root.right = build(mid + 1, right);
		root.left = build(left, mid - 1);

		return root;
	}

	return build(0, inorder.length - 1);
}

// Unique Values only
const preorder = [10, 20, 40, 50, 30, 70, 80, 90];
const inorder = [40, 20, 50, 10, 30, 80, 70, 90];
const postorder = [40, 50, 20, 80, 90, 70, 30, 10];

const tree = new BinaryTree();
// tree.root = buildFromPreorderInorder(preorder, inorder);
tree.root = buildFromPostorderInorder(postorder, inorder);

tree.print();
console.log('Preorder:', [...tree.preorder()].join(', '));
console.log('Inorder:', [...tree.inorder()].join(', '));
console.log('Postorder:', [...tree.postorder()].join(', '));
