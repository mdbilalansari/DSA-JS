'use strict';

const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
	// Time Complexity: O(n)
	// Space Complexity: O(height of tree = O(logn))
	diameter() {
		let max_diameter = 0;

		function getHeight(root) {
			if (root == null) return 0;

			let left_hight = getHeight(root.left);
			let right_hight = getHeight(root.right);
			let current_diameter = left_hight + right_hight + 1;
			max_diameter = Math.max(max_diameter, current_diameter);

			return Math.max(left_hight, right_hight) + 1;
		}

		getHeight(this.root);
		return max_diameter;
	}
}

const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

tree.print();
console.log('Diameter:', tree.diameter());
