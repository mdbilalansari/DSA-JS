'use strict';

const { Graph } = require('./directed_graph');
const Queue = require('../Containers/queue');

class MyGraph extends Graph {
	isCyclic() {
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

		let visitedCount = 0;
		while (!queue.empty()) {
			const vertex = queue.pop();
			visitedCount++;
			for (const neighbor of this.adj.get(vertex) || []) {
				indegree.set(neighbor, indegree.get(neighbor) - 1);
				if (indegree.get(neighbor) === 0) {
					queue.push(neighbor);
				}
			}
		}
		return visitedCount !== this.adj.size;
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
