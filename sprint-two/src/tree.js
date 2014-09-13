var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
    this.value = value;
    this.children.push(makeTree(value));
};

treeMethods.contains = function(target){

  var searchNodes = function(node) {
    // console.log('node', node);
    if(node.value === target) {
      return true;
    } else if (node.children.length>0) {
      // console.log('children',node.children,'length', node.children.length);
      for(var i = 0; i < node.children.length; i++) {
        // console.log('infor', node.children[i]);
        searchNodes(node.children[i]);
      }
      return false;
    }
  }
  return searchNodes(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
