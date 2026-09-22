let INPUT = [1, 2, 2, 1, 5, 5, 8, 3, 3, 2, 2, 5];

// Helper functions
let isOdd = (n) => n % 2;

// Time Complexity: θ(n^2)
function getTwoOddOccuringNumbers(arr) {
	let result = new Set();
	for (let num of arr) {
		let count = arr.reduce((count, n) => (num == n ? count + 1 : count), 0);
		if (isOdd(count)) result.add(num);
	}
	return [...result];
}

// Time Complexity: θ(n)
// Auxiliary Space: θ(1)
function getTwoOddOccuringNumbers2(arr) {
	let XOR = arr.reduce((xor, num) => xor ^ num);
	let rightMostSetBit = XOR & ~(XOR - 1); // 0001 1000 & 1110 1000 = 0000 1000
	let result = arr.reduce(
		(xor, num) => {
			if (num & rightMostSetBit) xor[0] ^= num;
			else xor[1] ^= num;
			return xor;
		},
		[0, 0],
	);

	return result;
}

let arr = INPUT;
console.log(getTwoOddOccuringNumbers(arr));
console.log(getTwoOddOccuringNumbers2(arr));
