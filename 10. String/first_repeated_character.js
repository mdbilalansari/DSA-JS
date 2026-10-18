'use strict';

const str = 'geeksforgeeks';

// Time Complexity: O(N)
function firstRepeatingChar(str) {
	let result = Infinity;
	const firstIndex = {};

	for (let i in str) {
		if (!firstIndex[str[i]]) {
			firstIndex[str[i]] = i;
		} else {
			result = Math.min(result, firstIndex[str[i]]);
		}
	}

	return result == Infinity ? -1 : result;
}

// Time Complexity: O(N)
function firstRepeatingChar_2(str) {
	let result = Infinity;
	const firstIndex = {};

	for (let i = str.length - 1; i >= 0; i--) {
		if (firstIndex[str[i]]) {
			result = i;
		}
		firstIndex[str[i]] = i;
	}

	return result == Infinity ? -1 : result;
}

console.log(firstRepeatingChar(str));
console.log(firstRepeatingChar_2(str));
