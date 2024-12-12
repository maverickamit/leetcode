
class Solution:
    def findMin(self, nums: list[int]) -> int:
        left,right,middle=0,len(nums)-1,(len(nums)-1)//2
        while right-left>1:
            if nums[right]>nums[middle]:
                right = middle
                middle = (left+right)//2
            elif nums[right]<nums[middle]:
                left = middle
                middle = (left+right)//2
        return min(nums[left],nums[right])





sol = Solution()
print(sol.findMin([3,4,5,1,2]))