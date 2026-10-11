'use strict';

// Two Sorted Arrays
const A = [13, 21, 33, 33, 33, 46, 51, 62, 77, 82, 91, 103];
const B = [11, 13, 13, 13, 21, 33, 33, 63, 71, 81, 93, 108];

// Time Complexity: O(n+m)
function intersection(A, B) {
	const result = [];
	let i = 0,
		j = 0;
	while (i < A.length && j < B.length) {
		if (i > 0 && A[i - 1] == A[i]) {
			i++;
		} else if (A[i] < B[j]) {
			i++;
		} else if (A[i] > B[j]) {
			j++;
		} else {
			result.push(A[i]);
			i++;
			j++;
		}
	}
	return result;
}

// Time Complexity: O(n+m)
function intersection_2(A, B) {
	const setA = new Set(A);
	const setB = new Set(B);

	return [...setA.intersection(setB)];
}

console.log(intersection(A, B));
console.log(intersection_2(A, B));
