'use strict';

class Stack {
	#array = [];

	constructor(iterable = []) {
		this.#array = [...iterable];
	}
	push(item) {
		this.#array.push(item);
	}
	pop() {
		return this.#array.pop();
	}
	top() {
		return this.#array.at(-1);
	}
	isEmpty() {
		return this.#array.length === 0;
	}
	size() {
		return this.#array.length;
	}
	print() {
		console.log([...this].join(' -> '));
	}
	*[Symbol.iterator]() {
		yield* this.#array.toReversed();
	}
}

if (require.main == module) {
	const stack = new Stack([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	stack.print();
	console.log('Size:', stack.size());
	console.log('Top:', stack.top());
	stack.print();
	console.log('Popped:', stack.pop());
	stack.print();
	console.log('Size:', stack.size());
}

module.exports = { Stack };
