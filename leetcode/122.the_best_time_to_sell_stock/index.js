/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  const size = prices.length;
  for (let i = 1; i < size; i++) {
    if (prices[i] > prices[i - 1]) {
      profit = profit + prices[i] - prices[i - 1];
    }
  }
  return profit;
};
