class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        left = 0
        right = 1
        maxval = 0
        length = len(prices)
        while right < length:
            if prices[right] < prices[left]:
                left = right
            else:
                maxval = max(maxval, prices[right] - prices[left])
            right += 1
        return maxval
