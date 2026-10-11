'use strict';

const A = [13, 21, 33, 46, 51, 62, 77, 82, 91, 103];
const B = [11, 21, 34, 45, 53, 63, 71, 81, 93, 108];

// Time Complexity: O(n+m)
function merge(A, B) {
	const result = [];
	let i = 0,
		j = 0;

	while (i < A.length && j < B.length) {
		if (A[i] <= B[j]) result.push(A[i++]);
		else result.push(B[j++]);
	}

	// copy remaining elements
	while (i < A.length) result.push(A[i++]);
	while (j < B.length) result.push(B[j++]);

	return result;
}

console.log(merge(A, B));
