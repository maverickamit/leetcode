class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = set()
        ans = 0
        pointer = 0
        for char in s:
            if char in seen:
                # Pointer can't move beyond current index i of char because the
                # previous iteration of char must be before that for it to be inside set
                while char in seen:
                    seen.remove(s[pointer])
                    pointer += 1
            seen.add(char)
            if len(seen) > ans:
                ans = len(seen)
        return ans


sol = Solution()
print(sol.lengthOfLongestSubstring("abcabcbb"))
