class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        currSum = 0
        maxSum = nums[0]
        for num in nums:
            if currSum < 0:
                currSum = 0
            currSum = currSum + num
            maxSum = currSum if currSum > maxSum else maxSum
        return maxSum


sol = Solution()
print(sol.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
