'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = 10;

// Time Complexity: O(1)
function insertBack(arr, key) {
	return arr.push(key);
}

// Time Complexity: O(n)
function insertFront(arr, key) {
	return arr.unshift(key);
}

// Time Complexity: O(n)
function insert(arr, index, key) {
	arr.splice(index, 0, key);
}

console.log(arr);

insertBack(arr, 11);
insertBack(arr, 12);
insertFront(arr, 0);
insertFront(arr, -1);
console.log(arr);

insert(arr, 12, 77);
insert(arr, 13, 99);
console.log(arr);
