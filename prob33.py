class Solution:
    def search(self, nums: list[int], target: int) -> int:
        left,right,middle=0,len(nums)-1,(len(nums)-1)//2
        if(nums[middle]==target):
                return middle
        if (nums[right]==target):
                return right
        if (nums[left])==target:
                return left
        while right-left>1:
            if(nums[middle]==target):
                return middle
            if (nums[right]==target):
                return right
            if (nums[left])==target:
                return left
            if nums[right]>nums[middle]:
                if (nums[middle]<target<nums[right]):
                    left = middle
                else:
                    right=middle
            elif nums[middle]>nums[left]:
                if (nums[left]<target<nums[middle]):
                    right = middle
                else:
                    left=middle
            middle=(left+right)//2
        return -1
