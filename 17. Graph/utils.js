'use strict';

function printTree(root) {
	console.log(String(root.value));

	root.children.forEach((child, index) => {
		printBranch(child, '', index === root.children.length - 1);
	});
}

function printBranch(node, prefix, isLast) {
	console.log(prefix + (isLast ? '└── ' : '├── ') + node.value);

	const childPrefix = prefix + (isLast ? '    ' : '│   ');

	node.children.forEach((child, index) => {
		printBranch(child, childPrefix, index === node.children.length - 1);
	});
}

module.exports = { printTree };
