var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.line = 0;
  this.toAdd = 0;
  this.toRem = 0;
  this.q = {};
};

Queue.prototype.size = function() {
  return this.line;
};

Queue.prototype.enqueue = function(val) {
  this.q[this.toAdd] = val;
  this.toAdd++;
  this.line++;
};

Queue.prototype.dequeue = function() {
  var out = this.q[this.toRem];
  delete this.q[this.toRem];
  this.toRem++;
  if(this.line > 0) {
    this.line--;
  }
  return out;
};


