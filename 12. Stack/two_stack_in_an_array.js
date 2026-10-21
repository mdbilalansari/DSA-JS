'use strict';

class TwoStack {
	#array;
	#capacity;
	#top1;
	#top2;

	constructor(capacity = 10) {
		this.#capacity = capacity;
		this.#array = new Array(capacity);
		this.#top1 = -1;
		this.#top2 = capacity;
	}

	push1(value) {
		if (this.#top1 + 1 == this.#top2) {
			throw new Error('Pushing to full stack');
		}
		this.#array[++this.#top1] = value;
	}

	push2(value) {
		if (this.#top2 - 1 == this.#top1) {
			throw new Error('Pushing to full stack');
		}
		this.#array[--this.#top2] = value;
	}

	pop1() {
		if (this.#top1 == -1) {
			throw new Error('Popping from empty stack');
		}
		return this.#array[this.#top1--];
	}

	pop2() {
		if (this.#top2 == this.#capacity) {
			throw new Error('Popping from empty stack');
		}
		return this.#array[this.#top2++];
	}

	peek1() {
		if (this.#top1 == -1) {
			throw new Error('Popping from empty stack');
		}
		return this.#array[this.#top1];
	}

	peek2() {
		if (this.#top2 == this.#capacity) {
			throw new Error('Popping from empty stack');
		}
		return this.#array[this.#top2];
	}

	size1() {
		return this.#top1 + 1;
	}
	size2() {
		return this.#capacity - this.#top2;
	}

	isEmpty1() {
		return this.#top1 == -1;
	}

	isEmpty2() {
		return this.#top2 == this.#capacity;
	}

	isFull() {
		return this.#top1 == this.#top2 - 1;
	}

	get capacity() {
		return this.#capacity;
	}

	print() {
		const stack1 = this.#array.slice(0, this.#top1 + 1).reverse();
		const stack2 = this.#array.slice(this.#top2);
		console.log('Stack 1:', stack1.join(' -> '));
		console.log('Stack 2:', stack2.join(' -> '));
	}
}

const stack = new TwoStack(5);
stack.push1(5);
stack.push2(10);
stack.push2(15);
stack.push1(11);
stack.push2(7);
stack.print();
console.log('Size of stack 1 is', stack.size1());
console.log('Size of stack 2 is ', stack.size2());
console.log(stack.isFull() ? 'Stack is full' : 'Stack is not full');
console.log('Popped element from stack 1 is ', stack.pop1());
console.log('Popped element from stack 2 is ', stack.pop2());
