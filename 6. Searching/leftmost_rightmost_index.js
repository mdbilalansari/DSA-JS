'use strict';

let arr = [1, 2, 3, 3, 3, 3, 3, 3, 5, 6, 7, 8, 9, 10];
const key = 3;

function leftMostIndex(arr, key, start = 0, end = arr.length - 1) {
	if (start > end) return -1;

	let mid = start + Math.floor((end - start) / 2);
	if (arr[mid] == key && (mid == 0 || arr[mid - 1] != key)) {
		return mid;
	} else if (key <= arr[mid]) {
		return leftMostIndex(arr, key, start, mid - 1);
	} else {
		return leftMostIndex(arr, key, mid + 1, end);
	}
}

function rightMostIndex(arr, key, start = 0, end = arr.length - 1) {
	if (start > end) return -1;

	let mid = start + Math.floor((end - start) / 2);
	if (arr[mid] == key && (mid == end || arr[mid + 1] != key)) {
		return mid;
	} else if (key < arr[mid]) {
		return rightMostIndex(arr, key, start, mid - 1);
	} else {
		return rightMostIndex(arr, key, mid + 1, end);
	}
}

function countOfKey(arr, key) {
	let leftIndex = leftMostIndex(arr, key);
	if (leftIndex == -1) return 0;
	return rightMostIndex(arr, key) - leftIndex + 1;
}

// Count of 1's in a binary sorted array;
function countOf_1s(arr) {
	return arr.at(-1) == 1 ? arr.length - leftMostIndex(arr, 1) : 0;
}

console.log(leftMostIndex(arr, key));
console.log(rightMostIndex(arr, key));
console.log(countOfKey(arr, key));

let binaryArr = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
console.log(countOf_1s(binaryArr));
