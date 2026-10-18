'use strict';

const str = 'STRING';

function factorial(num) {
	if (num <= 0) return 1;
	return num * factorial(num - 1);
}

// Time Complexity: O(N)
function lexicographic_rank(str) {
	const n = str.length;
	const frequency = new Array(256).fill(0);
	for (let char of str) {
		frequency[char.charCodeAt(0)]++;
	}

	// Calculate the cumulative frequency
	for (let i = 1; i < 256; i++) {
		frequency[i] += frequency[i - 1];
	}

	// Calculate the lexicographic rank
	let rank = 1,
		multiplier = factorial(n);
	for (let i in str) {
		multiplier /= n - i;
		rank += frequency[str.charCodeAt(i) - 1] * multiplier;

		for (let j = str[i].charCodeAt(0); j < 256; j++) {
			frequency[j]--;
		}
	}

	return rank;
}

console.log(lexicographic_rank(str));
