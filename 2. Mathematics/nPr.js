const { factorial } = require("./factorial");

const N = 5,
	R = 3;

// Time Complexity: O(n)
function nPr(n, r) {
	if (r > n) return 0; // nPr is zero when r > n

	return factorial(n) / factorial(n - r);
}

// Time Complexity: O(r)
function nPr_2(n, r) {
	if (r > n) return 0; // nPr is zero when r > n

	let result = 1;
	for (let i = 0; i < r; i++) {
		result *= n - i;
	}
	return result;
}

console.log(nPr(N, R));
console.log(nPr_2(N, R));
