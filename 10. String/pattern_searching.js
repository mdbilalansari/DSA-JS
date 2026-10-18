'use strict';

const text = "geeksforgeeks";
const pattern = "geeks";

// Time Complexity: O((n - m) * m)
function pattern_search(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        for (j = 0; j < m; j++) {
            if (text[i + j] != pattern[j]) break;
        }
        if (j == m) console.log(i);
    }
	console.log();
}

// If pattern contains unique characters
// Time Complexity: O(n)
function pattern_search_2(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    for (let i = 0; i <= n - m;) {
        let j = 0;
        for (j = 0; j < m; j++) {
            if (text[i + j] != pattern[j]) break;
        }
        if (j == m) console.log(i);
		if (j == 0) {
            i++;
        } else {
            i = i + j;
        }
    }
    console.log();
}

pattern_search(text, pattern);
pattern_search_2(text, pattern);
