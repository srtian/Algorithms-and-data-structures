/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const size = prices.length;
  let profit = 0;
  let min = prices[0];
  for (let i = 1; i < size; i++) {
    if (prices[i] > prices[i - 1]) {
      profit = Math.max(profit, prices[i] - min);
    } else {
      min = Math.min(min, prices[i]);
    }
  }
  return profit;
};
