const INPUT = 6;

// Time Complexity: O(2^n)
function fibonacci(n) {
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = INPUT;
console.log(fibonacci(n));
