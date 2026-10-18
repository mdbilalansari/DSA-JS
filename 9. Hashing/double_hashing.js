'use strict';

class Hashing {
	size = 0;
	capacity;
	_table;

	// Primary hash function
	_hash_1 = (key) => key % this.capacity;

	// hash_2(key) and capacity will be relatively prime if capacity is prime
	_hash_2 = (key) => 1 + (key % (this.capacity - 1)); // 1 <= hash_2(key) <= capacity-1

	// Hash function with double hashing
	_hash = (key, i) => (this._hash_1(key) + i * this._hash_2(key)) % this.capacity;

	// Constructor with default capacity of 73. Guaranteed to store 31 keys
	constructor(capacity = 73) {
		this.capacity = capacity;
		this._table = new Array(capacity).fill('empty');
	}

	insert(key) {
		if (this.size == this.capacity) throw new Error('Table is full');

		for (let i = 0; i < this.capacity; i++) {
			let index = this._hash(key, i);
			// Insert in an empty or previously deleted slot
			if (this._table[index] == 'empty' || this._table[index] == 'deleted') {
				this._table[index] = key;
				this.size++;
				return;
			}
			// If key already exists, do nothing
			if (this._table[index] == key) {
				return;
			}
		}
		// If loop exits, it means no empty slot was found
		console.log('Empty slot not found');
	}
	_findIndex(key) {
		for (let i = 0; i < this.capacity; i++) {
			let index = this._hash(key, i);
			if (this._table[index] == 'empty') {
				// Stop if an empty slot is found; the key is not in the table
				return -1;
			}
			if (this._table[index] == key) {
				return index;
			}
			// Continue probing if the slot is marked as deleted
		}
		return -1;
	}
	search(key) {
		return this._findIndex(key) !== -1;
	}
	remove(key) {
		const index = this._findIndex(key);
		if (index !== -1) {
			this._table[index] = 'deleted'; // Mark as deleted
			this.size--;
		}
	}
	print() {
		console.log(this._table);
	}
}

// Function to generate random numbers
const random_number = () => Math.floor(Math.random() * 100 + 500);

const hash_table = new Hashing();

// Inert random values into the hash table between 200 and 300
for (let i = 0; i < 100; i++) {
	hash_table.insert(random_number());
}

// Print the hash table
hash_table.print();

// Remove certain values from the hash table
for (let i = 0; i < 50; i += 2) {
	hash_table.remove(random_number());
}

// Print the hash table after removal
hash_table.print();

// Search for values in the hash table
for (let i = 0; i < 10; i++) {
	let key = random_number();
	console.log(hash_table.search(key) ? 'Found' : 'Not Found', key);
}
