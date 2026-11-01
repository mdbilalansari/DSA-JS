'use strict';

const { BinaryTree } = require('./binary_tree');

const tree = new BinaryTree([10, 5, 15, 3, 7, 13, 18, 1, 6, 8, 4]);

tree.print();
console.log('Inorder:', [...tree.inorder()].join(', '));
console.log('Preorder:', [...tree.preorder()].join(', '));
console.log('Postorder:', [...tree.postorder()].join(', '));
