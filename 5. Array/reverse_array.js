'use strict';

const arr = [1, 2, 3, 4, 5];

// Time Complexity: O(n)
// Auxiliary Space: O(1)
function reverseArray(arr) {
	const n = arr.length;
	for (let i = 0; i < n / 2; i++) {
		[arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
	}
}

// Time Complexity: O(n)
// Auxiliary Space: O(1)
function reverseArray_2(arr) {
	let start = 0,
		end = arr.length - 1;
	while (start <= end) {
		[arr[start], arr[end]] = [arr[end], arr[start]];
		start++;
		end--;
	}
}

// Time Complexity: O(n)
// Auxiliary Space: O(n)
function reverseArray_3(arr) {
	return arr.reverse();
}

reverseArray(arr);
console.log(arr);
reverseArray_2(arr);
console.log(arr);
console.log(reverseArray_3(arr));
