'use strict';

const INPUT = 10;

// Time Complexity: O(2^n)
function towerOfHanoi(n, A, C, B /* auxiliary */) {
	if (n == 1) return console.log(`Move disk 1 from rod ${A} to rod ${C}`);

	// Move n-1 disks from A to B using C as an auxiliary rod
	towerOfHanoi(n - 1, A, B, C);
	console.log(`Move disk ${n} from rod ${A} to rod ${C}`);
	// Move n-1 disks from B to C using A as an auxiliary rod
	towerOfHanoi(n - 1, B, C, A);
}

let n = INPUT;
towerOfHanoi(n, 'A', 'C', 'B');
