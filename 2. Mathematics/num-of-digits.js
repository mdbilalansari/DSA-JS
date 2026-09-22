const INPUT = 12345;

// Time Complexity: θ(logn)
function num_of_digits(n) {
	let count = 0;
	while (n != 0) {
		n = Math.floor(n / 10);
		count++;
	}
	return count;
}

// Time Complexity: θ(logn)
// Auxiliary Space Complexity: θ(logn)
function num_of_digits2(n) {
	if (n == 0) {
		return 0;
	}
	return 1 + num_of_digits2(Math.floor(n / 10));
}

// Time Complexity: θ(1)
function num_of_digits3(n) {
	if (n == 0) {
		return 0;
	}
	n = Math.abs(n);
	return Math.floor(Math.log10(n)) + 1;
}

let n = INPUT;
console.log(num_of_digits(n));
console.log(num_of_digits2(n));
console.log(num_of_digits3(n));
