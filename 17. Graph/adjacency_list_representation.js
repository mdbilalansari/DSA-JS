'use strict';

// ------------------------ Undirected Graph ------------------------
// Map<
//     Vertex,
//     Set<Neighbor>
// >

class Graph {
	adj = new Map();

	constructor(edges = []) {
		for (const [u, v] of edges) {
			this.addEdge(u, v);
		}
	}

	addVertex(vertex) {
		if (!this.adj.has(vertex)) {
			this.adj.set(vertex, new Set());
		}
	}

	removeVertex(vertex) {
		if (!this.adj.has(vertex)) return;

		for (const neighbor of this.adj.get(vertex)) {
			this.adj.get(neighbor)?.delete(vertex);
		}

		this.adj.delete(vertex);
	}

	hasVertex(vertex) {
		return this.adj.has(vertex);
	}

	addEdge(u, v) {
		if (u === v) return;

		this.addVertex(u);
		this.addVertex(v);

		this.adj.get(u).add(v);
		this.adj.get(v).add(u);
	}

	removeEdge(u, v) {
		this.adj.get(u)?.delete(v);
		this.adj.get(v)?.delete(u);
	}

	hasEdge(u, v) {
		return this.adj.get(u)?.has(v) ?? false;
	}

	degree(vertex) {
		return this.adj.get(vertex)?.size ?? 0;
	}

	vertexCount() {
		return this.adj.size;
	}

	edgeCount() {
		let count = 0;

		for (const neighbors of this.adj.values()) {
			count += neighbors.size;
		}

		return count / 2;
	}

	print() {
		for (const [vertex, neighbors] of this.adj) {
			console.log(`${vertex} -> ${[...neighbors].join(', ')}`);
		}
	}
}

if (require.main === module) {
	const graph = new Graph();
	graph.addEdge(0, 1);
	graph.addEdge(0, 2);
	graph.addEdge(1, 2);
	graph.addEdge(2, 0);
	graph.addEdge(2, 3);
	graph.print();
	console.log('Vertix Count:', graph.vertexCount());
	console.log('Edge Count:', graph.edgeCount());
}

module.exports = { Graph };
