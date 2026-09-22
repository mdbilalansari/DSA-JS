// Positive input
const A = 12,
	B = 16;

// Time Complexity: O(min(a,b))
function HCF(a, b) {
	if (a == 0) return b;
	if (b == 0) return a;

	while (a != b) {
		if (a > b) {
			a = a - b;
		} else {
			b = b - a;
		}
	}
	return a;
}

// Time Complexity: O(log(min(a,b)))
function GCD(a, b) {
	while (b != 0) {
		[a, b] = [b, a % b];
	}
	return a;
}

if (require.main == module) {
	console.log(HCF(A, B));
	console.log(GCD(A, B));
}

module.exports = { GCD };
