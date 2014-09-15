//Hash tables should utilize buckets that contain tuples (arrays)--not objects as shown in this solution.

var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var newObj = {};
  newObj[k] = v;
  if(this._storage[idx]===undefined) {
    this._storage[idx] = [];
    this._storage[idx].push(newObj);
  } else {
      this._storage[idx].push(newObj);
    }
};
//O(1) adding always to end does not affect rest of array contents

HashTable.prototype.retrieve = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);

  for(var j = 0; j < this._storage[idx].length; j++) {
    for(var key in this._storage[idx][j]) {
      if(key===k) {
        return this._storage[idx][j][key];
      }
    }
  }
};
// O(n) We have to go through the array n times, but there is only one key

HashTable.prototype.remove = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);
    for(var j = 0; j < this._storage[idx].length; j++) {
      for(var key in this._storage[idx][j]) {
        if(key===k) {
          this._storage[idx][j][key] = null;
      }
    }
  }
};
// O(n) same as retreive


/*
 * Complexity: What is the time complexity of the above functions?
 */
