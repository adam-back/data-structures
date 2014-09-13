var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var newObj = {};
  newObj[k] = v;
  if(this._storage[i]===undefined) {
    this._storage[i] = [];
    this._storage[i].push(newObj);
  } else {
      this._storage[i].push(newObj);
    }
};
//O(1) adding always to end does not affect rest of array contents

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  for(var j = 0; j < this._storage[i].length; j++) {
    for(var key in this._storage[i][j]) {
      if(key===k) {
        return this._storage[i][j][key];
      }
    }
  }
};
// O(n) We have to go through the array n times, but there is only one key

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
    for(var j = 0; j < this._storage[i].length; j++) {
      for(var key in this._storage[i][j]) {
        if(key===k) {
          this._storage[i][j][key] = null;
      }
    }
  }
};
// O(n) same as retreive



/*
 * Complexity: What is the time complexity of the above functions?
 */
