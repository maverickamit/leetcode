class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        unique_triplets = set()

        for i, pivot in enumerate(nums):
            if pivot > 0:
                break
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            l = i + 1
            r = len(nums) - 1

            while l < r:
                sum = nums[l] + nums[r] + pivot
                if sum > 0:
                    r -= 1
                elif sum < 0:
                    l += 1
                else:
                    triplet = tuple(sorted([pivot, nums[l], nums[r]]))
                    unique_triplets.add(triplet)
                    l += 1

        return [list(triplet) for triplet in unique_triplets]


sol = Solution()


nums = [-1, 0, 1, 2, -1, -4]

print(sol.threeSum(nums))
