var Graph = function(){
  this.web = {};
  this.size = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  //add newNode to web at key of newNode
  var edges = 'edges';
  console.log('ra', newNode[edges]);
  this.web[newNode] = newNode;
  this.web[newNode][edges] = [];
  this.size++;
  //if the size is 2
  if(this.size === 2) {
    //iterate through web
    for(var key in this.web) {
      //add edge between first key's node and newNode
      console.log('a', this.web[key.edges]);
      this.web[key.edges].push(newNode);
      console.log('key egges', this.web[key.edges]);
      //add edge between new node and first key's node
      this.web[newNode.edges].push(key);
      this.web[newNode.edges].splice(0, 1);
      console.log('newNOde edges', this.web[newNode.edges]);
      break;
    }
  } else if (toNode) {
  //else if toNode is defined
    //add edge between newNode and toNode nodes (both)
    addEdge(newNode, toNode);
  }
  console.log('web', this.web);
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
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
