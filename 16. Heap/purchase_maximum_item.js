'use strict';

const PriorityQueue = require('../Containers/priority_queue');

function buyMaximumItems(prices, budget) {
	const minHeap = new PriorityQueue(prices);

	let count = 0;
	while (!minHeap.empty()) {
		const price = minHeap.pop();

		if (budget - price < 0) break;

		count++;
		budget -= price;
	}

	return count;
}

const prices = [1, 12, 5, 11, 20];
const budget = 10;
const result = buyMaximumItems(prices, budget);
console.log(`Maximum items that can be bought: ${result}`);

module.exports = { buyMaximumItems };
