'use strict';

class PriorityQueue {
	// Min Heap by default
	constructor(iterable = [], compare = (a, b) => a - b) {
		this.compare = compare;
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
		while (index > 0 && this.compare(this.heap[index], this.heap[parent]) < 0) {
			this._swap(index, parent);
			index = parent;
			parent = this.parent(index);
		}
	}

	heapifyDown(index) {
		while (true) {
			let best = index;

			let left = this.left(index);
			let right = this.right(index);

			if (left < this.size && this.compare(this.heap[left], this.heap[best]) < 0) best = left;
			if (right < this.size && this.compare(this.heap[right], this.heap[best]) < 0) best = right;

			if (best === index) break;

			this._swap(index, best);
			index = best;
		}
	}

	push(value) {
		this.heap.push(value);
		this.heapifyUp(this.size - 1);
	}

	pop() {
		if (this.empty()) return undefined;
		if (this.size === 1) return this.heap.pop();

		const top = this.heap[0];

		this.heap[0] = this.heap.pop();
		this.heapifyDown(0);

		return top;
	}

	top() {
		return this.empty() ? undefined : this.heap[0];
	}

	clear() {
		this.heap.length = 0;
	}

	get size() {
		return this.heap.length;
	}

	empty() {
		return this.size === 0;
	}

	toArray() {
		return [...this.heap];
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

// ------------------------------------------------------------------

const values = [10, 5, 15, 3, 7, 13, 18, 14];
const minComparator = (a, b) => a - b;
const maxComparator = (a, b) => b - a;

// ------------------------------------------------------------------

const minQueue = new PriorityQueue(values, minComparator);
console.log('Min Priority Queue:');
minQueue.print();

const minValues = [];
while (!minQueue.empty()) minValues.push(minQueue.pop());
console.log('Items in increasing order:', minValues.join(' '));

// ------------------------------------------------------------------

const maxQueue = new PriorityQueue(values, maxComparator);
console.log('\nMax Priority Queue:');
maxQueue.print();

const maxValues = [];
while (!maxQueue.empty()) maxValues.push(maxQueue.pop());
console.log('Items in decreasing order:', maxValues.join(' '));

// ------------------------------------------------------------------

const tasks = [
	{ task: 'Email', priority: 5 },
	{ task: 'Fix Bug', priority: 1 },
	{ task: 'Meeting', priority: 3 },
	{ task: 'Demo', priority: 4 },
	{ task: 'Presentation', priority: 2 },
];

const priority = (a, b) => a.priority - b.priority;

const queue = new PriorityQueue(tasks, priority);
console.log('\nTask Priority Queue:');
queue.print();
const taskWithPriority = [];
while (!queue.empty()) taskWithPriority.push(queue.pop());
console.log('Tasks in priority order:', taskWithPriority);
