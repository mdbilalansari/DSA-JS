'use strict';

const n = 7;
const k = 3;

// Time Complexity: θ(n)
function josephus_problem(n, k) {
	if (n == 1) return 0;
	return (josephus_problem(n - 1, k) + k) % n;
}

console.log(josephus_problem(n, k));
