'use strict';

const Queue = require('../Containers/queue');

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	root = null;

	constructor(iterable = []) {
		for (const value of iterable) {
			this.insert(value);
		}
	}

	// --------------------- traversal iterators ---------------------

	*[Symbol.iterator]() {
		yield* this.inorder();
	}

	*inorder(node = this.root) {
		if (node === null) return;

		yield* this.inorder(node.left);
		yield node.value;
		yield* this.inorder(node.right);
	}

	*preorder(node = this.root) {
		if (node === null) return;

		yield node.value;
		yield* this.preorder(node.left);
		yield* this.preorder(node.right);
	}

	*postorder(node = this.root) {
		if (node === null) return;

		yield* this.postorder(node.left);
		yield* this.postorder(node.right);
		yield node.value;
	}

	*levelorder() {
		if (this.root === null) return;

		const queue = new Queue();
		queue.push(this.root);

		while (!queue.empty()) {
			const node = queue.pop();
			yield node.value;

			if (node.left !== null) queue.push(node.left);
			if (node.right !== null) queue.push(node.right);
		}
	}

	// --------------------- methods ---------------------

	insert(value) {
		const newNode = new Node(value);

		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		let current = this.root;

		while (true) {
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}

				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}

				current = current.right;
			}
		}
	}

	contains(value) {
		let current = this.root;

		while (current !== null) {
			if (value === current.value) return true;
			current = value < current.value ? current.left : current.right;
		}

		return false;
	}

	size(node = this.root) {
		if (node === null) return 0;

		return 1 + this.size(node.left) + this.size(node.right);
	}

	height(node = this.root) {
		if (node === null) return 0;

		return 1 + Math.max(this.height(node.left), this.height(node.right));
	}

	clear() {
		this.root = null;
	}

	print(node = this.root, prefix = '', isLeft = true) {
		if (node === null) return;

		if (node.right !== null) {
			this.print(node.right, prefix + (isLeft ? '│   ' : '    '), false);
		}

		console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.value);

		if (node.left !== null) {
			this.print(node.left, prefix + (isLeft ? '    ' : '│   '), true);
		}
	}
}

module.exports = { BinaryTree, Node };
