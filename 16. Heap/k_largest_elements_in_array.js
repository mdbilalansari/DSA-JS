'use strict';

const PriorityQueue = require('../Containers/priority_queue');

// Efficient approach
// Time Complexity: O(k + (n-k) * log k)
function kLargestElement(array, k) {
	const minHeap = new PriorityQueue(array.slice(0, k));

	for (let i = minHeap.size; i < array.length; i++) {
		if (array[i] > minHeap.top()) {
			minHeap.replace(array[i]);
		}
	}

	return [...minHeap].sort((a, b) => a - b);
}

const values = [1, 12, 5, 11, 20];
const k = 3;

console.log('k largest elements:', kLargestElement(values, k));
