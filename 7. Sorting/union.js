'use strict';

// Two Sorted Arrays
const A = [13, 21, 33, 33, 33, 46, 51, 62, 77, 82, 91, 103];
const B = [11, 13, 13, 13, 21, 33, 63, 63, 63, 71, 81, 93, 108];

// Time Complexity: O(n+m)
function Union(A, B) {
	const result = [];
	let i = 0,
		j = 0;

	while (i < A.length && j < B.length) {
		if (i > 0 && A[i - 1] == A[i]) {
			i++;
		} else if (j > 0 && B[j - 1] == B[j]) {
			j++;
		} else if (A[i] < B[j]) {
			result.push(A[i]);
			i++;
		} else if (A[i] > B[j]) {
			result.push(B[j]);
			j++;
		} else {
			result.push(A[i]);
			i++;
			j++;
		}
	}

	// print remaining elements
	while (i < A.length) {
		if (i > 0 && A[i - 1] != A[i]) result.push(A[i]);
		i++;
	}

	while (j < B.length) {
		if (j > 0 && B[j - 1] != B[j]) result.push(B[j]);
		j++;
	}

	return result;
}

// Time Complexity: O(n+m)
function union_2(A, B) {
	const setA = new Set(A);
	const setB = new Set(B);

	return [...setA.union(setB)];
}

console.log(Union(A, B));
