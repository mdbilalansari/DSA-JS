const INPUT = 20;

// Time Complexity: T(n) = T(n-1) + C and T(1) = C
// Time Complexity: T(n) = θ(n)
function fun(n) {
	if (n <= 0) {
		return 0;
	}
	// Some θ(1) operations
	return fun(n - 1);
}

// Time Complexity: T(n) = 2T(n/2) + Cn and T(1) = C
// Time Complexity: T(n) = θ(nlogn)
function fun2(n) {
	if (n <= 0) {
		return 0;
	}

	for (let i = 0; i < n; i++) {
		// Some θ(1) operations
	}

	fun2(Math.floor(n / 2));
	fun2(Math.floor(n / 2));
	return 0;
}

// Time Complexity: T(n) = 2T(n/2) + C and T(1) = C
// Time Complexity: T(n) = θ(n)
function fun3(n) {
	if (n <= 0) {
		return 0;
	}

	// Some θ(1) operations

	fun3(Math.floor(n / 2));
	fun3(Math.floor(n / 2));
	return 0;
}

let n = INPUT;
console.log(fun(n));
console.log(fun2(n));
console.log(fun3(n));

// T(1) = C for all
// T(n) = T(n-1) + C 		=> T(n) = θ(n)
// T(n) = 2T(n-1) + C 		=> T(n) = θ(2^n)
// T(n) = T(n/2) + C		=> T(n) = θ(logn)
// T(n) = 2T(n/2) + C 		=> T(n) = θ(n)
// T(n) = 2T(n/2) + Cn 		=> T(n) = θ(nlogn)
// T(n) = T(n-1) + T(n-2) + C 	=> T(n) = O(2^n) Upper Bound
// T(n) = T(n/4) + T(n/2) + Cn 	=> T(n) = O(n) Upper Bound
