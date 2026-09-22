const str = 'abc';

// Time Complexity: θ(n)
function printSubset(str, bitMap) {
	let n = str.length;
	let subset = '';
	for (let i = 0; i < n; i++) {
		// If the i-th bit of bitMap is set, include str[i] in this subset
		if (bitMap & (1 << i)) {
			subset = subset.concat(str[i]);
		}
	}
	return subset;
}

// Time Complexity: θ(n2^n)
function printPowerSet(str) {
	let powerSet = [];
	let n = str.length;
	let powSize = 1 << n; // 2^n
	for (let counter = 0; counter < powSize; counter++) {
		powerSet.push(printSubset(str, counter));
	}
	return powerSet;
}

console.log(printPowerSet(str));
