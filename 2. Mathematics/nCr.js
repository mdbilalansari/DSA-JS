const { factorial } = require("./factorial");

const N = 5,
	R = 3;

// Time Complexity: θ(n)
function nCr(n, r) {
	if (r > n) return 0; // nCr is zero when r > n

	return factorial(n) / (factorial(r) * factorial(n - r));
}

// Time Complexity: θ(r)
function nCr_2(n, r) {
	if (r > n) return 0; // nCr is zero when r > n
	if (r > n - r) r = n - r; // Use property nCr = nC(n-r)

	let result = 1;
	for (let i = 0; i < r; ++i) {
		result *= n - i;
		result /= i + 1;
	}
	return result;
}

console.log(nCr(N, R));
console.log(nCr_2(N, R));
