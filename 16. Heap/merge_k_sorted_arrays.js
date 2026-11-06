'use strict';

const PriorityQueue = require('../Containers/priority_queue');

function mergeKSortedArrays(arrayList) {
	const minHeap = new PriorityQueue((a, b) => a.key - b.key);

	arrayList.forEach((arr, i) => {
		if (arr.length > 0) {
			minHeap.push({ key: arr[0], arrayIndex: i, keyIndex: 0 });
		}
	});

	const mergedArray = [];
	while (!minHeap.empty()) {
		const { key, arrayIndex, keyIndex } = minHeap.pop();
		mergedArray.push(key);

		const nextIndex = keyIndex + 1;
		if (nextIndex < arrayList[arrayIndex].length) {
			minHeap.push({
				key: arrayList[arrayIndex][nextIndex],
				arrayIndex: arrayIndex,
				keyIndex: nextIndex,
			});
		}
	}

	return mergedArray;
}

const arrayList = [[10, 20, 30], [40, 50, 60], [5, 15], [1, 9, 11, 18], []];
const mergedArray = mergeKSortedArrays(arrayList);
console.log('Merged Array:');
console.log(mergedArray);
