'use strict';

class Queue {
	#array;
	#size;
	#head = 0;

	constructor(iterable = []) {
		this.#array = [...iterable];
		this.#size = this.#array.length;
	}

	#resize() {
		this.#array = [...this];
		this.#array.length = 2 * this.#array.length + 1;
		this.#head = 0;
	}

	enqueue(item) {
		if (this.size() === this.capacity()) this.#resize();

		let index = (this.#head + this.#size) % this.#array.length;
		this.#array[index] = item;
		this.#size++;
		return this;
	}

	dequeue() {
		if (this.isEmpty()) throw new Error('Queue is empty');

		const item = this.#array[this.#head];
		this.#array[this.#head] = undefined;
		this.#size--;
		this.#head = (this.#head + 1) % this.#array.length;
		return item;
	}

	front() {
		if (this.isEmpty()) throw new Error('Queue is empty');
		return this.#array[this.#head];
	}

	back() {
		if (this.isEmpty()) throw new Error('Queue is empty');

		const index = (this.#head + this.#size - 1) % this.#array.length;
		return this.#array[index];
	}

	isEmpty() {
		return this.#size === 0;
	}

	size() {
		return this.#size;
	}

	capacity() {
		return this.#array.length;
	}

	print() {
		console.log([...this].join(' <- '));
	}

	*[Symbol.iterator]() {
		for (let i = 0; i < this.#size; i++) {
			let index = (this.#head + i) % this.#array.length;
			yield this.#array[index];
		}
	}
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print(); // 10 20 30

console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20
console.log(queue.back()); // 30
console.log(queue.size()); // 2
queue.print(); // 20 30
