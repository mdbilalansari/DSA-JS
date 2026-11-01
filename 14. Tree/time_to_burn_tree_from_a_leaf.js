'use strict';

const Deque = require('../Containers/deque');
const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
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
	height(root) {
		if (root == null) return 0;

		return Math.max(this.height(root.left), this.height(root.right)) + 1;
	}

	// Return <height, distance_from_root_to_leaf>
	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	_time_to_burn_2(root, leaf, /*&max_distance*/ max_distance) {
		if (root == null) {
			return [0, -1]; // {height, not a descendant of leaf}
		}

		if (root == leaf) {
			return [1, 0];
		}

		let left = _time_to_burn_2(root.left, leaf, max_distance);
		let right = _time_to_burn_2(root.right, leaf, max_distance);
		let left_height = left.first,
			right_height = right.first;
		let left_distance = left.second,
			right_distance = right.second;

		if (left_distance != -1) {
			// root is a descendant of leaf
			let current_distance = left_distance + 1;
			max_distance = max(max_distance, current_distance + right_height);
			return [Math.max(left_height, right_height) + 1, left_distance + 1];
		} else if (right_distance != -1) {
			// root is a descendant of leaf
			let current_distance = right_distance + 1;
			max_distance = max(max_distance, current_distance + left_height);
			return [max(left_height, right_height) + 1, right_distance + 1];
		} else {
			// root is not a descendant of leaf
			return [max(left.first, right.first) + 1, -1];
		}
	}

	// Time Complexity: O(n^2)
	// Space Complexity: O(height of tree = O(logn))
	time_to_burn(leaf) {
		let leaf_path = new Deque();
		this.find_path(this.root, leaf, leaf_path);

		let max_ditance = 0;
		while (!leaf_path.empty()) {
			let current = leaf_path.popFront();
			let opposite = current.left == leaf_path.empty() ? current.left : current.right;

			let distance = this.height(opposite) + leaf_path.size();
			max_ditance = Math.max(max_ditance, distance);
		}
		return max_ditance;
	}

	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	time_to_burn_2(leaf) {
		let max_distance = 0;

		function timeToBurn(root, leaf) {
			if (root == null) return [0, -1]; // [height, distanceFromLeaf]
			if (root == leaf) return [1, 0];

			const [left_height, left_distance] = timeToBurn(root.left, leaf);
			const [right_height, right_distance] = timeToBurn(root.right, leaf);

			if (left_distance != -1) {
				// leaf is in left subtree of root
				let current_distance = left_distance + 1;
				max_distance = Math.max(max_distance, current_distance + right_height);
				return [Math.max(left_height, right_height) + 1, left_distance + 1];
			} else if (right_distance != -1) {
				// leaf is in right subtree of root
				let current_distance = right_distance + 1;
				max_distance = Math.max(max_distance, current_distance + left_height);
				return [Math.max(left_height, right_height) + 1, right_distance + 1];
			} else {
				// leaf not found in either subtree
				return [Math.max(left_height, right_height) + 1, -1];
			}
		}

		timeToBurn(this.root, leaf);
		return max_distance;
	}
}

const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

tree.print();
const leaf = tree.root.left.right.left; // 6
console.log(`Time to burn the tree from Node(${leaf.value}):`, tree.time_to_burn(leaf));
console.log(`Time to burn the tree from Node(${leaf.value}):`, tree.time_to_burn_2(leaf));
