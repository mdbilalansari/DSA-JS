'use strict';

const text = 'geeksforgeeks';
const pattern = 'geeks';

// Time Complexity: O((n - m) * m)
function RabinKarp(text, pattern) {
	const n = text.length;
	const m = pattern.length;

	// Calculate d^(m - 1) % q
	let H = 1,
		d = 97,
		q = 2147483647; // Predefined large prime number
	for (let i = 0; i < m - 1; i++) {
		H = (H * d) % q;
	}

	// Calculate Hash value of pattern and text
	let p = 0,
		t = 0;
	for (let i = 0; i < m; i++) {
		p = (p * d + pattern.charCodeAt(i)) % q;
		t = (t * d + text.charCodeAt(i)) % q;
	}

	for (let i = 0; i <= n - m; i++) {
		// Match pattern and window if hash values match
		if (p == t) {
			let matched = true;
			for (let j = 0; j < m; j++) {
				if (text[i + j] != pattern[j]) {
					matched = false;
					break;
				}
			}
			if (matched) console.log(i);
		}

		// Update hash values of window
		if (i < n - m) {
			t = (d * (t - text.charCodeAt(i) * H) + text.charCodeAt(i + m)) % q;
			if (t < 0) {
				t = t + q;
			}
		}
	}
}

RabinKarp(text, pattern);
