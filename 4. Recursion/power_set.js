'use strict';

const INPUT = 'ABC';

function powerSet(str) {
	if (str.length <= 0) return [''];

	let power_set = powerSet(str.substr(1));
	let include_first_char = power_set.map((s) => s + str[0]);

	return power_set.concat(include_first_char);
}

function printPowerSet(str, current = '', i = 0) {
	if (i == str.length) return console.log(current);
	printPowerSet(str, current, i + 1);
	printPowerSet(str, current + str[i], i + 1);
}

let str = 'ABC';
let n = 10;
console.log(powerSet(str));
printPowerSet(str);
