class Solution:
    def canJump(self, nums: list[int]) -> bool:
        memo = {}
        def explore(x):
            if x in memo:
                return memo[x]
            if x>=len(nums)-1:
                return True
            val = nums[x]
            if val ==0:
                return False
            max_jump = min(val,len(nums)-1-x) #Prevent out of bound exploration
            for i in range (max_jump):
                val_to_add =x+max_jump-i
                if val_to_add not in memo:
                    memo[val_to_add]= explore(val_to_add)
                if memo[val_to_add]:
                    return True
            return False

        return explore(0)
sol = Solution()
sol.canJump([2,0,0])