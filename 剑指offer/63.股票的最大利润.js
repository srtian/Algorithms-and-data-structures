/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const size = prices.length;
  let max = 0;
  let buy = prices[0];
  for (let i = 1; i < size; i++) {
    if (prices[i] < prices[i - 1]) {
      buy = Math.min(buy, prices[i]);
    } else {
      max = Math.max(max, prices[i] - buy);
    }
  }
  return max;
};
