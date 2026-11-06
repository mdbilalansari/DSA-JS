'use strict';

class PriorityQueue {
	#heap;
	#compare;
	// Min Heap by default
	constructor(iterable = [], compare = (a, b) => a - b) {
		if (typeof iterable === 'function') {
			compare = iterable;
			iterable = [];
		}
		this.#compare = compare;
		this.#heap = [...iterable];

		for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
			this.#heapifyDown(i);
		}
	}

	#swap(i, j) {
		[this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
	}

	#parent(index) {
		return Math.floor((index - 1) / 2);
	}

	#left(index) {
		return 2 * index + 1;
	}

	#right(index) {
		return 2 * index + 2;
	}

	#heapifyUp(index) {
		let parent = this.#parent(index);
		while (index > 0 && this.#compare(this.#heap[index], this.#heap[parent]) < 0) {
			this.#swap(index, parent);
			index = parent;
			parent = this.#parent(index);
		}
	}

	#heapifyDown(index) {
		while (true) {
			let best = index;

			let left = this.#left(index);
			let right = this.#right(index);

			if (left < this.size && this.#compare(this.#heap[left], this.#heap[best]) < 0) best = left;
			if (right < this.size && this.#compare(this.#heap[right], this.#heap[best]) < 0) best = right;

			if (best === index) break;

			this.#swap(index, best);
			index = best;
		}
	}

	push(value) {
		this.#heap.push(value);
		this.#heapifyUp(this.size - 1);
	}

	pop() {
		if (this.empty()) return undefined;
		if (this.size === 1) return this.#heap.pop();

		const top = this.#heap[0];

		this.#heap[0] = this.#heap.pop();
		this.#heapifyDown(0);

		return top;
	}

	top() {
		return this.empty() ? undefined : this.#heap[0];
	}

	replace(value) {
		if (this.empty()) {
			this.push(value);
			return undefined;
		}

		const top = this.#heap[0];
		this.#heap[0] = value;
		this.#heapifyDown(0);

		return top;
	}

	clear() {
		this.#heap.length = 0;
	}

	get size() {
		return this.#heap.length;
	}

	empty() {
		return this.size === 0;
	}

	toArray() {
		return [...this.#heap];
	}

	*[Symbol.iterator]() {
		yield* this.#heap;
	}

	print(index = 0, prefix = '', isLeft = true) {
		if (index >= this.size) return;

		let left = this.#left(index);
		let right = this.#right(index);

		this.print(right, prefix + (isLeft ? '│   ' : '    '), false);
		console.log(prefix + (isLeft ? '└── ' : '┌── '), this.#heap[index]);
		this.print(left, prefix + (isLeft ? '    ' : '│   '), true);
	}
}

module.exports = PriorityQueue;
