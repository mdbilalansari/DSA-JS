'use strict';

const { Graph } = require('./directed_weighted_graph');
const Queue = require('../Containers/queue');

class MyGraph extends Graph {
	topologicalSort() {
		// Calculate Indegree of each vertex
		const indegree = new Map();
		for (const vertex of this.adj.keys()) {
			indegree.set(vertex, 0);
		}
		for (const neighbors of this.adj.values()) {
			for (const [neighbor] of neighbors) {
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

			for (const [neighbor] of this.adj.get(vertex) || []) {
				indegree.set(neighbor, indegree.get(neighbor) - 1);
				if (indegree.get(neighbor) === 0) {
					queue.push(neighbor);
				}
			}
		}

		if (result.length !== this.adj.size) {
			throw new Error('Shortest paths in a directed acyclic graph require an acyclic graph.');
		}

		return result;
	}

	shortest_distance(src) {
		if (!this.adj.has(src)) throw new RangeError(`Source vertex ${src} is not in the graph.`);

		const distances = new Map([...this.adj.keys()].map((vertex) => [vertex, Infinity]));

		distances.set(src, 0);
		for (const vertex of this.topologicalSort()) {
			if (distances.get(vertex) === Infinity) continue;

			for (const [neighbor, weight] of this.adj.get(vertex)) {
				distances.set(neighbor, Math.min(distances.get(neighbor), distances.get(vertex) + weight));
			}
		}

		return distances;
	}
}

const src = 4;
const graph = new MyGraph([
	[0, 1, 2],
	[0, 4, 1],
	[1, 2, 3],
	[4, 2, 2],
	[2, 3, 6],
	[4, 5, 4],
	[5, 3, 1],
]);

console.log('Topological sort:', graph.topologicalSort().join(', '));

const sortestDistances = graph.shortest_distance(src);
console.log(`Shortest distances from node ${src}:`);
for (const [vertex, distance] of sortestDistances.entries()) {
	console.log(`Node ${vertex} =>`, distance);
}

/*
0
├──(2)──> 1
│         │
│         └──(3)──> 2 ───(6)──> 3
│
└──(1)──> 4
					├──(2)──> 2
					│
					└──(4)──> 5 ───(1)──> 3
*/
