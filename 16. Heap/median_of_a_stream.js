'use strict';

const PriorityQueue = require('../Containers/priority_queue');

function printMedian(array) {
	const lowerHalf = new PriorityQueue((a, b) => b - a); // Max Heap
	const upperHalf = new PriorityQueue((a, b) => a - b); // Min Heap
	const medians = [];

	let currMedian = 0;
	for (const value of array) {
		if (value < currMedian) {
			lowerHalf.push(value);
		} else {
			upperHalf.push(value);
		}

		if (lowerHalf.size > upperHalf.size + 1) {
			upperHalf.push(lowerHalf.pop());
		} else if (upperHalf.size > lowerHalf.size + 1) {
			lowerHalf.push(upperHalf.pop());
		}

		if (lowerHalf.size === upperHalf.size) {
			currMedian = (lowerHalf.top() + upperHalf.top()) / 2;
		} else if (lowerHalf.size > upperHalf.size) {
			currMedian = lowerHalf.top();
		} else {
			currMedian = upperHalf.top();
		}

		medians.push(currMedian);
	}

	return medians;
}

const values = [25, 7, 10, 15, 20];
console.log('Median of the stream is:');
console.log(printMedian(values).join(' '));
