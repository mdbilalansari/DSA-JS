'use strict';

const arr = [34, 23, 56, 23, 53, 25, 74, 75, 43, 64, 75, 34, 64, 46, 35, 65, 34, 75, 34, 23];

function bucketSort(arr, k = Math.floor(arr.length / 10)) {
	const max = Math.max(...arr) + 1;
	const buckets = new Array(k).fill(null).map(() => []);

	// putting elements in buckets
	arr.forEach((num) => {
		let bucketIndex = Math.floor((num * k) / max);
		buckets[bucketIndex].push(num);
	});

	// sorting each bucket
	buckets.forEach((bucket) => bucket.sort((a, b) => a - b));

	// copying elements from buckets
	buckets.flat().forEach((num, index) => (arr[index] = num));
}

bucketSort(arr);
console.log(arr);
