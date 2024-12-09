class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        hashset = set()
        for num in nums:
            if num in hashset:
                return True
            else:
                hashset.add(num)
        return False


sol = Solution()
nums = [1, 2, 3, 5]
print(sol.containsDuplicate(nums))
