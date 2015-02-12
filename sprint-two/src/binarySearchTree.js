var makeBinarySearchTree = function(value){
  var node = Object.create(TreeMethods);
  node.left = null;
  node.right = null;
  node.value = value;
  return node;
};

var TreeMethods = {
  insert: function(val) {
    //create a node with makeBinarySearchTree(val)
    var newNode = makeBinarySearchTree(val);
    //assume tree was started with a value;
    //create a function which takes a node and compares it down the tree
    var walk = function(n) {
      //compare new node to the top node
         //if the new node is greater
      if(n.value < newNode.value) {
        //if the parent has no right child
        if(n.right === null) {
          //set right to new node
          n.right = newNode;
        } else {
          //compare new node to right child (recurs)
          return walk(n.right);
        }

      } else {
      //if the new node is lesser
        //if the parent has no left child
        if(n.left === null) {
          //set left to new node
          n.left = newNode;
        } else {
          //compare new node to left child (recurs)
          return walk(n.left);
        }
      }
    }
    return walk(this);
  },
  //O(log(n)) nodes increase exponentially but our function only
  // has one more step for each additional layer

  contains: function(target) {
    //create a function which takes in a node
    var search = function(n) {
      //if node value matches target
      if(n.value === target) {
        //return true
        return true;
      } else if (n.right === null && n.left === null) {
        return false;
      } else {
        //if node value is less than target
        if(n.value < target) {
          return search(n.right);
        } else {
          return search(n.left);
        }
      }
    }
    return search(this);
  },
  //O(log(n)) same as above

  depthFirstLog: function(callback) {
    //create a function which takes in a node
    var execute = function (n) {
      //callback(node.value)
      callback(n.value);
      //if node.left
      if(n.left) {
        //return recurse(node.left)
        execute(n.left);
      } else if(n.right) {
        execute(n.right);
      }
    }
    return execute(this);
  }
}
// O(n) go through each node's value

/*
 * Complexity: What is the time complexity of the above functions?
 */
