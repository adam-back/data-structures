var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var removedIndex = 0;
  var addIndex = 0;

// obj = {
//  1: b
//  2: c
//}
// size = 1;
// removedIndex 2;
// add Index = 3
// out = b;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[addIndex] = value;
    size++;
    addIndex++;
  };

  someInstance.dequeue = function(){
    //find the first element of obj (which has been in longest)
    var out = storage[removedIndex];
    //decrease size
    size > 0 ? size-- : size;
    //shift down so that we now know what the oldest key-value pair is
    delete storage[removedIndex];
    removedIndex++;
    //return the first element

    return out;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
