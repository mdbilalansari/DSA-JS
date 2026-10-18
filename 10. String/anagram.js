'use strict';

const str1 = 'geeksforgeeks';
const str2 = 'forgeeksgeeks';

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)
function isAnagram(str1, str2) {
	if (str1.length != str2.length) return false;

	const counts = new Array(256).fill(0);
	for (let i = 0; i < str1.length; i++) {
		counts[str1.charCodeAt(i)]++;
		counts[str2.charCodeAt(i)]--;
	}
	return !counts.some((c) => c != 0);
}

console.log(isAnagram(str1, str2));
