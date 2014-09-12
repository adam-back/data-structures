var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = item;
};
// 0(1) -- immediately accesses position in set by name

setPrototype.contains = function(item){
  return this._storage[item] === item;
};
//0(1) -- immediately accesses position in set by name
setPrototype.remove = function(item){
  delete this._storage[item];
};
//0(1) -- immediately accesses position in set by name
/*
 * Complexity: What is the time complexity of the above functions?
 */
