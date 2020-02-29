/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.helper = [];
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  const len = this.helper.length;
  if (!len || x <= this.helper[len - 1]) {
    this.helper.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const len = this.helper.length;
  if (this.stack.pop() === this.helper[len - 1]) {
    this.helper.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return this.helper[this.helper.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
