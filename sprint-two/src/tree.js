var makeTree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = parent;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){

  var newChild = makeTree(value);
  this.value = value;
  newChild.parent = this;
  this.children.push(newChild);
};

treeMethods.contains = function(target){
  var flag = false;

  var searchNodes = function(node) {

    if(node.value === target) {
      flag = true;
    } else if (node.children.length>0) {
      for(var i = 0; i < node.children.length; i++) {
        searchNodes(node.children[i]);
      }
    }
  }
  searchNodes(this)
  return flag;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
