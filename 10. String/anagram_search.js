'use string';

const text = 'geeksforgeeks';
const pattern = 'skeef';

const isZero = (counts) => !counts.some((c) => c !== 0);

// Time Complexity: O(N)
function isAnagram(text, pattern) {
	const counts = new Array(256).fill(0);

	for (let i = 0; i < pattern.length; i++) {
		counts[text.charCodeAt(i)]++;
		counts[pattern.charCodeAt(i)]--;
	}

	const k = pattern.length;
	for (let i = k; i < text.length; i++) {
		if (isZero(counts)) return true;
		counts[text.charCodeAt(i)]++;
		counts[text.charCodeAt(i - k)]--;
	}

	return isZero(counts);
}

console.log(isAnagram(text, pattern));
