'use strict';

const { Graph } = require('./graph');
const Queue = require('../Containers/queue');
const { printTree } = require('./utils');

class MyGraph extends Graph {
	BFS(start) {
		if (!this.adj.has(start)) return [];

		const queue = new Queue([start]);
		const visited = new Set([start]);
		const result = [];

		while (!queue.empty()) {
			const current = queue.pop();
			result.push(current);

			for (const neighbor of this.adj.get(current)) {
				if (!visited.has(neighbor)) {
					queue.push(neighbor);
					visited.add(neighbor);
				}
			}
		}

		return result;
	}

	BFS_Disconnected() {
		const visited = new Set();
		const result = [];
		for (const vertex of this.adj.keys()) {
			if (!visited.has(vertex)) {
				const group = this.BFS(vertex);
				result.push(group);
				group.forEach((v) => visited.add(v));
			}
		}

		return result;
	}

	count_connected_components() {
		return this.BFS_Disconnected().length;
	}

	// BSF as Tree
	BFS_Tree(start, visited = new Set()) {
		const root = { value: start, children: [] };

		visited.add(start);
		const queue = new Queue([start]);

		const treeNodes = new Map();
		treeNodes.set(start, root);

		while (!queue.empty()) {
			const vertex = queue.pop();
			const parentNode = treeNodes.get(vertex);

			for (const neighbor of this.adj.get(vertex)) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push(neighbor);

					const childNode = { value: neighbor, children: [] };
					parentNode.children.push(childNode);
					treeNodes.set(neighbor, childNode);
				}
			}
		}

		return root;
	}

	// Print node BFS
	print_BFS(vertex) {
		let root = this.BFS_Tree(vertex);
		printTree(root);
	}

	// Print all vertex BSF
	print() {
		const visited = new Set();
		for (const vertex of this.adj.keys()) {
			if (!visited.has(vertex)) {
				let root = this.BFS_Tree(vertex, visited);
				printTree(root);
			}
		}
	}
}

const graph1 = new MyGraph([
	[1, 0],
	[0, 2],
	[0, 5],
	[1, 3],
	[2, 4],
	[3, 5],
]);
graph1.print_BFS(0);
console.log('BFS traversal:', graph1.BFS(0));

const graph2 = new MyGraph([
	[0, 1],
	[0, 2],
	[1, 3],
	[2, 3],
	[4, 5],
	[4, 6],
	[5, 6],
]);
graph2.print();
console.log('BFS traversal:', graph2.BFS_Disconnected(0));
console.log('Number of connected components:', graph2.count_connected_components());
