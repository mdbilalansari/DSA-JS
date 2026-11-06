'use strict';

class MinHeap {
	constructor(iterable = []) {
		this.heap = [...iterable];

		for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
			this.heapifyDown(i);
		}
	}

	_swap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}

	parent(index) {
		return Math.floor((index - 1) / 2);
	}

	left(index) {
		return 2 * index + 1;
	}

	right(index) {
		return 2 * index + 2;
	}

	heapifyUp(index) {
		let parent = this.parent(index);
		while (index > 0 && this.heap[index] < this.heap[parent]) {
			this._swap(index, parent);
			index = parent;
			parent = this.parent(index);
		}
	}

	heapifyDown(index) {
		while (true) {
			let smallest = index;

			let left = this.left(index);
			let right = this.right(index);

			if (left < this.size && this.heap[left] < this.heap[smallest]) smallest = left;
			if (right < this.size && this.heap[right] < this.heap[smallest]) smallest = right;

			if (smallest === index) break;

			this._swap(index, smallest);
			index = smallest;
		}
	}

	push(value) {
		this.heap.push(value);
		this.heapifyUp(this.size - 1);
	}

	pop() {
		if (this.heap.length === 0) return undefined;
		if (this.size === 1) return this.heap.pop();

		const min = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.heapifyDown(0);

		return min;
	}

	delete(index) {
		if (index < 0 || index >= this.size) return;
		if (index === this.size - 1) {
			this.heap.pop();
			return;
		}

		this.heap[index] = this.heap.pop();

		if (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
			this.heapifyUp(index);
		} else {
			this.heapifyDown(index);
		}
	}

	update(index, value) {
		if (index < 0 || index >= this.size) return;

		if (value < this.heap[index]) {
			this.heap[index] = value;
			this.heapifyUp(index);
		} else if (value > this.heap[index]) {
			this.heap[index] = value;
			this.heapifyDown(index);
		}
	}

	top() {
		return this.empty() ? undefined : this.heap[0];
	}

	get size() {
		return this.heap.length;
	}

	empty() {
		return this.heap.length === 0;
	}

	*[Symbol.iterator]() {
		yield* this.heap;
	}

	print(index = 0, prefix = '', isLeft = true) {
		if (index >= this.size) return;

		let left = this.left(index);
		let right = this.right(index);

		this.print(right, prefix + (isLeft ? '│   ' : '    '), false);
		console.log(prefix + (isLeft ? '└── ' : '┌── '), this.heap[index]);
		this.print(left, prefix + (isLeft ? '    ' : '│   '), true);
	}
}

module.exports = { MinHeap };
