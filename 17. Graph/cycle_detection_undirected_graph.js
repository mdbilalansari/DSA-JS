'use strict';

const { Graph } = require('./graph');
const Queue = require('../Containers/queue');

class MyGraph extends Graph {
	_isCyclicDFS(start, visited, parent = null) {
		visited.add(start);
		for (const neighbor of this.adj.get(start) || []) {
			if (neighbor === parent) continue;

			if (visited.has(neighbor)) return true;
			if (this._isCyclicDFS(neighbor, visited, start)) return true;
		}
		return false;
	}

	_isCyclicBFS(start, visited) {
		const queue = new Queue([[start, null]]); // [vertex, parent]
		visited.add(start);

		while (!queue.empty()) {
			const [current, parent] = queue.pop();

			for (const neighbor of this.adj.get(current) || []) {
				if (neighbor === parent) continue;
				if (visited.has(neighbor)) return true;

				visited.add(neighbor);
				queue.push([neighbor, current]);
			}
		}

		return false;
	}

	isCyclic() {
		const visited = new Set();
		for (const vertex of this.adj.keys()) {
			if (!visited.has(vertex)) {
				if (this._isCyclicBFS(vertex, visited)) return true;
				// if (this._isCyclicDFS(vertex, visited)) return true;
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

graph.print();
console.log(`Cyclic: ${graph.isCyclic() ? 'Yes' : 'No'}`);

module.exports = { MyGraph };
