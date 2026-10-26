'use strict';

const Deque = require('../Containers/deque');

// Time Complexity: O(n)
// Space Complexity: O(k)
function maximumInSubarray(array, k) {
	if (k > array.length || k <= 0) return;

	const deque = new Deque();
	const result = [];

	for (let i = 0; i < k; i++) {
		while (!deque.empty() && array[i] >= array[deque.back()]) {
			deque.popBack();
		}
		deque.pushBack(i);
	}

	for (let i = k; i < array.length; i++) {
		result.push(array[deque.front()]);
		if (deque.front() == i - k) {
			deque.popFront();
		}
		while (!deque.empty() && array[i] >= array[deque.back()]) {
			deque.popBack();
		}
		deque.pushBack(i);
	}
	result.push(array[deque.front()]);

	return result;
}

const array = [10, 5, 8, 4, 15, 6, 7, 3, 9];
const k = 3;

console.log(maximumInSubarray(array, k));
