var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	if(this._storage[item] === undefined) {
		this._storage[item] = item;
	}
};
//O(1)

setPrototype.contains = function(item){
	return this._storage[item] === item;
};
//O(1)

setPrototype.remove = function(item){
	delete this._storage[item];
};
//O(1)

/*
 * Complexity: What is the time complexity of the above functions?
 */
