var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var inst = Object.create(stackMethods);
  inst.stack = {};
  inst.height = 0;
  return inst;
};

var stackMethods = {
  size: function() {
    return this.height;
  },

  push: function(val) {
    this.stack[this.height] = val;
    this.height++;
  },

  pop: function() {
    var popped = this.stack[this.height -1];
    delete this.stack[this.height-1];
    if(this.height > 0) {
      this.height--;
    }
    return popped;
  }
};


