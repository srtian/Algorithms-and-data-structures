class Solution(object):
    def numWays(self, n):
        """
        :type n: int
        :rtype: int
        """
        dp = {
            0: 1,
            1: 1,
            2: 2
        }
        for i in range(3, n + 1):
            dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
        return dp[n]
