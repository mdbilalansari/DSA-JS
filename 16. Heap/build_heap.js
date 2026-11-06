'use strict';

const { MinHeap } = require('./min_heap');

class Min_Heap extends MinHeap {
	buildHeap(iterable) {
		this.heap = [...iterable];

		for (let index = Math.floor(this.size / 2) - 1; index >= 0; index--) {
			this.heapifyDown(index);
		}
	}
}

const minHeap = new Min_Heap();
minHeap.buildHeap([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4, 14]);

console.log('Min Heap:');
minHeap.print();
