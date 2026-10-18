'use strict';

const arr = [1, 9, 3, 4, 5, 6, 11, 8, 2, 10];

// Time Complexity: O(n)
// Auxiliary Space Complexity: O(n)
function longest_consecutive_subsequence(arr) {
	const set = new Set(arr);
	let maxLen = 1,
		currLen = 1;
	arr.forEach((num) => {
		if (!set.has(num - 1)) {
			currLen = 1;
			while (set.has(num + currLen)) currLen++;
			maxLen = Math.max(maxLen, currLen);
		}
	});
	return maxLen;
}

// Time Complexity: O(n log n)
// Auxiliary Space Complexity: O(1)
function longest_consecutive_subsequence_2(arr) {
	arr.sort((a, b) => a - b);

	let maxLen = 1;
	let currLen = 1;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] == arr[i - 1] + 1) {
			currLen++;
		} else {
			maxLen = Math.max(maxLen, currLen);
			currLen = 1;
		}
	}
	maxLen = Math.max(maxLen, currLen);
	return maxLen;
}

console.log(longest_consecutive_subsequence(arr));
