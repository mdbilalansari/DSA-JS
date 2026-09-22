'use strict';

// Function to print the binary representation of an integer
function printBinary(n) {
	let binaryStr = BigInt(n).toString(2).padStart(32, '0');
	binaryStr = binaryStr.replace(/(.{4})/g, '$1 ');

	console.log(binaryStr);
}

module.exports = {
	printBinary,
};
