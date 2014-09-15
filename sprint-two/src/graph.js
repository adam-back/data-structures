var Graph = function(){
  this.web = {};
  this.size = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  //add newNode to web at key of newNode
  this.web[newNode] = {"edges": []};
  this.size++;
  //if the size is 2
  if(this.size === 2) {
    //iterate through web
    for(var key in this.web) {
      //add edge between first key's node and newNode
      this.addEdge(key, newNode);
      break;
    }
  } else if (toNode) {
    this.addEdge(newNode, toNode);
  }


  //Problem -- nodes list themselves as edges.. is that a big deal?
  //fixed problem -AB
};

Graph.prototype.contains = function(node){
  //iterate through web using for-in
  for(var key in this.web) {
    //if key matches node
    if(key === node) {
      //return true
      return true;
    }
  }
  //(through the for loop completely) return false
  return false;
};

Graph.prototype.removeNode = function(node){
  var edges = this.web[node]["edges"];
  if(edges) {
    for(var i = 0; i < edges.length; i++) {
      this.removeEdge(node, edges[i]);
    }
  }
  delete this.web[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var edgesList = this.web[fromNode]["edges"];
  if(edgesList === []) {
    return false;
  }
  for(var i = 0; i < edgesList.length; i++) {
    if(edgesList[i]===toNode) {
      return true;
    }
  }
  return false;

};

Graph.prototype.addEdge = function(fromNode, toNode){
  //add edge fromNome --> toNode
  var edges = this.web[fromNode]["edges"];
  edges.push(toNode);
  this.web[fromNode] = {"edges": edges};

  //add edge toNode -->fromNode
  edges = this.web[toNode]["edges"];
  edges.push(fromNode);
  this.web[toNode] = {"edges": edges};
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromEdges = this.web[fromNode]["edges"];
  var toEdges = this.web[toNode]["edges"]
  fromEdges.splice(fromEdges.indexOf(toNode), 1);
  toEdges.splice(toEdges.indexOf(fromNode), 1);

  //replace back in nodes if there are still edges
  if(fromEdges.length === 0) {
    this.removeNode(fromNode);
  } else {
    this.web[fromNode] = {"edges": fromEdges}
  }

  if(toEdges.length === 0) {
    this.removeNode(toNode);
  } else {
    this.web[toNode] = {"edges": toEdges}
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
