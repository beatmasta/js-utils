class Graph {

	constructor(points = []) {
  	this.points = points;
  }
  
  set points(points) {
	  this._points = points;
  }
  
  get points() {
	  return this._points;
  }
  
  addPoint(pointObj) {
  	this.points.push(pointObj);
  }
  
  getPointByName(name) {
  	return this.points.find(i => i.name === name);
  }

}

class GraphPoint {

	constructor(name) {
	  this.name = name;
  	this.paths = [];
  }
  
  toString() {
  	return this.name;
  }
  
  set name(name) {
  	this._name = name;
  }
  
  set paths(paths) {
	  this._paths = paths;
  }
  
  get name() {
	  return this._name;
  }
  
  get paths() {
	  return this._paths;
  }
  
  addPath(obj, weight) {
  	this.paths.push({ obj, weight });
  }
  
  hasPathTo(name) {
  	return !!this.paths.find(v => v.obj.name === name);
  }

}

const graph = new Graph();

const A = new GraphPoint('A');
const B = new GraphPoint('B');
const C = new GraphPoint('C');
const D = new GraphPoint('D');
const E = new GraphPoint('E');

A.addPath(B, 12);
A.addPath(D, 2);

B.addPath(A, 12);
B.addPath(C, 10);
B.addPath(D, 4);
B.addPath(E, 4);

C.addPath(B, 10);
C.addPath(E, 10);

D.addPath(A, 2);
D.addPath(B, 4);
D.addPath(E, 2);

E.addPath(B, 4);
E.addPath(C, 10);
E.addPath(D, 2);

graph.addPoint(A);
graph.addPoint(B);
graph.addPoint(C);
graph.addPoint(D);
graph.addPoint(E);

class Dijkstra {

	constructor(graph, sourceVertex) {
  	this.graph = graph;
    this.sourceVertex = sourceVertex;
    this.currentVertex = sourceVertex;
    this.visited = [];
    this.unvisited = [...graph.points.map(v => v.name)];
    this.table = [];
  }
  
  isSourceVertex(name) {
  	return name === this.sourceVertex.name;
  }
  
  run() {
  
  	this.table = this.unvisited.map(vertexName => {
      return { 
      	vertexName, 
        distance: this.isSourceVertex(vertexName) ? 0 : Infinity, 
        previousVertex: null 
      };
    });
    
    const sourceVertexIndex = this.table.findIndex(i => this.isSourceVertex(i.vertexName));
    const sourceVertexFromTable = this.table[0];
    const sourceVertex = this.graph.getPointByName(sourceVertexFromTable.vertexName);
    
    this.walkGraph(sourceVertex, 0);
    
  	return this;
    
  }
  
  checkNeighbor(vertex, neighborVertex, weight) {
  	
    this.table = this.table.map(i => {
    
			if (this.sourceVertex.name !== i.vertexName && neighborVertex.name === i.vertexName && i.distance > weight) {
      	i.previousVertex = vertex.name;
      	i.distance = weight;
      }
      
    	return i;
      
    });
    
    return this;
    
  }
  
  walkGraph(vertex, weight) {
  
	  vertex.paths.forEach(pathNeighborVertex => this.checkNeighbor(vertex, pathNeighborVertex.obj, weight + pathNeighborVertex.weight));
		
    this.visited.push(vertex.name);
    this.unvisited.splice(this.unvisited.findIndex(vName => vName === vertex.name), 1);
    
    if (!this.unvisited.length) return;
    
    const neighborUnvisitedVertexList = vertex.paths.filter(i => !this.visited.includes(i.obj.name));
    const neighborUnvisitedVertexWeightList = neighborUnvisitedVertexList.map(i => i.weight)
    const closestNeighborIndex = neighborUnvisitedVertexWeightList.findIndex(i => i === Math.min(...neighborUnvisitedVertexWeightList));
    const closestNeighbor = neighborUnvisitedVertexList[closestNeighborIndex];
    
		this.walkGraph(closestNeighbor.obj, closestNeighbor.weight + weight);
    
  }
  
  printTable() {
  	console.log(this.table);
  }

}

const dijkstra = new Dijkstra(graph, A);

dijkstra.run().printTable();
