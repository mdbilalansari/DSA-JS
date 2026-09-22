const { GCD } = require("./HCF");

const A = 10,
	B = 24;

// Time Complexity: O(log(min(a,b)))
const LCM = (a, b) => (a * b) / GCD(a, b);

console.log(LCM(A, B));
