const INPUT = 10;
let INPUT_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Space Complexity: θ(1)
// Auxiliary Space Complexity: θ(1)
const sum = (n) => (n * (n + 1)) / 2;

// Space Complexity: θ(1)
// Auxiliary Space Complexity: θ(1)
function sum2(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

// Space Complexity: θ(n)
// Auxiliary Space Complexity: θ(1)
function sum3(arr) {
	return arr.reduce((sum, n) => sum + n);
}

let n = INPUT;
console.log(sum(n));
console.log(sum2(n));

let arr = INPUT_ARRAY;
console.log(sum3(arr));
