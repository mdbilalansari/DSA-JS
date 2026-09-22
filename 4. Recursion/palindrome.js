'use strict';

const INPUT = 'abcba';

function isPalindrome(str, start = 0, end) {
	end = end ?? str.length - 1;

	if (start >= end) return true;
	if (str[start] != str[end]) return false;

	return isPalindrome(str, start + 1, end - 1);
}

let str = INPUT;
console.log(isPalindrome(str));
