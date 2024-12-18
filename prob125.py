class Solution:
    def isPalindrome(self, s: str) -> bool:
        a = "".join(char.lower() for char in s if char.isalnum())
        l = 0
        r = len(a) - 1
        odd = 0 if (len(a) % 2 == 0) else 1

        while (r - l) > odd:
            if a[l] == a[r]:
                l += 1
                r -= 1
            else:
                return False
        return True


sol = Solution()

print(sol.isPalindrome("ab"))
