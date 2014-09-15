var Graph = function(){
  this.web = {};
  this.size = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  //add newNode to web at key of newNode

  this.web[newNode] = newNode;
  this.web[newNode.edges] = [];

  this.size++;
  //if the size is 2
  if(this.size === 2) {
    //iterate through web
    for(var key in this.web) {
      //add edge between first key's node and newNode
      if(key!==newNode) {
        this.web[key.edges].push(newNode);
        //add edge between new node and first key's node
        this.web[newNode.edges].push(key);

      }
      break;
    }
  } else if (toNode) {
    this.addEdge(newNode, toNode);
  }


  //Problem -- nodes list themselves as edges.. is that a big deal?
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
  delete this.web[node];
  if(this.web[node.edges]){
    this.removeEdge(node, this.web[node.edges]);
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var edgesList = this.web[fromNode.edges];
  if(edgesList===undefined) {
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
  this.web[fromNode.edges].push(toNode);
  this.web[toNode.edges].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var toIndex = this.web[fromNode.edges].indexOf(toNode);
  var fromIndex = this.web[toNode.edges].indexOf(fromNode);
  delete this.web[fromNode.edges][toIndex];
  delete this.web[toNode.edges][fromIndex];

  if(this.web[fromNode.edges]) {
    delete this.web[fromNode];

  } else if(!this.web[toNode.edges]) {

    this.web[toNode]=null;
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
