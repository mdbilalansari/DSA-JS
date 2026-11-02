const { BinarySearchTree } = require('./binary_search_tree');

function fixArray(array) {
	let first = -1;
	let second = -1;
	let previous = 0;

	for (let i = 1; i < array.length; i += 1) {
		if (array[i] < array[previous]) {
			if (first === -1) first = previous;
			second = i;
		}
		previous = i;
	}

	if (first !== -1 && second !== -1) {
		[array[first], array[second]] = [array[second], array[first]];
	}
}

function __fixBST(root, state) {
	if (root === null) return;

	__fixBST(root.left, state);
	if (state.prev !== null && root.value < state.prev.value) {
		if (state.first === null) state.first = state.prev;
		state.second = root;
	}
	state.prev = root;
	__fixBST(root.right, state);
}

function fixBST(root) {
	const state = { prev: null, first: null, second: null };
	__fixBST(root, state);
	if (state.first !== null && state.second !== null) {
		[state.first.value, state.second.value] = [state.second.value, state.first.value];
	}
}

const array = [18, 3, 4, 5, 6, 7, 8, 10, 13, 15, 1];
fixArray(array);
console.log(array);

const tree = new BinarySearchTree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

const node1 = tree.root.left.left.left;
const node2 = tree.root.right.right;
[node1.value, node2.value] = [node2.value, node1.value];

console.log('Tree:');
tree.print();

fixBST(tree.root);
console.log('Tree:');
tree.print();
