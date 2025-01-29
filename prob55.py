class Solution:
    def canJump(self, nums: list[int]) -> bool:
        max_jump_access=0
        for i,num in enumerate(nums):
            if i>max_jump_access:
                return False
            max_jump_access = max(max_jump_access,i+num)
            if max_jump_access>=len(nums)-1:
                return True
        return True


sol = Solution()
print(sol.canJump([2,0,0]))