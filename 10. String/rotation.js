'use strict';

const str1 = 'geeksforgeeks';
const str2 = 'forgeeksgeeks';

// Time Complexity: O(N)
function isRotation(str1, str2) {
	if (str1.length != str2.length) return false;
	const temp = str1 + str1;
	return temp.includes(str2);
}

console.log(isRotation(str1, str2));
