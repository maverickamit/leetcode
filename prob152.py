import math


class Solution:
    def subArrMaxP(self, nums: list[int]) -> int:
        maxP = nums[0]
        currP = 1
        left = 0
        remaningNegative = 0

        for num in nums:
            if num < 0:
                remaningNegative += 1

        for i, num in enumerate(nums):
            if num < 0:
                remaningNegative -= 1
            currP *= num

            if currP < 0 and remaningNegative == 0:
                while left < i:
                    currP = currP // nums[left]
                    if nums[left] < 0:
                        break
                    left += 1
            if currP > maxP:
                maxP = currP
        return maxP

    def maxProduct(self, nums: list[int]) -> int:
        maxP = -math.inf
        result = []
        containsZero = False

        subarray = []

        for num in nums:
            if num == 0:
                containsZero = True
                if subarray:  # Only add non-empty subarrays
                    result.append(subarray)
                subarray = []  # Reset subarray
            else:
                subarray.append(num)

        if subarray:  # Append the last subarray if not empty
            result.append(subarray)
        if len(result) == 0:
            maxP = 0
        for list in result:
            if containsZero:
                maxP = max(maxP, self.subArrMaxP(list), 0)
            else:
                maxP = max(maxP, self.subArrMaxP(list))
        return maxP


sol = Solution()

print(sol.maxProduct([-2, 1, 0, -3]))
