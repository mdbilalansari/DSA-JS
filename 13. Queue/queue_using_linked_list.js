'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	#head = null;
	#tail = null;
	#size = 0;

	constructor(iterable = []) {
		for (const value of iterable) {
			this.enqueue(value);
		}
	}

	enqueue(value) {
		const newNode = new Node(value);

		if (this.#head === null) {
			this.#head = newNode;
			this.#tail = newNode;
		} else {
			this.#tail.next = newNode;
			this.#tail = newNode;
		}

		this.#size++;
		return this;
	}

	dequeue() {
		if (this.isEmpty()) {
			throw new Error('Queue is empty');
		}

		const value = this.#head.value;
		this.#head = this.#head.next;

		if (this.#head === null) {
			this.#tail = null;
		}

		this.#size--;
		return value;
	}

	front() {
		if (this.isEmpty()) {
			throw new Error('Queue is empty');
		}

		return this.#head.value;
	}

	back() {
		if (this.isEmpty()) {
			throw new Error('Queue is empty');
		}

		return this.#tail.value;
	}

	size() {
		return this.#size;
	}

	isEmpty() {
		return this.#size === 0;
	}

	print() {
		console.log([...this].join(' <- '));
	}

	*[Symbol.iterator]() {
		let current = this.#head;

		while (current !== null) {
			yield current.value;
			current = current.next;
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
