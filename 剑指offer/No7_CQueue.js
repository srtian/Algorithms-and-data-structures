var CQueue = function() {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  while (this.inStack.length) {
    this.outStack.push(this.inStack.pop());
  }
  this.inStack.push(value);
  while (this.outStack.length) {
    this.inStack.push(this.outStack.pop());
  }
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  return this.inStack.length ? this.inStack.pop() : -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
