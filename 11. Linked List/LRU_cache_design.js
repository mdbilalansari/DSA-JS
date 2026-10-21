// Node structure for a doubly linked list
'use strict';

class Node {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

// Class to represent a doubly linked list
class LRUcache {
	#cacheMap = new Map();
	#capacity;
	#head = null;
	#tail = null;

	constructor(capacity) {
		this.#capacity = capacity;
	}

	// Time Complexity: O(1)
	#removeNode(node) {
		if (node == this.#head) {
			this.#head = this.#head.next;
		} else {
			node.prev.next = node.next;
		}

		if (node == this.#tail) {
			this.#tail = node.prev;
		} else {
			node.next.prev = node.prev;
		}

		node.prev = null;
		node.next = null;
	}
	#insertAtHead(node) {
		node.prev = null;
		node.next = this.#head;

		if (this.#head) {
			this.#head.prev = node;
		} else {
			this.#tail = node;
		}

		this.#head = node;
	}

	get(key) {
		if (!this.#cacheMap.has(key)) return;

		const node = this.#cacheMap.get(key);
		this.#removeNode(node);
		this.#insertAtHead(node);
		return node.value;
	}
	put(key, value) {
		if (this.#cacheMap.has(key)) {
			const node = this.#cacheMap.get(key);
			node.value = value;
			this.#removeNode(node);
			this.#insertAtHead(node);
			return;
		}

		if (this.#cacheMap.size >= this.#capacity) {
			const lruNode = this.#tail;
			this.#removeNode(lruNode);
			this.#cacheMap.delete(lruNode.key);
		}

		const node = new Node(key, value);
		this.#cacheMap.set(key, node);
		this.#insertAtHead(node);
	}
	print() {
		const arr = [];
		for (let curr = this.#head; curr != null; curr = curr.next) {
			arr.push([curr.key, curr.value]);
		}
		console.log(arr.map(([k, v]) => `(${k}, ${v})`).join(' => ') + '\n');
	}
}

let cache = new LRUcache(5);
cache.put(1, 'first');
cache.print();
cache.put(2, 'second');
cache.print();
cache.put(3, 'third');
cache.print();
cache.put(1, 'one');
cache.print();
cache.put(4, 'fourth');
cache.print();
cache.put(5, 'fifth');
cache.print();
cache.put(6, 'sixth');
cache.print();
console.log(cache.get(1));
cache.print();
console.log(cache.get(2));
cache.print();
console.log(cache.get(3));
cache.print();
console.log(cache.get(4));
cache.print();
console.log(cache.get(5));
cache.print();
console.log(cache.get(6));
cache.print();
