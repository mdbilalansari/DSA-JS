const INPUT = 20;

function fun(n) {
	const c = 2;

	// 1 Time Complexity: θ(n)
	for (let i = 0; i < n; i = i + c) {
		// Some θ(1) operations
	}

	// 2 Time Complexity: θ(n)
	for (let i = n; i > 0; i = i - c) {
		// Some θ(1) operations
	}

	// 3 Time Complexity: θ(logn)
	for (let i = 1; i < n; i = i * c) {
		// Some θ(1) operations
	}

	// 4 Time Complexity: θ(logn)
	for (let i = n; i > 0; i = i / c) {
		// Some θ(1) operations
	}

	// 5 Time Complexity: θ(loglogn)
	for (let i = 2; i < n; i = Math.pow(i, c)) {
		// Some θ(1) operations
	}

	return 0;
}

// Time Complexity: θ(n)
function fun2(n) {
	// Some θ(1) operations
	// Some θ(n) operations
	// Some θ(logn) operations
	return 0;
}

// Time Complexity: θ(n^2)
function fun3(n) {
	for (let i = 0; i < n; i++) {
		// Some θ(n) operations
	}
	return 0;
}

let n = INPUT;
console.log(fun(n));
console.log(fun2(n));
console.log(fun3(n));
