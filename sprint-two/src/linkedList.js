var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
     list.value = makeNode(value);
     if(list.head === null) {
      list.head = list.value;
      list.tail = list.value;
     } else if (list.head === list.tail) {
      list.tail = list.value;
      list.head.next = list.value;
     } else {
      list.tail = list.value;
     }
  };
  //O(1)

  list.removeHead = function(){
    var oldHead = list.head.value;
    var newHead = list.head.next;
    delete oldHead;
    list.head = newHead;
    return oldHead;
  };
  //O(1)

  list.contains = function(target) {
    var doesContain = false;
    
    var nodeContains = function(curNode) {
      if(curNode.value === target) {
        doesContain = true;
      } else if(curNode.next !== null) {
        nodeContains(curNode.next);
      }
    }

    nodeContains(this.head);

    return doesContain;
  };
  //O(n)
  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
