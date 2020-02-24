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
  if (len === 0 || this.helper[len - 1] >= x) {
    this.helper.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.pop() === this.helper[this.helper.length - 1]) {
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
MinStack.prototype.getMin = function() {
  return this.helper[this.helper.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// this method is the helper isn't same with stack.
// just when this helper is empty or x <= helper's val,
// then push the x to helper
