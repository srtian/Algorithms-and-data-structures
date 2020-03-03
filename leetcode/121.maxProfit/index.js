/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length;
  let arr = [];
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const val = prices[j] - prices[i];
      if (val > 0) {
        arr.push(val);
      }
    }
  }
  arr.sort((a, b) => a - b);
  return arr.pop() || 0;
};
