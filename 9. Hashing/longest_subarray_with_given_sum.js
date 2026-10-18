'use strict';

let arr = [8, 3, 1, 5, -6, 6, 2, 2];
let sum = 4;

// Time Complexity: O(n)
// Auxiliary Space Complexity: O(n)
function maxSubArrayWithSum(arr, sum) {
	const map = new Map();

	let preSum = 0;
	let maxLength = 0;
	for (let i = 0; i < arr.length; i++) {
		preSum += arr[i];
		if (preSum == sum) {
			maxLength = i + 1;
		}
		if (map.has(preSum - sum)) {
			maxLength = Math.max(maxLength, i - map.get(preSum - sum));
		}
		if (!map.has(preSum)) {
			// left most appearance of preSum
			map.set(preSum, i);
		}
	}

	return maxLength;
}

if (require.main == module) {
	console.log(maxSubArrayWithSum(arr, sum));
}

module.exports = { maxSubArrayWithSum };
