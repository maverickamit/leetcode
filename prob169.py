from collections import defaultdict


class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        int_map = defaultdict(int)
        ans, max = nums[0], 0
        for elem in nums:
            int_map[elem] += 1
            count = int_map[elem]
            if count > max:
                ans, max = elem, count

        return ans
