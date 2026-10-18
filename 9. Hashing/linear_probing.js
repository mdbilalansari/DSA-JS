'use strict';

class Hashing {
	capacity;
	size = 0;
	_table;

	// Primary hash function
	_primaryHash = (key) => key % this.capacity;

	// Hash function with linear probing
	_hash = (key, i) => (this._primaryHash(key) + i) % this.capacity;

	// Constructor with default capacity of 31
	constructor(capacity = 31) {
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

const hash_table = new Hashing();

// Insert values into the hash table
for (let i = 7; i < 25; i++) {
	hash_table.insert(i * i);
}
for (let i = 7; i < 25; i++) {
	hash_table.insert(i * i);
}

// Print the hash table
hash_table.print();

// Remove certain values from the hash table
for (let i = 0; i < 14; i += 2) {
	hash_table.remove(i * i);
}

// Print the hash table after removal
hash_table.print();

// Search for values in the hash table
for (let i = 0; i < 33; i++) {
	let num = i * i;
	console.log(hash_table.search(num) ? 'Found' : 'Not Found', num);
}
