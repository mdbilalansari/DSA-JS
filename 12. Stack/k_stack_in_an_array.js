'use strict';

class kStacks {
	#array; // Array to store all the stacks
	#top; // Array to store top element index for each stack
	#next; // Array to store the next free index or next element index for each element
	#freeTop; // The beginning index of the free list (next available index)
	#capacity; // total size of the array

	constructor(k, capacity) {
		this.#capacity = capacity;
		this.#array = new Array(capacity);
		this.#top = new Array(k).fill(-1);
		this.#next = Array.from({ length: capacity }, (_, i) => i + 1);
		this.#next[capacity - 1] = -1;
		this.#freeTop = 0;
	}
	// Push an element onto a specific stack
	push(value, stackNum) {
		if (this.isFull()) {
			throw new Error('Stack overflow');
		}

		let i = this.#freeTop; // Get the current free index

		this.#freeTop = this.#next[i]; // Update free to the next available slot

		this.#next[i] = this.#top[stackNum]; // Link the new element with the previous top element
		this.#top[stackNum] = i; // Update top index for this stack

		this.#array[i] = value; // Store the element in the array
	}
	// Pop an element from a specific stack
	pop(stackNum) {
		if (this.isEmpty(stackNum)) {
			throw new Error('Stack underflow');
		}

		let i = this.#top[stackNum]; // Get the top element index for the stack
		this.#top[stackNum] = this.#next[i]; // Update the top to the next element in the stack

		this.#next[i] = this.#freeTop; // Add the current index to the free list
		this.#freeTop = i; // Update the free index

		return this.#array[i]; // Return the popped element
	}
	peek(stackNum) {
		if (this.isEmpty(stackNum)) {
			throw new Error('Attempting to peek at an empty stack');
		}
		let i = this.#top[stackNum];
		return this.#array[i];
	}
	// Check if a specific stack is empty
	isEmpty(stackNum) {
		return this.#top[stackNum] == -1;
	}
	// Check if the main array is full
	isFull() {
		return this.#freeTop == -1;
	}
	capacity() {
		return this.#capacity;
	}
	// Print all the stacks
	printStacks() {
		this.#top.forEach((k, i) => {
			const stack = [];
			for (let j = this.#top[i]; j != -1; j = this.#next[j]) {
				stack.push(this.#array[j]);
			}
			console.log(`Stack ${i}:`, stack.join(' -> '));
		});
	}
}

const k = 3,
	capacity = 10;
const stack = new kStacks(k, capacity);

stack.push(15, 2); // Push 15 into stack 2
stack.push(45, 2); // Push 45 into stack 2
stack.push(17, 1); // Push 17 into stack 1
stack.push(49, 1); // Push 49 into stack 1
stack.push(39, 0); // Push 39 into stack 0
stack.pop(1); // Pop from stack 1
stack.push(11, 1); // Push 11 into stack 0
stack.push(13, 1); // Push 13 into stack 0

stack.printStacks();

console.log('Peek stack 0:', stack.peek(0)); // Output: 39
console.log('Peek stack 1:', stack.peek(1)); // Output: 13
console.log('Peek stack 2:', stack.peek(2)); // Output: 45
console.log('Popped from stack 0:', stack.pop(0)); // Output: 39
console.log('Popped from stack 1:', stack.pop(1)); // Output: 13
console.log('Popped from stack 2:', stack.pop(2)); // Output: 45
