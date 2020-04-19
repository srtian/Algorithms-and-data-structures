class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        count = 0
        for i in nums:
            if(count == 0):
                flag = i
            count += 1 if flag == i else -1
        return flag
