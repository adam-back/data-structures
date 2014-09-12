var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    var oldTail = list.tail;

    if(list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else if (list.head === list.tail) {
      list.tail = newNode;
      list.head.next = newNode;
    } else {
      list.tail = newNode;
      oldTail.next = newNode;
    }
  };
  // O(1) bc not affected the rest of the list

  list.removeHead = function(){
    var oldHead = list.head;
    if(oldHead === null) {
      return "Empty";
    } else {
      list.head = oldHead.next;
      return oldHead.value;
    }
  };
  // O(1) bc no cascading changes to rest of list

  list.contains = function(target){
    var found = false;

    var walk = function(position) {
      if(position.value === target) {
        found = true;
      } else if (position.next !== null) {
        walk(position.next);
      }
    }

    walk(list.head);
    return found;
  };
  //O(n) bc you may have to search the whole list
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
