'use strict';

const text = 'ababcababaad';
const pattern = 'ababa';

// Time Complexity: O(n)
function longestProperPrefixSufixArray(pattern) {
	const n = pattern.length;

	const LPS = new Array(n);
	LPS[0] = 0;
	let i = 1,
		len = 0;
	while (i < n) {
		if (pattern[i] == pattern[len]) {
			LPS[i] = len + 1;
			len++;
			i++;
		} else {
			if (len == 0) {
				LPS[i] = 0;
				i++;
			} else {
				len = LPS[len - 1];
			}
		}
	}
	return LPS;
}

// Time Complexity: O(n + m)
function KMP(text, pattern) {
	const n = text.length,
		m = pattern.length;
	const LPS = longestProperPrefixSufixArray(pattern);
	let i = 0,
		j = 0;
	while (i < n) {
		if (pattern[j] == text[i]) {
			// Match
			i++;
			j++;

			if (j == m) {
				// Full match
				console.log(i - j);
				// Consult the LPS array to slice the pattern from the text
				j = LPS[j - 1];
			}
		} else {
			// Mismatch
			if (j == 0) {
				i++;
			} else {
				// Consult the LPS array to slice the pattern from the text
				j = LPS[j - 1];
			}
		}
	}
}

KMP(text, pattern);
