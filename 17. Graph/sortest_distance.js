'use strict';

const { Graph } = require('./graph');
const Queue = require('../Containers/queue');

class MyGraph extends Graph {
	shortest_distance(src) {
		const distances = new Map([[src, 0]]);
		const queue = new Queue([src]);

		while (!queue.empty()) {
			const vertex = queue.pop();
			for (const neighbor of this.adj.get(vertex) || []) {
				if (!distances.has(neighbor)) {
					distances.set(neighbor, distances.get(vertex) + 1);
					queue.push(neighbor);
				}
			}
		}

		this._printDistances(src, distances);
		return distances;
	}

	_printDistances(src, distances) {
		console.log(`Shortest distances from node ${src}:`);
		for (const vertex of this.adj.keys()) {
			console.log(`Node ${vertex}: ${distances.get(vertex) ?? 'Infinity'}`);
		}
	}
}

const edges = [
	[0, 1],
	[0, 2],
	[0, 4],
	[1, 3],
	[2, 3],
	[2, 4],
	[3, 5],
	[4, 5],
];
new MyGraph(edges).shortest_distance(0);

module.exports = { MyGraph };
