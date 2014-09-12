var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var newObj = {};
  if(this._storage[i]!==null) {
    this._storage[i] = [];
    newObj[k] = v;
    // console.log('obj', newObj,'at k', newObj[k]);
    this._storage[i].push(newObj);
    // console.log('store', this._storage[i]);
  } else {
    var prevContents = this._storage[i];
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  for(var j = 0; j < this._storage[i].length; j++) {
    console.log('array,', this._storage[i], 'length,', this._storage[i].length);
    for(var key in this._storage[i][j]) {
      console.log('obj', this._storage[i][j][key]);
      if(key===k) {
        console.log('return',this._storage[i][j][key])
        return this._storage[i][j][key];
      }
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
