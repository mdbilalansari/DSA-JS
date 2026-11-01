'use strict';

const Queue = require('../Containers/queue');
const Stack = require('../Containers/stack');
const Deque = require('../Containers/deque');
const { BinaryTree } = require('./binary_tree');

class Tree extends BinaryTree {
	// Time Complexity: O(n)
	// Space Complexity: O(width of tree = O(n))
	// Efficient
	spiral_level_order_traversal() {
		let deque = new Deque();
		if (this.root != null) deque.pushBack(this.root);

		let left_to_right = true;
		while (!deque.empty()) {
			let size = deque.size();
			let result = [];
			for (let i = 0; i < size; i++) {
				if (left_to_right) {
					let current = deque.popFront();
					result.push(current.value);
					if (current.left != null) deque.pushBack(current.left);
					if (current.right != null) deque.pushBack(current.right);
				} else {
					let current = deque.popBack();
					result.push(current.value);
					if (current.right != null) deque.pushFront(current.right);
					if (current.left != null) deque.pushFront(current.left);
				}
			}
			left_to_right = !left_to_right;
			console.log(result.join(' '));
		}
	}

	// Time Complexity: O(n)
	// Space Complexity: O(width of tree = O(n))
	spiral_level_order_traversal_2() {
		let stack = new Stack();
		let queue = new Queue();
		if (this.root != null) queue.push(this.root);
		let reverse = false;
		while (!queue.empty()) {
			let size = queue.size();
			let result = [];
			for (let i = 0; i < size; i++) {
				let current = queue.pop();
				if (reverse) {
					stack.push(current);
				} else {
					result.push(current.value);
				}
				if (current.left != null) queue.push(current.left);
				if (current.right != null) queue.push(current.right);
			}
			if (reverse) {
				while (!stack.empty()) {
					result.push(stack.pop().value);
				}
			}
			reverse = !reverse;
			console.log(result.join(' '));
		}
	}

	// Time Complexity: O(n)
	// Space Complexity: O(width of tree = O(n))
	// Efficient
	spiral_level_order_traversal_3() {
		let stack_1 = new Stack();
		let stack_2 = new Stack();
		if (this.root != null) stack_1.push(this.root);

		while (!stack_1.empty() || !stack_2.empty()) {
			let result = [];
			while (!stack_1.empty()) {
				let current = stack_1.pop();
				result.push(current.value);
				if (current.left != null) stack_2.push(current.left);
				if (current.right != null) stack_2.push(current.right);
			}
			console.log(result.join(' '));
			result = [];
			while (!stack_2.empty()) {
				let current = stack_2.pop();
				result.push(current.value);
				if (current.right != null) stack_1.push(current.right);
				if (current.left != null) stack_1.push(current.left);
			}
			console.log(result.join(' '));
		}
	}
}

const tree = new Tree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

tree.print();
console.log('Spiral level order traversal 1: ');
tree.spiral_level_order_traversal();

console.log('Spiral level order traversal 2: ');
tree.spiral_level_order_traversal_2();

console.log('Spiral level order traversal 3: ');
tree.spiral_level_order_traversal_3();
