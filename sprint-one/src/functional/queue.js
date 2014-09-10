var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var add = 0;
  var remove = 0;

  // Implement the methods below
  // 0: a

  // size = 1;
  // count = 0;


  someInstance.enqueue = function(value){
    storage[add] = value;
    add++
    size++;
  };

  someInstance.dequeue = function(){
    var off;
    off = storage[remove];
    // off = a
    delete storage[remove];
    size--;
    remove++;
    return off;
  };

  someInstance.size = function(){
    if(size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};
