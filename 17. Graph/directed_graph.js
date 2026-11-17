'use strict';

// ------------------------ Directed Graph ------------------------
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

		for (const [_, edgeSet] of this.adj) {
			edgeSet.delete(vertex);
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
	}

	removeEdge(u, v) {
		this.adj.get(u)?.delete(v);
	}

	hasEdge(u, v) {
		return this.adj.get(u)?.has(v) ?? false;
	}

	outDegree(vertex) {
		return this.adj.get(vertex)?.size ?? 0;
	}

	inDegree(vertex) {
		let count = 0;

		for (const [_, edgeSet] of this.adj) {
			if (edgeSet.has(vertex)) count++;
		}

		return count;
	}

	vertexCount() {
		return this.adj.size;
	}

	edgeCount() {
		let count = 0;

		for (const neighbors of this.adj.values()) {
			count += neighbors.size;
		}

		return count;
	}

	print() {
		for (const [vertex, neighbors] of this.adj) {
			console.log(`${vertex} -> ${[...neighbors].join(', ')} `);
		}
	}
}

module.exports = { Graph };
