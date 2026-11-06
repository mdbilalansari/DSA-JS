'use strict';

const { MinHeap } = require('./min_heap');

const minHeap = new MinHeap([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4, 14]);

console.log('Min Heap:');
minHeap.print();

minHeap.update(3, 9);
console.log('Updated Min Heap:');
minHeap.print();

minHeap.delete(3);
console.log('After deleting an element:');
minHeap.print();

console.log('Extracted Min:');
const extracted = [];
while(!minHeap.empty()) {
	extracted.push(minHeap.pop());
}
console.log(extracted.join(' '));
