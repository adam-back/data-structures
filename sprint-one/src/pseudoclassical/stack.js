var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.height= 0;
  this.stack= {};

};

Stack.prototype.size = function() {
  return this.height;
};

Stack.prototype.push = function(val) {
  this.stack[this.height] = val;
  this.height++;
};

Stack.prototype.pop = function() {
  var popped = this.stack[this.height - 1];
  delete popped;
  if(this.height > 0) {
    this.height--;
  }
  return popped;
}

