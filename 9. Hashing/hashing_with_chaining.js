'use strict';

class Hashing {
	table_size;
	table;

	_hash = (key) => key % this.table_size;

	constructor(table_size = 31) {
		// table_size = Prime number
		this.table_size = table_size;
		this.table = Array.from({ length: table_size }, () => []);
	}

	insert(key) {
		let index = this._hash(key);
		if (!this.table[index].includes(key)) this.table[index].push(key);
	}
	search(key) {
		let index = this._hash(key);
		return this.table[index].includes(key);
	}
	remove(key) {
		let index = this._hash(key);
		const elementIndex = this.table[index].indexOf(key);
		if (elementIndex !== -1) {
			this.table[index].splice(elementIndex, 1);
		}
	}
	print() {
		this.table.forEach((row, index) => console.log(index, '=>', row));
	}
}

const hash_table = new Hashing(7);

for (let i = 0; i < 40; i++) {
	hash_table.insert(i);
}
hash_table.print();

for (let i = 0; i < 40; i += 2) {
	hash_table.remove(i);
}

for (let i = 0; i < 40; i += 7) {
	console.log(hash_table.search(i) ? 'Found' : 'Not Found', i);
}
hash_table.print();
