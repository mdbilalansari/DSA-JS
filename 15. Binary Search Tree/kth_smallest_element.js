'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.left_size = 0;
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

	// Returns [newRoot, inserted].
	_insert(root, value) {
		if (root === null) return [new Node(value), true];
		if (value < root.value) {
			const [newLeft, inserted] = this._insert(root.left, value);
			root.left = newLeft;
			if (inserted) root.left_size++;
			return [root, inserted];
		}
		if (value > root.value) {
			const [newRight, inserted] = this._insert(root.right, value);
			root.right = newRight;
			return [root, inserted];
		}
		return [root, false];
	}

	_search(root, value) {
		if (root === null) return false;
		if (value === root.value) return true;
		return value < root.value ? this._search(root.left, value) : this._search(root.right, value);
	}

	// Returns [newRoot, deleted].
	_delete(root, value) {
		if (root === null) return [null, false];
		if (value < root.value) {
			const [newLeft, deleted] = this._delete(root.left, value);
			root.left = newLeft;
			if (deleted) root.left_size--;
			return [root, deleted];
		}
		if (value > root.value) {
			const [newRight, deleted] = this._delete(root.right, value);
			root.right = newRight;
			return [root, deleted];
		}
		if (root.left === null) return [root.right, true];
		if (root.right === null) return [root.left, true];

		let successor = root.right;
		while (successor.left !== null) successor = successor.left;
		root.value = successor.value;
		const [newRight, deleted] = this._delete(root.right, successor.value);
		root.right = newRight;
		return [root, deleted];
	}

	_kthSmallest(root, k) {
		if (root === null) return null;
		if (root.left_size + 1 === k) return root;
		if (k <= root.left_size) return this._kthSmallest(root.left, k);
		return this._kthSmallest(root.right, k - root.left_size - 1);
	}

	insert(value) {
		[this.root] = this._insert(this.root, value);
	}

	insertIterative(value) {
		if (this.root === null) {
			this.root = new Node(value);
			return;
		}
		let current = this.root;
		let parent = null;
		const path = [];
		while (current !== null) {
			parent = current;
			path.push(current);
			if (value < current.value) current = current.left;
			else if (value > current.value) current = current.right;
			else return;
		}
		if (value < parent.value) parent.left = new Node(value);
		else parent.right = new Node(value);
		while (path.length > 0) {
			const node = path.pop();
			if (value < node.value) node.left_size++;
		}
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

	deleteItem(value) {
		const [newRoot, deleted] = this._delete(this.root, value);
		if (deleted) this.root = newRoot;
	}

	deleteItemIterative(value) {
		let current = this.root;
		let parent = null;
		const path = [];
		while (current !== null && current.value !== value) {
			parent = current;
			path.push(current);
			current = value < current.value ? current.left : current.right;
		}
		if (current === null) return;

		if (current.left === null || current.right === null) {
			const child = current.left !== null ? current.left : current.right;
			if (parent === null) this.root = child;
			else if (parent.left === current) parent.left = child;
			else parent.right = child;
		} else {
			let successorParent = current;
			let successor = current.right;
			while (successor.left !== null) {
				successorParent = successor;
				successor = successor.left;
			}
			current.value = successor.value;
			if (successorParent.left === successor) successorParent.left = successor.right;
			else successorParent.right = successor.right;
		}

		while (path.length > 0) {
			const node = path.pop();
			if (value < node.value) node.left_size--;
		}
	}

	kthSmallest(k) {
		return this._kthSmallest(this.root, k);
	}

	kthSmallestIterative(k) {
		let current = this.root;
		while (current !== null) {
			if (k === current.left_size + 1) return current;
			if (k < current.left_size + 1) current = current.left;
			else {
				k -= current.left_size + 1;
				current = current.right;
			}
		}
		return null;
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

const values = [10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4];
const tree = new BinarySearchTree(values);

console.log('Tree:');
tree.print();

for (let k = -1; k <= values.length + 2; k++) {
	const node = tree.kthSmallest(k);
	console.log(node ? `${k}th smallest element: ${node.value}` : `${k}th smallest element: Not found`);
}
