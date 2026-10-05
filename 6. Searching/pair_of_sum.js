'use strict';

let arr = [1, 6, 7, 8, 9, 10];
const sum = 17;

// Q. Given a sorted array and a sum. Find if there exists a pair with given sum.
// Time Complexity: O(n)
function pairSum(arr, sum, left = 0, right = arr.length - 1) {
	while (left < right) {
		if (arr[left] + arr[right] == sum) {
			return true;
		} else if (arr[left] + arr[right] < sum) {
			left++;
		} else {
			right--;
		}
	}

	return false;
}

// Q. Given a sorted array and a sum. Find if there exists a triplet with given sum.
// Time Complexity: O(n^2)
function tripletSum(arr, sum) {
	for (let i = 0; i < arr.length - 2; i++) {
		if (pairSum(arr, sum - arr[i], i + 1, arr.length - 1)) {
			return true;
		}
	}
	return false;
}

// Q. Given a SORTED array with UNIQUE elements and a sum. Find count of pairs with given sum.
// Time Complexity: O(n)
function pairCount(arr, sum, left = 0, right = arr.length - 1) {
	let count = 0;
	while (left < right) {
		if (arr[left] + arr[right] == sum) {
			count++;
			left++;
		} else if (arr[left] + arr[right] < sum) {
			left++;
		} else {
			right--;
		}
	}
	return count;
}

// Q. Given a SORTED array with UNIQUE elements and a sum. Find count of triplets with given sum.
// Time Complexity: O(n^2)
function tripletCount(arr, sum) {
	let count = 0;
	for (let i = 0; i < arr.length - 2; i++) {
		count += pairCount(arr, sum - arr[i], i + 1, arr.length - 1);
	}
	return count;
}

// Q. Given a sorted array and a sum. Find count of pair with given sum.
// Time Complexity: O(n)
function pairCount_2(arr, sum, left = 0, right = arr.length - 1) {
	let count = 0;
	// Use two pointers to find pairs
	while (left < right) {
		let currentSum = arr[left] + arr[right];
		if (currentSum == sum) {
			// Count how many times arr[left] and arr[right] appear in valid pairs
			let leftCount = 1,
				rightCount = 1;

			// Count duplicates of arr[left]
			while (left + 1 < right && arr[left] == arr[left + 1]) {
				leftCount++;
				left++;
			}

			// Count duplicates of arr[right]
			while (right - 1 > left && arr[right] == arr[right - 1]) {
				rightCount++;
				right--;
			}

			// Add valid pair combinations
			count += leftCount * rightCount;

			// Move both pointers inward
			left++;
			right--;
		} else if (currentSum < sum) {
			left++;
		} else {
			right--;
		}
	}

	return count;
}

// Q. Given a sorted array and a sum. Find count of triplets with given sum.
// Time Complexity: O(n^2)
function tripletCount_2(arr, sum) {
	let count = 0;
	for (let i = 0; i < arr.length - 2; i++) {
		count += pairCount_2(arr, sum - arr[i], i + 1, arr.length - 1);
	}
	return count;
}

// Q. Given a sorted array find if there exists a triplet such that a^2 + b^2 = c^2
// Time Complexity: O(n^2)
function isPythagoreanTriplet(arr) {
	let a, b, c, left, right;
	for (let i = arr.length - 1; i >= 2; i--) {
		c = arr[i];
		left = 0;
		right = i - 1;
		while (left < right) {
			a = arr[left];
			b = arr[right];
			if (a * a + b * b == c * c) {
				return true;
			} else if (a * a + b * b < c * c) {
				left++;
			} else {
				right--;
			}
		}
	}
	return false;
}

console.log('Is there a pair with given sum:', pairSum(arr, sum));
console.log('Is there a triplet with given sum:', tripletSum(arr, sum));
console.log('Count of pairs with given sum:', pairCount(arr, sum));
console.log('Count of triplets with given sum:', tripletCount(arr, sum));
console.log('Count of pairs with given sum:', pairCount_2(arr, sum));
console.log('Count of triplets with given sum:', tripletCount_2(arr, sum));
console.log('Is there a pythagorean triplet:', isPythagoreanTriplet(arr));
