class Solution:
    def longestPalindrome(self, s: str) -> int:
        charMap = {}
        ans = 0

        for a in s:
            if a in charMap:
                charMap[a] += 1
            else:
                charMap[a] = 1
        for value in charMap.values():
            remainder = value % 2
            ans += value - remainder

        if ans < len(s):
            return ans + 1
        else:
            return ans


sol = Solution()
print(sol.longestPalindrome("abccccdd"))
