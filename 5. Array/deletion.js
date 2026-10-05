'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const key = 1;

// Time Complexity: O(n)
function deleteElement(arr, key) {
	let pos = arr.findIndex((num) => num == key);
	if (pos == -1) return arr.length;

	for (let i = pos; i < arr.length - 1; i++) {
		arr[i] = arr[i + 1];
	}
	arr.pop();
	return arr.length - 1;
}

let deleteElement2 = (arr, key) => arr.filter((num) => num != key);

console.log(arr);
console.log(deleteElement2(arr, key));
let n = deleteElement(arr, key);
console.log(arr);
