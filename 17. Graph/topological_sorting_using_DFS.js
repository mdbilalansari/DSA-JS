'use strict';

const { Graph } = require('./directed_graph');
const Stack = require('../Containers/stack');

class MyGraph extends Graph {
	_DFS(vertex, visited, path, stack) {
		visited.add(vertex);
		path.add(vertex);

		for (const neighbor of this.adj.get(vertex) || []) {
			// Cycle detected
			if (path.has(neighbor)) {
				throw new Error('Graph contains a cycle');
			}

			if (!visited.has(neighbor)) {
				this._DFS(neighbor, visited, path, stack);
			}
		}

		path.delete(vertex);
		stack.push(vertex);
	}

	topologicalSort() {
		const visited = new Set();
		const path = new Set();
		const stack = new Stack();

		for (const vertex of this.adj.keys()) {
			if (!visited.has(vertex)) {
				this._DFS(vertex, visited, path, stack);
			}
		}

		return [...stack];
	}
}

const graph = new MyGraph([
	[0, 1],
	[0, 2],
	[1, 3],
	[2, 3],
	[3, 4],
	[4, 5],
	[6, 3],
	[4, 7],
	[7, 9],
	[8, 7],
]);
graph.print();
console.log('Topological sort:', graph.topologicalSort());
