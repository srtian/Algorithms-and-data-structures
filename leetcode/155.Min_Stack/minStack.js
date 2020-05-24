/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.helper = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  const len = this.helper.length;
  if (!len || this.helper[len - 1] >= x) {
    this.helper.push(x);
  } else {
    this.helper.push(this.helper[len - 1]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.length) {
    this.stack.pop();
    this.helper.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length) {
    return this.stack[this.stack.length - 1];
  }
  throw new Error("栈中为空");
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.helper.length) {
    return this.helper[this.helper.length - 1];
  }
  throw new Error("栈中为空");
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
