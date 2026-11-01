'use strict';

const Deque = require('../Containers/deque');
const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	// Efficient Approach
	_lowest_common_ancestor(root, p, q) {
		if (root == null) return null;
		if (root == p || root == q) return root;

		let left = this._lowest_common_ancestor(root.left, p, q);
		let right = this._lowest_common_ancestor(root.right, p, q);

		if (left != null && right != null) return root;

		return left || right;
	}

	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	contains(root, target) {
		if (root == null) return false;
		if (root == target) return true;

		return this.contains(root.left, target) || this.contains(root.right, target);
	}

	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	find_path(root, p, path) {
		if (root == null) return false;

		if (root == p) {
			path.pushFront(root);
			return true;
		}

		let left = this.find_path(root.left, p, path);
		if (left) {
			path.pushFront(root);
			return true;
		}

		let right = this.find_path(root.right, p, path);
		if (right) {
			path.pushFront(root);
			return true;
		}

		return false;
	}

	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	lowest_common_ancestor(p, q) {
		if (!this.contains(this.root, p) || !this.contains(this.root, q)) return null;

		return this._lowest_common_ancestor(this.root, p, q);
	}

	// Time Complexity: O(n)
	// Space Complexity: O(n)
	lowest_common_ancestor_2(p, q) {
		const path_p = new Deque();
		const path_q = new Deque();

		const has_p = this.find_path(this.root, p, path_p);
		const has_q = this.find_path(this.root, q, path_q);

		if (!has_p || !has_q) return null;

		let LCA = null;
		while (path_p.front() == path_q.front()) {
			LCA = path_p.front();
			path_p.popFront();
			path_q.popFront();
		}

		return LCA;
	}
}

const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);
tree.print();

const p = tree.root.left.left.right; // 4
const q = tree.root.left.right.right; // 8

// const LCA = tree.lowest_common_ancestor(p, q);
const LCA = tree.lowest_common_ancestor_2(p, q);
console.log('Lowest Common Ancestor:', LCA.value);
