'use strict';

function left(index) {
	return 2 * index + 1;
}

function right(index) {
	return 2 * index + 2;
}

function parent(index) {
	return Math.floor((index - 1) / 2);
}

function swap(array, i, j) {
	[array[i], array[j]] = [array[j], array[i]];
}

function heapifyDown(array, size, index) {
	while (true) {
		let largest = index;

		const leftIndex = left(index);
		const rightIndex = right(index);

		if (leftIndex < size && array[leftIndex] > array[largest]) largest = leftIndex;
		if (rightIndex < size && array[rightIndex] > array[largest]) largest = rightIndex;

		if (largest === index) break;

		swap(array, index, largest);
		index = largest;
	}
}

function buildMaxHeap(array) {
	for (let index = Math.floor(array.length / 2) - 1; index >= 0; index--) {
		heapifyDown(array, array.length, index);
	}
}

function heapSort(array) {
	buildMaxHeap(array);
	for (let end = array.length - 1; end > 0; end--) {
		swap(array, 0, end);
		heapifyDown(array, end, 0);
	}
}

const values = [12, 11, 13, 5, 6, 7];
heapSort(values);
console.log(values);
