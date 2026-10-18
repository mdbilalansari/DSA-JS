'use strict';

const arr = [10, 20, 20, 10, 10, 20, 5, 20];

// Time Complexity: O(n)
// Auxiliary Space Complexity: O(n)
function frequency(arr) {
	const map = new Map();
	arr.forEach((num) => {
		if (map.has(num)) map.set(num, map.get(num) + 1);
		else map.set(num, 1);
	});
	return map;
}

// Time Complexity: O(n)
// Auxiliary Space Complexity: O(n)
function frequency_in_order(arr) {
	const map = frequency(arr);

	console.log('Frequency in order:');
	arr.forEach((num) => {
		if (map.get(num)) {
			console.log(num, '=>', map.get(num));
			map.delete(num);
		}
	});
}

const map = frequency(arr);
console.log(map);
frequency_in_order(arr);
