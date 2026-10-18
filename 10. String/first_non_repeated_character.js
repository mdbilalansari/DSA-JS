'use strict';

const str = 'geeksforgeeks';

// Time Complexity: O(N)
// Two traversals of the string
function firstNonRepeatingChar(str) {
	const map = {};

	for (let char of str) {
		map[char] = map[char] ? map[char] + 1 : 1;
	}
	for (let i in str) {
		if (map[str[i]] == 1) return i;
	}
	return -1;
}

// Time Complexity: O(N)
// One traversal of the string
function firstNonRepeatingChar_2(str) {
	const firstIndex = {};

	for (let i in str) {
		let char = str[i];
		if (firstIndex[char]) {
			firstIndex[char] = -1;
		} else {
			firstIndex[char] = i;
		}
	}

	const indexArray = Object.values(firstIndex).filter((x) => x !== -1);
	return Math.min(...indexArray);
}

console.log(firstNonRepeatingChar(str));
console.log(firstNonRepeatingChar_2(str));
