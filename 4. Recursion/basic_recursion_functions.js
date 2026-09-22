const INPUT = 5;

function sum(n) {
	if (n == 0) return 0;
	return n + sum(n - 1);
}

function fact(n) {
	if (n == 0) return 1;
	return n * fact(n - 1);
}

// factorial tail recursive
function fact2(n, result = 1) {
	if (n == 0) return result;
	return fact2(n - 1, n * result);
}

// Prints from 1 to n
function print(n) {
	if (n == 0) return;

	print(n - 1);
	process.stdout.write(n + ' ');
}

// Prints from 1 to n (Tail Recursive)
function print4(n, i = 1) {
	if (n == 0) return;

	process.stdout.write(i + ' ');
	print4(n - 1, i + 1);
}

// Prints from n to 1
function print2(n) {
	if (n == 0) return;

	process.stdout.write(n + ' ');
	print2(n - 1);
}

// Prints from n to 1 and 1 to n
function print3(n) {
	if (n == 0) return;

	process.stdout.write(n + ' ');
	print3(n - 1);
	process.stdout.write(n + ' ');
}

let n = INPUT;
console.log(sum(n));
console.log(fact(n));
console.log(fact2(n), 'Tail Rcursive');

print(n);
console.log();
print4(n);
console.log('Tail Recursive');

print2(n);
console.log();
print3(n);
console.log();
