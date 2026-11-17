'use strict';

// ------------------------ Directed Weighted Graph ------------------------
// Map<
//     Vertex,
//     Map<Neighbor, Weight>
// >

class Graph {
	adj = new Map();

	constructor(edges = []) {
		for (const [u, v, weight] of edges) {
			this.addEdge(u, v, weight);
		}
	}

	addVertex(vertex) {
		if (!this.adj.has(vertex)) {
			this.adj.set(vertex, new Map());
		}
	}

	removeVertex(vertex) {
		if (!this.adj.has(vertex)) return;

		for (const [_, edgeMap] of this.adj) {
			edgeMap.delete(vertex);
		}

		this.adj.delete(vertex);
	}

	hasVertex(vertex) {
		return this.adj.has(vertex);
	}

	addEdge(u, v, weight) {
		if (u === v) return;

		this.addVertex(u);
		this.addVertex(v);

		this.adj.get(u).set(v, weight);
	}

	removeEdge(u, v) {
		this.adj.get(u)?.delete(v);
	}

	hasEdge(u, v) {
		return this.adj.get(u)?.has(v) ?? false;
	}

	edgeWeight(u, v) {
		return this.adj.get(u)?.get(v);
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
			const edges = [...neighbors].map(([v, w]) => `[${v}, ${w}]`).join(', ');
			console.log(`${vertex} -> ${edges}`);
		}
	}
}

module.exports = { Graph };
