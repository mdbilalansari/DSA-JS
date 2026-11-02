'use strict';

const Queue = require('../Containers/queue');

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	root = null;

	constructor(iterable = []) {
		for (const value of iterable) {
			this.insert(value);
		}
	}

	getRoot() {
		return this.root;
	}

	_insert(node, value) {
		if (node === null) return new Node(value);

		if (value < node.value) {
			node.left = this._insert(node.left, value);
		} else if (value > node.value) {
			node.right = this._insert(node.right, value);
		}

		return node;
	}

	insert(value) {
		this.root = this._insert(this.root, value);
		return this;
	}

	insertIterative(value) {
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
			} else if (value > current.value) {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			} else {
				return this;
			}
		}
	}

	_search(node, value) {
		if (node === null) return false;
		if (value === node.value) return true;

		return value < node.value ? this._search(node.left, value) : this._search(node.right, value);
	}

	search(value) {
		return this._search(this.root, value);
	}

	searchIterative(value) {
		let current = this.root;
		while (current !== null) {
			if (value === current.value) return true;

			current = value < current.value ? current.left : current.right;
		}
		return false;
	}

	_delete(node, value) {
		if (node === null) return null;

		if (value < node.value) {
			node.left = this._delete(node.left, value);
		} else if (value > node.value) {
			node.right = this._delete(node.right, value);
		} else {
			if (node.left === null) return node.right;
			if (node.right === null) return node.left;

			let successor = node.right;
			while (successor.left !== null) {
				successor = successor.left;
			}
			node.value = successor.value;
			node.right = this._delete(node.right, successor.value);
		}

		return node;
	}

	delete(value) {
		this.root = this._delete(this.root, value);
	}

	deleteIterative(value) {
		let current = this.root;
		let parent = null;

		while (current !== null && current.value !== value) {
			parent = current;
			current = value < current.value ? current.left : current.right;
		}

		if (current === null) return;

		if (current.left === null || current.right === null) {
			const child = current.left || current.right;
			if (parent === null) {
				this.root = child;
			} else if (parent.left === current) {
				parent.left = child;
			} else {
				parent.right = child;
			}
			return;
		}

		let successor = current.right;
		let successorParent = current;
		while (successor.left !== null) {
			successorParent = successor;
			successor = successor.left;
		}

		current.value = successor.value;
		if (successorParent.left === successor) {
			successorParent.left = successor.right;
		} else {
			successorParent.right = successor.right;
		}
	}

	min() {
		if (this.root === null) return undefined;

		let current = this.root;
		while (current.left !== null) {
			current = current.left;
		}

		return current.value;
	}

	max() {
		if (this.root === null) return undefined;

		let current = this.root;
		while (current.right !== null) {
			current = current.right;
		}

		return current.value;
	}

	_ceil(node, value) {
		if (node === null) return Infinity;
		if (node.value === value) return node.value;
		if (node.value < value) return this._ceil(node.right, value);

		return Math.min(this._ceil(node.left, value), node.value);
	}

	// Time complexity: O(height); space complexity: O(height)
	ceil(value) {
		return this._ceil(this.root, value);
	}

	_floor(node, value) {
		if (node === null) return -Infinity;
		if (node.value === value) return node.value;
		if (node.value > value) return this._floor(node.left, value);

		return Math.max(this._floor(node.right, value), node.value);
	}

	floor(value) {
		return this._floor(this.root, value);
	}

	_size(node = this.root) {
		if (node === null) return 0;

		return 1 + this._size(node.left) + this._size(node.right);
	}

	size() {
		return this._size();
	}

	clear() {
		this.root = null;
	}

	empty() {
		return this.root === null;
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

module.exports = { BinarySearchTree, Node };
