var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var makeInstance = {
    stack: {},
    numContents: 0
  };
  extend(makeInstance, stackMethods);
  console.log(makeInstance);
return makeInstance;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods = {

  //numContents method
  size: function() {
    return numContents;
  },
  //pop method
  remove: function() {
    var removed = stack[numContents-1];
    var length = numContents-1
    delete stack[numContents-1];
    numContents--;
    return removed;
  },
  //add method
  push: function(value) {
    stack[numContents-1] = value;
    numContents++;
  }
};


