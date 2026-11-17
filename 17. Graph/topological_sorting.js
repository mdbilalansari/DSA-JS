'use strict';

const { Graph } = require('./directed_graph');
const Queue = require('../Containers/queue');

class MyGraph extends Graph {
	topologicalSort() {
		// Calculate Indegree of each vertex
		const indegree = new Map();
		for (const vertex of this.adj.keys()) {
			indegree.set(vertex, 0);
		}
		for (const neighbors of this.adj.values()) {
			for (const neighbor of neighbors) {
				indegree.set(neighbor, indegree.get(neighbor) + 1);
			}
		}

		// Queue of 0 degree vertex
		const queue = new Queue();
		for (const [vertex, degree] of indegree) {
			if (degree === 0) {
				queue.push(vertex);
			}
		}

		const result = [];
		while (!queue.empty()) {
			const vertex = queue.pop();
			result.push(vertex);

			for (const neighbor of this.adj.get(vertex) || []) {
				indegree.set(neighbor, indegree.get(neighbor) - 1);
				if (indegree.get(neighbor) === 0) {
					queue.push(neighbor);
				}
			}
		}

		if (result.length !== this.adj.size) {
			throw new Error('Topological sort is not defined for a graph with a cycle.');
		}

		return result;
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
