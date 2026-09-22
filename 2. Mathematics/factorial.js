// Small positive input
const INPUT = 10;

// Time Complexity: θ(n)
function factorial_iterative(n) {
	let result = 1;
	for (let i = 1; i <= n; ++i) {
		result *= i;
	}
	return result;
}

// Time Complexity: θ(n)
// Space Complexity: θ(n)
function factorial_recursive(n) {
	if (n == 0) {
		return 1;
	}
	return n * factorial_recursive(n - 1);
}

if (require.main == module) {
	let n = INPUT;
	console.log(factorial_iterative(n));
	console.log(factorial_recursive(n));
}

module.exports = {
	factorial: factorial_iterative,
};
