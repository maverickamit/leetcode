class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        result = []
        right_product = 1
        for i, num in enumerate(nums):
            result.append(right_product)
            right_product = num * right_product
        left_product = 1
        for i, num in enumerate(nums):
            # Index of elems from right most side to left
            currIndex = len(nums) - 1 - i
            result[currIndex] = result[currIndex] * left_product
            left_product = nums[currIndex] * left_product

        return result
