const INPUT = 10;

// Time Complexity: O(2^n)
// Space Complexity: θ(n)
// Auxiliary Space Complexity: θ(n)
function fib(n) {
	if (n <= 1) {
		return n;
	}

	return fib(n - 1) + fib(n - 2);
}

// Time Complexity: θ(n)
// Space Complexity: θ(n)
// Auxiliary Space Complexity: θ(n)
function fib2(n) {
	let arr = [0, 1];
	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}
	return arr[n];
}

// Time Complexity: θ(n)
// Space Complexity: θ(1)
// Auxiliary Space Complexity: θ(1)
function fib3(n) {
	let a = 0,
		b = 1;
	if (n == 0) return a;
	for (let i = 1; i < n; i++) {
		[b, a] = [a + b, b];
	}
	return b;
}

let n = INPUT;
console.log(fib(n));
console.log(fib2(n));
console.log(fib3(n));
