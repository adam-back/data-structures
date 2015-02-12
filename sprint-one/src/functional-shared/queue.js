var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var makeInstance = {
    q: {},
    line: 0,
    toRemove: 0,
    toAdd: 0
  }
  extend(makeInstance, queueMethods);
  return makeInstance;
};

var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  size: function() {
    return this.line;
  },

  enqueue: function(value) {
    this.q[this.toAdd] = value;
    this.toAdd++;
    this.line++;
  },

  dequeue: function() {
    var out = this.q[this.toRemove];
    delete this.q[out];
    if(this.line > 0) {
      this.line--;
    }
    this.toRemove++;
    return out;
  }
};

// 0: a
// 1: b
// line: 2 - 1 = 1


