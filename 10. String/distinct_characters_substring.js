'use strict';

const str = 'geeksforgeeks';

// Time Complexity: O(N^2)
function longestUniqueSubstr(str) {
	const n = str.length;
	let res = 0;
	for (let i in str) {
		const visited = {};
		for (let j = i; j < n; j++) {
			if (visited[str[j]]) break;
			visited[str[j]] = true;
			res = Math.max(res, j - i + 1);
		}
	}
	return res;
}

// Time Complexity: O(N)
function longestUniqueSubstr_2(str) {
	const previousIndex = Array(256).fill(-1);
	let result = 0,
		start = 0,
		length = 0;
	for (let i = 0; i < str.length; i++) {
		if (previousIndex[str.charCodeAt(i)] == -1) {
			length = i - start + 1;
			result = Math.max(result, length);
		} else {
			for (let j = start; j < previousIndex[str.charCodeAt(i)]; j++) {
				previousIndex[str.charCodeAt(j)] = -1;
			}
			start = previousIndex[str.charCodeAt(i)] + 1;
		}
		previousIndex[str.charCodeAt(i)] = i;
	}

	return result;
}

// Time Complexity: O(N)
function longestUniqueSubstr_3(str) {
	const previousIndex = Array(256).fill(-1);
	let result = 0,
		start = 0,
		length = 0;
	for (let i = 0; i < str.length; i++) {
		start = Math.max(start, previousIndex[str.charCodeAt(i)] + 1);
		length = i - start + 1;
		result = Math.max(result, length);
		previousIndex[str.charCodeAt(i)] = i;
	}
	return result;
}

console.log(longestUniqueSubstr(str));
console.log(longestUniqueSubstr_2(str));
console.log(longestUniqueSubstr_3(str));
