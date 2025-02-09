class Solution:
    def sortColors(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        zero_index =0
        two_index=n-1
        i=0

        while two_index>=i:
            num = nums[i]
            if num==0:
                nums[i],nums[zero_index] = nums[zero_index],num
                zero_index+=1
                i +=1
            elif num==2:
                nums[i],nums[two_index]= nums[two_index],num
                two_index-=1
            else:
                i +=1



sol = Solution()
nums =[0,1,0]
(sol.sortColors(nums))