var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var inst = Object.create(queueMethods);
  inst.q = {};
  inst.l = 0;
  inst.toAdd = 0;
  inst.toRem = 0;
  return inst;
};

var queueMethods = {
  size: function() {
    return this.l;
  },
  enqueue: function(val){
    this.q[this.toAdd] = val;
    this.toAdd++;
    this.l++;
  },
  dequeue: function() {
    var rem = this.q[this.toRem];
    this.toRem++;
    delete rem;
    if(this.l>0){
      this.l--;
    }
    return rem;
  }
};


