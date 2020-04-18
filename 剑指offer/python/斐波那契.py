class Solution(object):
    def fib(self, n):
        """
        :type n: int
        :rtype: int
        """
        dp = [0, 1]
        for i range(2, n):
            dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
        return dp[n]
