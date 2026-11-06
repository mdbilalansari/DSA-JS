'use strict';

const PriorityQueue = require('../Containers/priority_queue');

function sortKSortedArray(array, k) {
	const minHeap = new PriorityQueue(array.slice(0, k + 1));

	let index = 0;
	for (let i = minHeap.size; i < array.length; i++) {
		array[index++] = minHeap.pop();
		minHeap.push(array[i]);
	}
	while (!minHeap.empty()) {
		array[index++] = minHeap.pop();
	}
}

const values = [10, 9, 7, 8, 4, 70, 50, 60];
const k = 4;
sortKSortedArray(values, k);
console.log(values);
