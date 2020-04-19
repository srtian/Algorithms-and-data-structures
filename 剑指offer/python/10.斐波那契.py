class Solution(object):
    def fib(self, n):
        """
        :type n: int
        :rtype: int
        """
        dp = {}
        dp[0] = 0
        dp[1] = 1
        for i in range(2, n + 1):
            dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
        return dp[n]
