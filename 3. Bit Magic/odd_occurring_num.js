'use strict';

let INPUT = [1, 2, 2, 1, 5, 5, 8, 3, 3, 2, 2];

let isOdd = (n) => n % 2;

// Time Complexity: θ(n^2)
function getOddOccuringNumber(arr) {
	for (let num of arr) {
		let count = arr.reduce((count, n) => (num == n ? count + 1 : count), 0);
		if (isOdd(count)) return num;
	}
	return -1;
}

// Time Complexity: θ(n)
function getOddOccuringNumber2(arr) {
	return arr.reduce((res, num) => res ^ num, 0);
}

// Given an array of n number that has value in range [1, n+1]. Every number appears exactly once.
// Hence, one number is missing. Find the missing number.
function getMissingNumber(arr) {
	let res = arr.reduce((res, num) => res ^ num, 0);
	for (let i = 1; i <= arr.length + 1; i++) {
		res ^= i;
	}
	return res;
}

// Time Complexity: θ(n)
function getMissingNumber2(arr) {
	let n = arr.length;
	let total = ((n + 1) * (n + 2)) / 2;
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += arr[i];
	}
	return total - sum;
}

let arr = INPUT;
console.log(getOddOccuringNumber(arr));
console.log(getOddOccuringNumber2(arr));

let arr2 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
console.log(getMissingNumber(arr2));
console.log(getMissingNumber2(arr2));
