const INPUT = 10;

// Time Complexity: O(1)
const sum = (n) => (n * (n + 1)) / 2;

// Time Complexity: O(n)
function sum2(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

// Time Complexity: O(n^2)
function sum3(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			sum++;
		}
	}
	return sum;
}

let n = INPUT;
console.log(sum(n));
console.log(sum2(n));
console.log(sum3(n));
