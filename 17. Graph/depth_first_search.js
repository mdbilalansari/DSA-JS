'use strict';

const { Graph } = require('./graph');
const { printTree } = require('./utils');

class MyGraph extends Graph {
	DFS(start) {
		if (!this.adj.has(start)) return [];

		const visited = new Set();
		const result = [];

		const traverse = (vertex) => {
			visited.add(vertex);
			result.push(vertex);

			for (const neighbor of this.adj.get(vertex)) {
				if (!visited.has(neighbor)) {
					traverse(neighbor);
				}
			}
		};

		traverse(start);
		return result;
	}

	DFS_Disconnected() {
		const visited = new Set();
		const result = [];
		for (const vertex of this.adj.keys()) {
			if (!visited.has(vertex)) {
				const group = this.DFS(vertex);
				result.push(group);
				group.forEach((v) => visited.add(v));
			}
		}

		return result;
	}

	count_connected_components() {
		return this.DFS_Disconnected().length;
	}

	// DSF as Tree
	DFS_Tree(vertex, visited = new Set()) {
		const root = {
			value: vertex,
			children: [],
		};

		visited.add(vertex);
		for (const neighbor of this.adj.get(vertex)) {
			if (!visited.has(neighbor)) {
				root.children.push(this.DFS_Tree(neighbor, visited));
			}
		}

		return root;
	}

	// Print node DFS
	print_DFS(vertex) {
		let root = this.DFS_Tree(vertex);
		printTree(root);
	}

	// Print all vertex BSF
	print() {
		const visited = new Set();
		for (const vertex of this.adj.keys()) {
			if (!visited.has(vertex)) {
				let root = this.DFS_Tree(vertex, visited);
				printTree(root);
			}
		}
	}
}

const graph1 = new MyGraph([
	[0, 1],
	[1, 2],
	[0, 4],
	[4, 5],
	[4, 6],
]);
graph1.print_DFS(0);
console.log('DFS traversal:', graph1.DFS(0));

const graph2 = new MyGraph([
	[0, 1],
	[0, 2],
	[1, 2],
	[3, 4],
	[3, 5],
	[4, 5],
	[0, 6],
]);
graph2.print();
console.log('DFS traversal of disconnected graph:', graph2.DFS_Disconnected());
console.log('Number of connected components:', graph2.count_connected_components());
