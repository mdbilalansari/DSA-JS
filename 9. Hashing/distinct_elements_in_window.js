'use strict';

const arr = [10, 20, 20, 10, 10, 20, 5, 20];
const k = 3;

// Time Complexity: O(n)
// Auxiliary Space Complexity: O(k)
function countDistinctElementsInWindow(arr, k) {
	const map = new Map();
	function increaseCount(num) {
		if (map.has(num)) map.set(num, map.has(num) + 1);
		else map.set(num, 1);
	}
	for (let i = 0; i < k; i++) {
		increaseCount(arr[i]);
	}
	console.log(map.size);
	for (let i = k; i < arr.length; i++) {
		const lastNum = arr[i - k];
		map.set(lastNum, lastNum - 1);
		if (map.get(lastNum) == 0) {
			map.delete(lastNum);
		}
		increaseCount(arr[i]);
		console.log(map.size);
	}
}

countDistinctElementsInWindow(arr, k);
