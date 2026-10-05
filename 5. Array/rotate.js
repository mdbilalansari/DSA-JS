'use strict';

let arr = [1, 2, 3, 4, 5];

// Time Complexity: O(n)
// Auxiliary Space: O(n)
function leftRotate_declarative(arr, d) {
	const leftArray = arr.slice(0, d);
	const rightArray = arr.slice(d);

	// return [...rightArray, ...leftArray];
	arr.length = 0;
	arr.push(...rightArray, ...leftArray);
}

// ----------------------------------------------------------------------------

// Time Complexity: O(n)
// Auxiliary Space: O(n)
function leftRotate(arr, d) {
	let tempArr = arr.slice();

	for (let i = 0; i < arr.length; i++) {
		arr[i] = tempArr[(i + d) % n];
	}
}

// function rightRotate(arr, d) {
// 	d = d % n;
// 	leftRotate(arr, n - d);
// }

function rightRotate(arr, d) {
	let tempArr = arr.slice();

	for (let i = 0; i < n; i++) {
		arr[(i + d) % n] = tempArr[i];
	}
}

// ----------------------------------------------------------------------------

function gcd(a, b) {
	if (b == 0) return a;
	return gcd(b, a % b);
}

// Time Complexity: O(n)
// Auxiliary Space: O(1)
function leftRotate_2(arr, d) {
	let n = arr.length;
	d = d % n;
	for (let i = 0; i < gcd(n, d); i++) {
		let temp = arr[i];
		let j = (i - d + n) % n;
		while (j != i) {
			[arr[j], temp] = [temp, arr[j]];
			j = (j - d + n) % n;
		}
		[arr[j], temp] = [temp, arr[j]];
	}
}

function rightRotate_2(arr, d) {
	n = arr.length;
	d = d % n;
	for (let i = 0; i < gcd(n, d); i++) {
		let temp = arr[i];
		let j = (i + d) % n;
		while (j != i) {
			[arr[j], temp] = [temp, arr[j]];
			j = (j + d) % n;
		}
		[arr[j], temp] = [temp, arr[j]];
	}
}

// ----------------------------------------------------------------------------

let n = arr.length;
console.log('Left Rotation:');
for (let i = 0; i < n; i++) {
	leftRotate(arr, i);
	console.log(arr);
	leftRotate(arr, n - i);
}

console.log('Left Rotation 2:');
for (let i = 0; i < n; i++) {
	leftRotate_2(arr, i);
	console.log(arr);
	leftRotate_2(arr, n - i);
}

console.log('Right Rotation:');
for (let i = 0; i < n; i++) {
	rightRotate(arr, i);
	console.log(arr);
	rightRotate(arr, n - i);
}

console.log('Right Rotation 2:');
for (let i = 0; i < n; i++) {
	rightRotate_2(arr, i);
	console.log(arr);
	rightRotate_2(arr, n - i);
}
