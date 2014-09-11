var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var makeInstance = {
    stack: {},
    numContents: 0
  };
  extend(makeInstance, stackMethods);

return makeInstance;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {

  //numContents method
  size: function() {
    return this.numContents;
  },
  //pop method
  pop: function() {
    var removed = this.stack[this.numContents-1];
    delete this.stack[this.numContents-1];
    if(this.numContents > 0) {
      this.numContents--;
    }
    return removed;
  },
  //add method
  push: function(value) {
    this.stack[this.numContents] = value;
    this.numContents++;
  }
};
// var lunchLine = makeStack();
// lunchLine.makeIntace = {
//   stack{}
//   numContents
//   size
//   pop
//   push
// }

// lunchLine.makeInstance = {
//   stack {}
//   numContents
// }
// }

