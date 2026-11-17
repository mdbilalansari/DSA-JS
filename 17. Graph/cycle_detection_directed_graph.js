'use strict';

const { Graph } = require('./directed_graph');

class MyGraph extends Graph {
	_isCyclic(start, visited, path) {
		visited.add(start);
		path.add(start);
		for (const neighbor of this.adj.get(start) || []) {
			if (path.has(neighbor)) return true;
			if (!visited.has(neighbor)) {
				if (this._isCyclic(neighbor, visited, path)) return true;
			}
		}
		path.delete(start);
		return false;
	}

	isCyclic() {
		const visited = new Set();
		const path = new Set();
		for (const vertex of this.adj.keys()) {
			if (!visited.has(vertex) && this._isCyclic(vertex, visited, path)) {
				return true;
			}
		}
		return false;
	}
}

const graph = new MyGraph([
	[0, 1],
	[0, 2],
	[2, 3],
	[2, 4],
	[4, 5],
	[6, 7],
	[7, 8],
	[8, 9],
	[9, 6],
]);
console.log(`Cyclic: ${graph.isCyclic() ? 'Yes' : 'No'}`);
