'use strict';

const Queue = require('../Containers/queue');
const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
	// Time Complexity: O(n)
	// Space Complexity: O(width of tree = O(n))
	print_level_order() {
		console.log([...this.levelorder()].join(', '));
	}

	// Time Complexity: O(n)
	// Space Complexity: O(width of tree = O(n))
	level_order_traversal_line_by_line() {
		let line = [];
		let queue = new Queue();
		if (this.root != null) queue.push(this.root);
		queue.push(null);

		while (queue.size() > 1) {
			let current = queue.pop();
			if (current == null) {
				console.log(line.join(', '));
				line = [];
				queue.push(null);
				continue;
			}
			line.push(current.value);
			if (current.left != null) queue.push(current.left);
			if (current.right != null) queue.push(current.right);
		}
	}

	// Time Complexity: O(n)
	// Space Complexity: O(width of tree = O(n))
	level_order_traversal_line_by_line_2() {
		let queue = new Queue();
		if (this.root != null) queue.push(this.root);
		while (!queue.empty()) {
			let size = queue.size();
			let line = [];
			for (let i = 0; i < size; i++) {
				let current = queue.pop();
				line.push(current.value);
				if (current.left != null) queue.push(current.left);
				if (current.right != null) queue.push(current.right);
			}
			console.log(line.join(', '));
		}
	}
}

const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);
tree.print();

console.log('Level order: ');
tree.print_level_order();

console.log('Level order traversal line by line: ');
// tree.level_order_traversal_line_by_line(tree.root);
tree.level_order_traversal_line_by_line_2(tree.root);
